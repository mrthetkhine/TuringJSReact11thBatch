
export function User()
{
    return (<div>
        <h3>User</h3>
    </div>);
}
export function Admin()
{
    return (<div>
        <h3>Admin</h3>
    </div>);
}
export default function UserAccount({role}) {
    /*if(role==='admin'){
        return <Admin />;
    }else if (role==='user') {
        return <User />;
    }
    else
    {
        return null;
    }*/
    return (<div>
        <div>
            {
                0 && "Not rendered"
            }
        </div>
        <div>
            {
                role==="admin" && "User is Admin"
            }
        </div>

        {
           role=='admin'? <Admin /> :role=='user'?<User/>:null
        }
    </div>)
}