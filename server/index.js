const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const mysql=require('mysql');
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

//  database connection

const db= mysql.createConnection(
  {
      host:'localhost',
      user: 'swftrust',
      password: 'password',
      database:'swf_trust'
  }
);
db.connect((err)=>{
  if(err){
      throw err;
  }
  console.log('*******connected to database**********');
});
global.db= db;


// Routes Middleware
app.use(express.json());


/* Insert the userAllData */
app.use('/scholarship', require('./controller/scholarship'));
app.use('/expenditure',require('./controller/expenditure'));
app.use('/news',require('./controller/news'));
app.use('/donations',require('./controller/donation'));
app.use('/testimonial',require('./controller/testimonial'));
app.use('/popupTest',require('./controller/popupTest'));
app.use('/coreTeam',require('./controller/coreTeam'));
app.use('/bannerCard',require('./controller/bannerCard'));
app.use('/campaign',require('./controller/campaign'));

start()
