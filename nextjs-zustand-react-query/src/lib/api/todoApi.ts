import {ApiResponse, Todo} from "@/lib/types/types";
import axiosInstance from "@/app/axiosInstance";

export async function apiLoadAllTodos():Promise<Todo[]>
{
    console.log("apiLoadAllTodos");
    const todoResponse =  await axiosInstance.get<ApiResponse<Todo[]>>('/api/todos');
    console.log('Return ');
    return todoResponse.data.data;
}