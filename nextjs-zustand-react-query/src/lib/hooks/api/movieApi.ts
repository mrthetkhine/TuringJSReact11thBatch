import {ApiResponse, Todo} from "@/lib/types/types";
import axiosInstance from "@/app/axiosInstance";
import {Movie} from "@/lib/types/movies";

export async function apiLoadAllMovies():Promise<Movie[]>
{
    console.log("apiLoadAllMovies");
    const response =  await axiosInstance.get<ApiResponse<Movie[]>>('/api/movies');
    console.log('Return ');
    return response.data.data;
}

export async function apiSaveMovie(movie:Movie):Promise<Movie>
{
    console.log("apiSaveMovie");
    const response =  await axiosInstance.post<ApiResponse<Movie>>('/api/movies',movie);

    return response.data.data;
}
export async function apiDeleteMovie(movie:Movie):Promise<Movie>
{
    console.log("apiDeleteMovie");
    const response =  await axiosInstance.delete<ApiResponse<Movie>>(`/api/movies/${movie._id}`);

    return response.data.data;
}