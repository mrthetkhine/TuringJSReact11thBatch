'use server';
import {redirect} from "next/navigation";
import { loginApi } from "../api/authApi";
import { loginSchema } from "../schema/loginShema";
import {cookies} from "next/headers";
async function delay(ms:number)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}
export async function loginAction(previousState:any,formData: FormData):Promise<any> {

    //await delay(3000);
    console.log('Login Action preState ',previousState ,' form Data', formData);
    const loginFormData = Object.fromEntries(formData);
    console.log('Login form data ',loginFormData);
    const validateLoginForm = loginSchema.safeParse(loginFormData);
    let username = formData.get("username")??'';
    let password = formData.get("password")??'';
    let user = {
        username,
        password,
    }
    if(!validateLoginForm.success)
    {
        console.log('Error ',validateLoginForm.error.flatten().fieldErrors);
        return {
            errors: validateLoginForm.error.flatten().fieldErrors
        }
    }
    else
    {
        console.log('Success');
        let redirectUrl = '/authentication/login'
        try {
            let authResult = await loginApi(user);
            console.log('Auth result',authResult);
            const cookieStore = await cookies();
            if(authResult.token)
            {
                let redirectUrlFromCookie = await cookieStore.get('redirectUrl');
                if(redirectUrlFromCookie?.value)
                {
                    redirectUrl= redirectUrlFromCookie?.value
                }
                else
                {
                    redirectUrl= '/';
                }
                //console.log('redirectUrlFromCookie ',redirectUrlFromCookie);
                cookieStore.set('auth-token',authResult.token,{
                    httpOnly:true,
                });
                cookieStore.set('login','true');
            }
        }
        catch(err){
            console.error('invalid login ',err);
            return {
                errors: {
                    username: 'Invalid username or password',
                },
            };
        }
        finally {
            redirect(redirectUrl);
        }
        return {
            success: "Login successful",
        }
    }
}
export  async  function logoutAction()
{
    const cookieStore = await cookies()
    cookieStore.delete( 'auth-token');
    cookieStore.delete( 'redirectUrl');
    cookieStore.delete('login');
    redirect('/authentication/login');
}