// API modules are used to perform the AJAX
// communications between client (browser)
// and the server
import sendRequest from './send-request';
const BASE_URL = '/api/users';

export function getAll() {
  return sendRequest(BASE_URL)
}

export function search(searchTerm) {
  return sendRequest(BASE_URL, 'POST', searchTerm);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}