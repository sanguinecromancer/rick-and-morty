import React from 'react';

import { IoIdCard, IoHeartCircleOutline } from 'react-icons/io5';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';

const links = [
  { text: 'all characters', path: 'all-characters', icon: <IoIdCard /> },
  { text: 'favorite characters', path: 'favorite-characters', icon: <IoHeartCircleOutline /> },
  { text: 'profile', path: 'profile', icon: <ImProfile /> },
  { text: 'admin', path: 'admin', icon: <MdAdminPanelSettings /> },
];

export default links;