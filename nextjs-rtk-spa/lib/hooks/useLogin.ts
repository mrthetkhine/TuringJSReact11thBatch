import {AuthUser, login, selectAuth} from "@/lib/features/auth/authSlice";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {useRouter, useSearchParams} from "next/navigation";
import {selectCount} from "@/lib/features/counter/counterSlice";


export default function useLogin() {

    const dispatch = useAppDispatch();
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectUrl = searchParams.get('redirectUrl');
    return function loginFunc(user:AuthUser)
    {
        dispatch(login(user))
            .unwrap()
            .then((data) => {
                if(redirectUrl){
                    router.push(redirectUrl)
                }
                else
                {
                    //console.log('Success ',data);
                    router.push('/home');
                }

            },error=>{
                //console.log('Error ',error);
            });
    }

}