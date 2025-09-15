'use client';
import {useParams} from "next/navigation";
import {todoApiSlice} from "@/lib/features/todoApi/todoApiSlice";

export default function TodoDetailsPage()
{
    const params = useParams<{ id:string  }>();
    const { todo } = todoApiSlice.useGetAllTodosQuery(undefined, {
        selectFromResult: ({ data }) => ({
            todo: data?.data?.find((todo) => todo._id === params.id),
        }),
    })
    return (<div>
        <div>
            Todo id {params.id}
        </div>
        <div>
            Title {todo?.title}
        </div>
    </div>);
}