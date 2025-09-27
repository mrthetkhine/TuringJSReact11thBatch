'use client';

import useCustomForm from "@/app/components/custom-form/useCustomForm";

interface ProfileForm{
    name: string;
    email: string;
}
export default function CustomForm()
{
    const {handleSubmit, register}=useCustomForm<ProfileForm>({
        defaultValue:{
            name: "DummyName",
            email: "DummyEmail@gmail.com",
        }
    })
    const onSubmit = (values:ProfileForm):void=>{
      console.log('CustomForm submit ',values);
    };
    return (<div>
        Custom form
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text"
                       {... register("name")} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text"
                    {... register("email")} />
            </div>
            <div>
                <button type="submit">
                    Submit
                </button>
            </div>
        </form>
    </div>);
}