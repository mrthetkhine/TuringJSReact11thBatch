import useAuthenticated from "@/app/components/design_pattern/hoc/useAuthenticated";
import {AccessDenied} from "@/app/components/design_pattern/hoc/WhyHOC";
import {useEffect} from "react";

export default function withLogger(Component) {
    //console.log('with logger ',Component);
    return function ()
    {
        useEffect(() => {
            console.log('Component ',Component.name,'render');
        }, []);
        return (<div>
            <Component/>
        </div>);
    }

}