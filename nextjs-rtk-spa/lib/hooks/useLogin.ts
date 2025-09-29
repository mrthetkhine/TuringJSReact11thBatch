import {AuthUser, login, selectAuth} from "@/lib/features/auth/authSlice";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {useRouter} from "next/navigation";
import {selectCount} from "@/lib/features/counter/counterSlice";


export default function useLogin() {

    const dispatch = useAppDispatch();
    const router = useRouter();

    return function loginFunc(user:AuthUser)
    {
        dispatch(login(user))
            .unwrap()
            .then((data) => {
                //console.log('Success ',data);
                router.push('/home');
            },error=>{
                //console.log('Error ',error);
            });
    }

}