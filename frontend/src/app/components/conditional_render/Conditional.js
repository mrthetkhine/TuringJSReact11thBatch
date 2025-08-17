import {User,Admin} from "@/app/components/conditional_render/UserAccount";

let mapping = {
    'admin':<Admin/>,
    'user':<User/>,
}
export default function Conditional({role})
{
    let Comp ;
    /*if(role == "admin")
    {
        Comp = <Admin />;
    }
    else if(role == "user")
    {
        Comp = <User />;
    }*/
    Comp= mapping[role];
    return(<div>
        {Comp}
    </div>);
}
