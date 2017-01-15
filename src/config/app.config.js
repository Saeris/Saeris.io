class Config {
  apollo = {
    token: ``,
    uri: `https://api.github.com/graphql`
  }

  api = {
    endpoints: [{
      name: `flickr`,
      endpoint: `https://api.flickr.com/services/rest/`,
      config: null
    }, {
      name: `twitch`,
      endpoint: `https://api.twitch.tv/kraken/`,
      config: {
        headers: {
          'Accept': `application/vnd.twitchtv.v5+json`,
          'Client-ID': `tkobrq6rshswesmz6jyq06i1c5d647`
        }
      }
    }]
  }

  profiles = {
    github: `saeris`,
    flickr: ``,
    twitch: `ansrath`
  }

  flickr = {
    endpoint: `https://api.flickr.com/services/rest/`,
    key: `9aa7f4e32ca938c496f7a3ac05d275b1`,
    user: `146688070%40N05`
  }
}

export default new Config()
