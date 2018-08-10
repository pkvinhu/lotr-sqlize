import React, { Component } from 'react'
import axios from 'axios'

class ContactList extends Component {
  constructor(){
  	super()
  	this.state = {
	  contacts: []
  	}
  }

  componentDidMount(){
  	// console.log('it me already mounted. go ahead. do your thang.');
  	axios.get('/api/lotrcontacts')
  	.then((response)=>{
  	  console.log(response);
  	  this.setState({
  	  	contacts: response.data
  	  })
  	})
  }

  render(){
  	return (
  	  <div>
  	  	<ul>
  	  	{this.state.contacts.map((contact, idx)=>{
  	  		console.log('hey, it me. i mounted.')
  	  		return <li key={idx}>{contact.name}</li>
  	  	})}
  	  	</ul>
  	  </div>
  	)
  }

}

export default ContactList;