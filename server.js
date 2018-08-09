const express = require('express');
const app = express();
const db = require('./db');
const { Account, Contact } = db.models;
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(process.cwd(), 'dist')));

const init = async () => {
  await db.sync()
  await db.seed()
  app.listen(PORT, ()=> {
  	console.log(`I'm.....alive`)
  })
}

init();

// app.get('/', async (req, res, next) => {
//   const allContacts = await Contact.findAll({ include: [Account]});
//   res.json(allContacts);
// })


