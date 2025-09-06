import useAuthenticated from "@/app/components/design_pattern/hoc/useAuthenticated";
import {AccessDenied} from "@/app/components/design_pattern/hoc/WhyHOC";

export default function withAuth(Component) {
    //console.log('with Auth ',Component);
    return function ProtectedComponent()
    {
        const isAuth = useAuthenticated();
        return (<>
            {
                isAuth ? <Component/> : <AccessDenied/>
            }
        </>);
    }

}