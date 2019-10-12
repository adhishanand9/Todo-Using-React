import React from 'react';

export default function(props)
{
    return(
        <ul>
            {
                props.todo.map((item,i)=>{
                    return (
                        <li key={i}>{item}
                            <button key={i} onClick={props.deleteItem(i)} >Delete</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}