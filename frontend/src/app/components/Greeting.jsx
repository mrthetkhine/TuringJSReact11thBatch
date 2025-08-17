export default function Greeting(props)
{
    console.log('Props ', props);
    return (<div>
        Hello {props.name}
    </div>);
}