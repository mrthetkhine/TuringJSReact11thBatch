
export default function Profile({profile,size=100})
{
    console.log('Profile Component');

    return (<div>

        <h2>{profile.name}</h2>
            <img
                src={profile.image}
                alt="Katherine Johnson"
                width={size}
                height={size}
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