'use client';
import {useGetQuotesQuery} from "@/lib/features/quotes/quotesApiSlice";
import {useGetAllTodosQuery,useSaveTodoMutation} from "@/lib/features/todoApi/todoApiSlice";
import TodoListUI from "@/app/newtodo/TodoListUI";
import {Button} from "@mui/material";
import TodoEntryTwo from "@/app/newtodo/TodoEntryTwo";

export default function NewTodoPage()
{
    const { data:response, isError, isLoading, isSuccess,refetch } = useGetAllTodosQuery(undefined,{
        /* pollingInterval: 3000,
            refetchOnMountOrArgChange: true,
        skip: false,*/
    });

    if (isError) {
        return (
            <div>
                <h1>There was an error!!!</h1>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }
    const btnForceRefetch = ()=>{
        console.log('Refetch');
        refetch();
    };
    if (isSuccess) {
        return (<div>
            <TodoEntryTwo/>
            <Button variant="contained" onClick={btnForceRefetch}>
                Force Refetch
            </Button>
            <TodoListUI todos={response.data} />
        </div>);
    }
}