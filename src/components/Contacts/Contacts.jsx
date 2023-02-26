import React from "react";

import shortid from "shortid";

import style from './contacts.module.scss'

function Contacts(contacts) {
    return (
        <ul className={style.list}>
            {contacts.contacts.map(({ name, number, id }) => {
                if(!name.toLowerCase().includes(contacts.filter)) {
                    return null
                }
                return ( 
                    <li key={shortid()} id={id} className={style.item}>
                        <span className={style.name}>{name}</span>
                        <span className={style.number}>{number}</span>
                        <button className={style.btn} type="button" onClick={contacts.deleteContact} id={id}>X</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default Contacts