import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class FormAddContact extends Component {
    state = {
        name: '',
        number: ''
    };

    nameInputId =  nanoid();
    numberInputId = nanoid();

    handleChange = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state, this.nameInputId);
        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div >
                <label  htmlFor={this.nameInputId}>
                Name
                </label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                    id={this.nameInputId}
                />
                <label  htmlFor={this.numberInputId}>
                Number
                </label>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                    onChange={this.handleChange}
                    id={this.numberInputId}
                />
            </div>

            
            <button type='submit'>Add contact</button>
            </form>
        );
    }
}

export default FormAddContact;