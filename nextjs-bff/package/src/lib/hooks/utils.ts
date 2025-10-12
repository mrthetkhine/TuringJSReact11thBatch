import Cookies from 'js-cookie';
export function useAuthenticated()
{
    const authenticated = Cookies.get('login');
    return authenticated;
}