import {createAppSlice} from "@/lib/createAppSlice";
import {fetchCount} from "@/lib/features/counter/counterAPI";
import {API_URL} from "@/lib/config";
import {counterSlice} from "@/lib/features/counter/counterSlice";

export interface AuthState {
    token: string;
}
export interface AuthUser {
    username:string;
    password:string;
}
export interface AuthResponse{
    token:string;
}
const initialState: AuthState = {
    token: ''
};
export const authSlice = createAppSlice({
    name:'auth',
    initialState,
    reducers: (create) =>({

        login: create.asyncThunk(
            async (user: AuthUser, { rejectWithValue }) => {
                const response = await fetch(`${API_URL}/api/users/login`, {
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json' // Important for JSON data
                    },
                    body: JSON.stringify(user)
                });
                const json:any = await response.json();
                console.log('Auth response ',json);
                if(json.token)
                {
                    return (json as AuthResponse);
                }
                else
                {
                    console.log('Reject');
                    return rejectWithValue(json);

                }
            },
            {
                pending: (state) => {

                },
                fulfilled: (state, action) => {
                    console.log('fulfilled Action ',action);
                    state.token = action?.payload?.token??'';

                },
                rejected: (state,action) => {
                    console.log('Reject case ',action?.payload);
                    state.token = '';
                },
            },
        ),
        logout:create.reducer((state) => {
            state.token = '';
        })
    }),
    selectors: {
        selectAuth: (state) => state.token,

    },
});

export const { login, logout } = authSlice.actions;
export const { selectAuth } = authSlice.selectors;