import React from "react";


function Filter({filter}) {
        return (
            <div>
                <p>Find contacts by name</p>
                <input type="text" onInput={filter} />
            </div>
        )
}


export default Filter