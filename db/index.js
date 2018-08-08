const Sequelize = require('sequelize');
const asme = new Sequelize(process.env.DATABASE_URL, { logging:false });
const { contacts, companies } = require('./seed');


const sync = () => asme.sync({ force: true });
const seed = ()=> {
  let Samwise, Frodo, Gandalf, Boromir, Aragorn, Gimli, Legolas;
  let Second, MoShu, MagBear, Forgive, PawCro, KilSmalls, LushLoc;
  return Promise.all(contacts.map((contact)=> {
  	return Contact.create(contact)
  }))
  .then((contactInstances)=>{
  	[ Samwise, Frodo, Gandalf, Boromir, Aragorn, Gimli, Legolas ] = contactInstances
  	return Promise.all(companies.map((company)=>{
  	  return Account.create(company)
  	}))
  	.then((companyInstances)=>{
  	  [ Second, MoShu, MagBear, Forgive, PawCro, KilSmalls, LushLoc ] = companyInstances
  	  Second.setContact(Samwise);
  	  MoShu.setContact(Frodo);
  	  MagBear.setContact(Gandalf);
  	  Forgive.setContact(Boromir);
  	  PawCro.setContact(Aragorn);
  	  KilSmalls.setContact(Gimli);
  	  LushLoc.setContact(Legolas);
  	})
  })  
}

const Contact = asme.define('contacts', {
  name: {
	type: Sequelize.STRING,
	allowNull: false
  },
  email: {
  	type: Sequelize.STRING,
  	validate: {
  	  isEmail: true
  	},
  	allowNull: false
  },
  phonenumber: Sequelize.INTEGER
})

const Account = asme.define('accounts', {
  coName: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  location: {
  	type: Sequelize.STRING
  },
  website: {
  	type: Sequelize.STRING,
  	validate: {
  	  isUrl: true
  	}
  }
})

Contact.hasMany(Account)
Account.belongsTo(Contact)

module.exports = {
  sync, 
  seed,
  models: {
  	Contact,
  	Account
  }
}