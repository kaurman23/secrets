import React,{useState} from 'react';
import shortid from "shortid";

export const Dashboard = () => {

    const [secrets, setSecrets] = useState({
        secrets: [
            {id:1, text:"Hello" },
            {id:2, text:"It's"},
            {id:3, text:"Britney Bitch"}
        ]
    })

    return (
        <div>
            <input placeholder="Enter your secret"></input>
            <button>ADD</button>
        </div>
    )
}
