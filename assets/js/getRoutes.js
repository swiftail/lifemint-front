const axios = require('axios')
const { getServices } = require('./api').createApi(axios)

export default async function getRoutes() {

  console.log(arguments)

  let routes = [];

  let services = await getServices()

  services
    .forEach(s => routes.push(`/services/${s.slug}`))

  return routes

}
