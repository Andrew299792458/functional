import React, { useState } from "react";

export const Functional = ({title}) => {
    const [flag, setFlag] = useState(true)
    const Change = () => {
        setFlag(!flag)
    }

    return <div>
        {console.log(flag)}
        <button onClick={Change}>Click</button>
        <div>{title}</div>
    </div>
}