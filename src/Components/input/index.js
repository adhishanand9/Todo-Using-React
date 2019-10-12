import React from 'react';

export default function(props)
{
    return(
        <input type="text" value={props.data} onChange={props.change}/>
    )
}