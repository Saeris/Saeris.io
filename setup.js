import fs from 'fs'
fs.createReadStream(`.env.default`)
  .pipe(fs.createWriteStream(`.env`))
