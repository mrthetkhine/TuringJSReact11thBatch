'use client';
import {useState} from "react";

export default function SideEffectOutsideRender()
{
    let [users, setUsers]= useState([]);
    return(<div>
        Side effect
        {/*{
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    setUsers(json)

                })
        }*/}
        {
            users.map(user=><div key={user.id}> {user.name}</div>)
        }
    </div>);
}