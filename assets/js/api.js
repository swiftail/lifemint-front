const API_URL = process.env.API_URL;

async function _get(...pathFragments) {
    // TODO: error handling?
    let path = pathFragments.join('/');

    return fetch(`${API_URL}/${path}`).then(r => r.json());
}

export const getServices = async () => _get('services')
export const getService = async (id) => _get('services', id)