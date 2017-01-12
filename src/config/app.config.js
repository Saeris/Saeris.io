class Config {
  api = {
    token: process.env.API_KEY,
    uri: `https://api.github.com/graphql`
  }

  flickr = {
    endpoint: `https://api.flickr.com/services/rest/`,
    key: `9aa7f4e32ca938c496f7a3ac05d275b1`,
    user: `146688070%40N05`
  }
}

export default new Config()
