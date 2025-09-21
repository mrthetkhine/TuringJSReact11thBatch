export default async function UsersPage()
{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
    return (<div>
        User page
        {
            users.map((user:any)=><div key={user.id}>{user.name}</div>)
        }
    </div>);
}