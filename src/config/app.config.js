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

  services = [
    {name: `Facebook`, id: `saeris`, icon: `facebook`, nav: true, url: `http://www.facebook.com/saeris`},
    {name: `GitHub`, id: `saeris`, icon: `github`, nav: true, url: `http://www.github.com/saeris`},
    {name: `Instagram`, id: `saeris.io`, icon: `instagram`, nav: true, url: `http://www.instagram.com/saeris.io/`},
    {name: `LinkedIn`, id: `saeris`, icon: `linkedin`, nav: true, url: `http://www.linkedin.com/in/saeris`},
    {name: `Twitch`, id: `ansrath`, icon: `twitch`, nav: true, url: `http://www.twitch.tv/ansrath`},
    {name: `Twitter`, id: `saeris`, icon: `twitter`, nav: true, url: `http://www.twitter.com/saeris`},
    {name: `Steam`, id: `saeris`, icon: `steam`, nav: true, url: `http://steamcommunity.com/id/ansrath`}
  ]

  flickr = {
    endpoint: `https://api.flickr.com/services/rest/`,
    key: `9aa7f4e32ca938c496f7a3ac05d275b1`,
    user: `146688070%40N05`
  }
}

export default new Config()
