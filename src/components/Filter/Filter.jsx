import React from "react";

import style from './filter.module.scss'


function Filter({filter}) {
        return (
            <div className={style.box}>
                <p className={style.title} >Find contacts by name</p>
                <input className={style.input} type="text" onInput={filter} />
            </div>
        )
}

export default Filter