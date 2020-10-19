import tokenService from '../utils/tokenService';

const BASE_URL = '/api/clients';



export function getAll() {
    return fetch(BASE_URL).then(res => res.json());
  }

export function create(client) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(client)
    }).then(res => res.json());
}

export function update(client) {
    return fetch(`${BASE_URL}/${client._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(client)
    }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}