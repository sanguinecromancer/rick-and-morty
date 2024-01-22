
import User from '../models/UserModel.js';
import bcrypt from 'bcryptjs';
import { comparePassword, hashPassword } from '../utils/passwordUtils.js';
import { UnauthenticatedError } from '../errors/customErrors.js';
import { createJWT } from '../utils/tokenUtils.js';

export const register = async (req, res) => {
	try {
		const isFirstAccount = (await User.countDocuments()) === 0;
		req.body.role = isFirstAccount ? 'admin' : 'user';

		const hashedPassword = await hashPassword(req.body.password);
		req.body.password = hashedPassword;

		const user = await User.create(req.body);
		res.status(201).json({ msg: 'user created' });
	
	} catch(error) {
		res.status(500).json({ msg: 'server error'});
	}
};


export const login = async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		const isPasswordCorrect = await comparePassword(
			req.body.password,
			user.password
		);
		if (!isPasswordCorrect) throw new UnauthenticatedError('invalid credentials');

		const token = createJWT({ userId: user._id, role: user.role});
		
		const oneDay = 1000 * 60 * 60 * 24;

		res.cookie('token', token, {
			httpOnly: true,
			expires: new Date(Date.now() + oneDay),
			secure: process.env.NODE_ENV === 'production',
		});
		
		res.status(200).json({ msg: 'user logged in' });

	} catch(error) {
		res.status(500).json({ msg: 'server error'});
	}
}; 

export const logout = (req, res) => {
	res.cookie('token', 'logout', {
	  httpOnly: true,
	  expires: new Date(Date.now()),
	});
	res.status(200).json({ msg: 'user logged out!' });
};

