'use client';
import {ChangeEvent, ChangeEventHandler, FormEvent, useState} from "react";

export default function NormalForm()
{
    const [data,setData]=useState({
        name:"",
        age:0
    });


    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Data ',data);
    }
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    return (<div>
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text"
                       name="name"
                       value={data.name}
                       onChange={onChange} />
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input type="text"
                       name="age"
                       value={data.age}
                       onChange={onChange} />
            </div>
            <div>
                <button type="submit">
                    Submit
                </button>
            </div>
        </form>
    </div>);
}