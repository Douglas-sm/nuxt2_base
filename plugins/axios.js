export default function ({ $axios, redirect, $config }) {

  $axios.onRequest(config => {
    // config.headers.common['Accept'] = `Bearer ${ $config.api_token }`
  })

  $axios.onResponse(config => {
    // config.headers.common['access-control-allow-origin'] = `*`
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })

}
