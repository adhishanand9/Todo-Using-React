import React from 'react';

export default function(props)
{
    console.log(props);
    return(
        <button onClick={props.click}>Save</button>

    )
}