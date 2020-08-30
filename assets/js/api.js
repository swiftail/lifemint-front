export const API_URL = process.env.API_URL;

async function apiGet($axios, path) {

  let url = `${API_URL}/${path}`

  return $axios.get(url)
    .then(r => r.data)
    .catch(e => {
      console.error(`Api request failed: ${url}`, e)
      return undefined
    })

}

async function apiPost($axios, path, data) {

  let url = `${API_URL}/${path}`

  return $axios.post(url, data)
    .then(r => r.data)
    .catch(e => {
      console.error(`Api request failed: ${url}`, e)
      return undefined
    })

}

export const createApi = $axios => ({

  getServices: async () => apiGet($axios, 'services'),
  getExperts: async () => apiGet($axios, 'experts'),
  getReviews: async () => apiGet($axios, 'reviews'),
  getAdvantages: async () => apiGet($axios, 'advantages'),
  getGallery: async () => apiGet($axios, 'gallery'),
  getPromotions: async () => apiGet($axios, 'promotions'),
  getPricelist: async () => apiGet($axios, 'pricelist'),

  postAppointment: async (data) => apiPost($axios, 'appointments', data)
})
