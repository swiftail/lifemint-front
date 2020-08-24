export const API_URL = process.env.API_URL;

async function _apiGet(path) {

  return fetch(`${API_URL}/${path}`)
    .then(r => r.json())
    .catch(e => {
      console.error(`Api request failed: ${path}`, e)
      return undefined
    });

}

async function _apiPost(path, data) {

  console.log('Post', path, data)

  return fetch(`${API_URL}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(r => r.json())
    .catch(e => {
      console.error(`Api request failed: ${path}`, e)
      return undefined
    })

}

export const getServices = async () => _apiGet('services');
export const getExperts = async () => _apiGet('experts');
export const getReviews = async () => _apiGet('reviews');
export const getAdvantages = async () => _apiGet('advantages')
export const getGallery = async () => _apiGet('gallery')

export const postAppointment = async (data) => _apiPost('appointments', data)
