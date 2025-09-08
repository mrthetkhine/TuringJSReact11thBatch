interface GreetingProps  {
    message:string
}
export default function Greeting({message}:GreetingProps)
{
    //let str = 'Hello World';

    return (<div>
        Greeting {message.toUpperCase()}
    </div>);
}
