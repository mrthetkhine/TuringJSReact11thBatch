'use client';

import useAuthenticated from "@/app/components/design_pattern/hoc/useAuthenticated";

export function AccessDenied()
{
    return (<div>
        <h2>Access Denied</h2>
    </div>);
}
function Page1()
{
    const isAuth = useAuthenticated();
    return (<div>
        {
            isAuth ? <h1> Page 1</h1> : <AccessDenied/>
        }

    </div>);
}
function Page2()
{
    const isAuth = useAuthenticated();
    return (<div>
        {
            isAuth ? <h1> Page 2</h1> : <AccessDenied/>
        }
    </div>);
}

export default function WhyHOC()
{
    return (<div>
        WhyHOC
        <Page1>
        </Page1>
        <Page2>
        </Page2>
    </div>);
}