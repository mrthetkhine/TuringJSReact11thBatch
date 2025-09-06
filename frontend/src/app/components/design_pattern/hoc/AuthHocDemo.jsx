'use client';

import withAuth from "@/app/components/design_pattern/hoc/withAuth";
import withLogger from "@/app/components/design_pattern/hoc/withLogger";

function Page1()
{
    return (<div>
        <h1> Page1</h1>
    </div>);
}
function Page2()
{
    return (<div>
        <h1> Page 2</h1>
    </div>);
}
const AuthPage1 = withAuth(withLogger(Page1));
const AuthPage2 = withAuth(Page2);
export default function AuthHocDemo()
{
    return (<div>
        Auth Demo
        <AuthPage1/>
        <AuthPage2/>
    </div>);
}