'use client';
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
    name: string
    age: string
}


export default function App() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


    console.log(watch("name")) // watch input value by passing the name of it


    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test" {...register("name")} />

            <br/>
            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("age", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.age && <span>This field is required</span>}


            <input type="submit" />
        </form>
    )
}