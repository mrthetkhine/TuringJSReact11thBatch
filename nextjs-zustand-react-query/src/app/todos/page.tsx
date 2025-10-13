'use client';
import {apiLoadAllTodos} from "@/lib/api/todoApi";
import {useQuery} from "@tanstack/react-query";

export default function TodosPage()
{
    const { isPending, isError, data, error,isSuccess, isLoading } = useQuery({
            queryKey: ['todos'],
            queryFn: apiLoadAllTodos
        });
    return (<div>
        Todo pages
        {
            isLoading && <h3>Loading...</h3>
        }
        {

            isSuccess &&  data?.map(todo=><div key={todo._id}>
                <div>
                    {todo.title}
                </div>
            </div>)
        }
    </div>);
}