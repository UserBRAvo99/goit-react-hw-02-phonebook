import React from "react";

import shortid from "shortid";

function Contacts(contacts) {
    return (
        <ul>
            {contacts.contacts.map(({ name, number, id }) => {
                if(!name.toLowerCase().includes(contacts.filter)) {
                    return null
                }
                return ( 
                    <li key={shortid()} id={id}>
                        <span>{name}</span>
                        <span>{number}</span>
                        <button type="button" onClick={contacts.deleteContact} id={id}>Delete</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default Contacts