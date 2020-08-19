const API_URL = process.env.API_URL;

async function _apiGet(...pathFragments) {
    // TODO: error handling?
    let path = pathFragments.join('/');

    return fetch(`${API_URL}/${path}`)
        .then(r => r.json())
        .catch(e => {
            console.error(`Api request failed: ${path}`, e)
            return undefined
        });
}

export const getServices = async () => _apiGet('services')
export const getService = async (id) => _apiGet('services', id)