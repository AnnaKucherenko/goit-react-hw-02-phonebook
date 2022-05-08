import React, { Component } from 'react';
import FormAddContact from './components/form/FormAddContact';
import ContactList from 'components/contactList/ContactList';
// import { nanoid } from 'nanoid'

  
class App extends Component {
  state = {
    contacts: [],
    
  };

  formSubmitHendler = data => {
    console.log(data);
    this.setState((state, data) => ({contacts:state.contacts.push(data)}));
    console.log(this.state);
  }

  render() {
    const contacts = this.state.contacts;
    console.log(contacts)
    return (
      
      <div>
        <h1>Phonebook</h1>
        <FormAddContact onSubmit={this.formSubmitHendler }/>
        
        <h2>Contacts</h2>
        {contacts.length > 0 && <ContactList contactsArr={contacts}/>}
      </div>
    ); 
  }
};

export default  App;
