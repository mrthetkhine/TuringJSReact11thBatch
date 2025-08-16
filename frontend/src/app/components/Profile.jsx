export default function Profile()
{
    console.log('Profile Component');
    return (<div>
            <h3>Profile</h3>
            <img
                src="https://i.imgur.com/MK3eW3Am.jpg"
                alt="Katherine Johnson"
                width="100"
                height="100"
                className={"profile"}
            />
    </div>);
}
export function Another()
{
    return (
        <div>
            <div>Another Component</div>
            <div>Second line Component</div>
            <p>Hello</p>
        </div>
        );
}