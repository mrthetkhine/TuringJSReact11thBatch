import {useBoundStore} from "@/lib/store/useBoundStore";

export default function useAuth()
{
    const {auth} =useBoundStore();
    return auth.token;
}