import {useAppDispatch} from "@/lib/hooks";
import {useRouter} from "next/navigation";
import {AuthUser, logout} from "@/lib/features/auth/authSlice";

export default function useLogout() {

    const dispatch = useAppDispatch();
    const router = useRouter();

    return function logoutFun()
    {
        dispatch(logout());
        router.push('/login');
    }

}