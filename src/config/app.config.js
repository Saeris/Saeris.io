class Config {
  authURL = process.env.AUTH_URL

  api = {
    token: process.env.API_KEY,
    uri: `https://api.github.com/graphql`
  }
}

export default new Config()
