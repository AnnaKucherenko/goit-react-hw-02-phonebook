function ContactList({ contactsArr }) {
    console.log(contactsArr)
        return (
            <ul>
                {contactsArr.map(contact => (
                    <li key={contact.id}>
                        {contact.name}:{contact.number}
                    </li>
                ))}
            </ul>
        );
    
}

export default ContactList;