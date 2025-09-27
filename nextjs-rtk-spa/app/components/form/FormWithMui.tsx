'use client';


import {SubmitHandler, useController, UseControllerProps, useForm} from "react-hook-form";
import TextField from "@mui/material/TextField";

type FormInput = {
    name: string
    age: string
}
function Input(props: UseControllerProps<FormInput>) {
    const { field, fieldState } = useController(props)

    return (
        <div>
            <input {...field} placeholder={props.name} />
            <p>{fieldState.isTouched && "Touched"}</p>
            <p>{fieldState.isDirty && "Dirty"}</p>
            <p>{fieldState.invalid ? "invalid" : "valid"}</p>
        </div>
    )
}
export default function FormWithMui()
{
    const { handleSubmit, control, reset } = useForm<FormInput>({
        defaultValues: {
            name: "dummy",
            age:"40",
        },
    })
    const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

    return(<div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input control={control} name="name" rules={{ required: true }} />
            <Input control={control} name="age" rules={{ required: true }} />
            <input type="submit" />
        </form>
    </div>)
}