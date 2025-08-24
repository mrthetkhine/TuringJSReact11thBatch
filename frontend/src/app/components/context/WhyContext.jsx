

function GrandParent({message})
{
    return (<div>
        Grand parent
        <Parent message={message}/>
    </div>);
}
function Parent({message})
{
    return (<div>
        Parent
        <Child message={message}/>
    </div>);
}

function Child({message})
{
    return (<div>
        Child {message}
    </div>)
}
export default function WhyContext()
{
    return(<div>
        <GrandParent message={'Hello'}/>
    </div>);
}