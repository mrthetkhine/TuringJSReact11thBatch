import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export interface Todo{
    _id?: string;
    title: string;
    completed: boolean;
}
export interface TodoApiResponse
{
    data:Todo[];
}
export interface SingleTodoApiResponse
{
    message: string;
    data:Todo;
}
export const todoApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
    reducerPath: "todosApi",
    tagTypes: ['Todos'],
    //refetchOnFocus: true,
    endpoints:(build) => ({
        getAllTodos:build.query<TodoApiResponse,undefined>({
            query:(undefined)=>`todos`,
            providesTags:['Todos']
        }),
       /* saveTodo:build.mutation<SingleTodoApiResponse,Todo>({
            query: (newTodo:Todo) => ({
                url: `todos`,
                method: 'POST',
                body: newTodo,
            }),
           invalidatesTags:['Todos']
        }),*/
        //Pessmistic update
        saveTodo:build.mutation<SingleTodoApiResponse,Todo>({
            query: (newTodo:Todo) => ({
                url: `todos`,
                method: 'POST',
                body: newTodo,
            }),
            async onQueryStarted(todo, { dispatch, queryFulfilled }) {
                try {
                    const { data: savedTodo } = await queryFulfilled
                    const patchResult = dispatch(
                        todoApiSlice.util.updateQueryData('getAllTodos', undefined, (draft) => {
                            console.log('Draft ',draft);
                            console.log('SaveTodo ',savedTodo);
                            draft.data.push(savedTodo.data);

                        }),
                    )
                } catch {}
            },
        }),
        /*deleteTodo:build.mutation<SingleTodoApiResponse,Todo>({
            query: (todo:Todo) => ({
                url: `todos/${todo._id}`,
                method: 'DELETE',
            }),
            invalidatesTags:['Todos']
        }),*/
         //Optimistic update
        deleteTodo:build.mutation<SingleTodoApiResponse,Todo>({
            query: (todo:Todo) => ({
                url: `todos/${todo._id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(todo, { dispatch, queryFulfilled }) {
                console.log('onQueryStarted deleteTodo ',todo);
                const patchResult = dispatch(
                    todoApiSlice.util.updateQueryData('getAllTodos', undefined, (draft) => {
                        console.log('Draft ',draft);
                        let data  = draft.data.filter((td:Todo)=>td._id != todo._id);
                        draft.data = data;
                    }),
                )
                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()

                }
            },
        }),
        updateTodo:build.mutation<SingleTodoApiResponse,Todo>({
            query: (todo:Todo) => ({
                url: `todos/${todo._id}`,
                method: 'PUT',
                body:todo
            }),
            invalidatesTags:['Todos']
        })
    })
})
export const {
    useGetAllTodosQuery,
    useSaveTodoMutation,
    useDeleteTodoMutation,
    useUpdateTodoMutation,
} = todoApiSlice;