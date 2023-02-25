import React from "react";

import shortid from "shortid";


class Phonebook extends React.Component {
    state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
}
    inputChange = event => {
        const {name, value} = event.currentTarget
        this.setState({[name]: value})
    }
    formOnSubmit = (event) => {
        event.preventDefault()
        this.state.contacts.unshift({name: this.state.name ,number: this.state.number, id: shortid()})
        this.reset()
    }
    reset = () => {
        this.setState({name: '',number: ''})
    }

    render() {
        const contactsData = this.state.contacts
        return (
            <div>
                <div>
                    <h2>Phonebook</h2>
                    <form action="#" onSubmit={this.formOnSubmit}>
                        <label htmlFor="#">
                            Name
                            <input
                                type="text"
                                name="name"
                                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                required
                                value={this.state.name}
                                onChange={this.inputChange}
                            />
                            Number
                            <input
                                type="tel"
                                name="number"
                                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                required
                                value={this.state.number}
                                onChange={this.inputChange}
                                />
                            <button>Add contact</button>
                        </label>
                    </form>
                </div>
                <div>
                    <h2>Contacts</h2>
                    <ul>
                        {contactsData.map(({name, number, id}) => {
                            return (
                                <li key={shortid()} id={id}>
                                    <span>{name}</span>
                                    <span>{number}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Phonebook
