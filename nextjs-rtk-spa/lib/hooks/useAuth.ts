import {useAppSelector} from "@/lib/hooks";
import {selectAuth} from "@/lib/features/auth/authSlice";

export default function useAuth()
{
    const token = useAppSelector(selectAuth);
    return !!token;

}