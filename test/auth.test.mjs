import { before, after, test } from 'node:test';
import assert from 'node:assert';
import { start, stop } from '../server.js';

before(async () => {
  await start();
  await authenticate();
});

after(() => {
  stop();
});

let authCookie = undefined;

let authenticate = async () => {
  let res = await fetch('http://localhost:5100/api/v1/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email: 'john@gmail.com', password: 'secret123' }),
    headers: { 'content-type': 'application/json' }
  });
  let setCookieHeaders = res.headers.getSetCookie();
  setCookieHeaders.forEach(c => {
    let cookie = c.split(';')[0];
    if (cookie.startsWith('token=')) {
      authCookie = cookie;
    }
  });
};

test('chracter API', async () => {
  let res = await fetch('http://localhost:5100/api/v1/characters', {
    headers: { cookie: authCookie }
  });
  assert.strictEqual(res.status, 200);
  let data = await res.json();
  assert.strictEqual(Array.isArray(data?.characters), true);
});