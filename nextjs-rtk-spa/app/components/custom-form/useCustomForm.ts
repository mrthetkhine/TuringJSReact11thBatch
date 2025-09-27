'use client';
import {ChangeEvent, FormEvent, FormEventHandler, useState} from "react";
interface Map {
    [key: string]: any
}
export type CustomHandleSubmit<T>=(data:T) => void
interface UseCustomFormInput<T extends Map> {
    defaultValue?: T;
}
export default function useCustomForm<T extends Map>({
    defaultValue,
                                         }:UseCustomFormInput<T>) {
    console.log('useCustomForm', defaultValue);

    const [formValue, setFormValue] = useState<T>(defaultValue?defaultValue:{} as any);
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    function register(name:string)
    {
        //const value = formValue[name];
        return {
            value:formValue[name],
            name : name,
            onChange:onChange
        }
    }
    function handleSubmit(callback:CustomHandleSubmit<T>)
    {
        return function callbackHandler(e:FormEvent<HTMLFormElement>):void {
            console.log('handleSubmit callback', formValue);
            callback(formValue);
            e.preventDefault();
        }
    }
    /**/
    return {handleSubmit, register};
}