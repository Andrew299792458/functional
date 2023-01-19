import React, { useEffect, useState } from "react";

export const Functional = ({ title }) => {
    const [flag, setFlag] = useState(true)
    const Change = () => {
        setFlag(!flag)
    }
    const R = () => {
        console.log("i'm death")
    }
    useEffect(() => {
        // console.log("Update")
        return R
    }, [])
    return <div>
        <button onClick={Change}>Click1</button>
        <div>{title}</div>
    </div>
}

