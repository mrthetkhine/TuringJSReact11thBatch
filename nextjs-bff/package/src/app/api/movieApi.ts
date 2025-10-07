import {ApiResponse, Movie} from "@/types/movies";
import axiosInstance from "../axiosInstance";


export async function getAllMovies():Promise<Movie[]>
{
    const moviesResponse = await axiosInstance.get<ApiResponse<Movie[]>>('/api/movies');
    let movies:Movie[] = await moviesResponse.data.data;
    return movies;
}
export async function getMovieById(movieId:string):Promise<Movie>
{
    const moviesResponse = await axiosInstance.get<ApiResponse<Movie>>(`/api/movies/${movieId}`);
    let movie= await moviesResponse.data.data;
    return movie;
}
export async function saveMovie(movie:Movie):Promise<Movie>
{
    const moviesResponse = await axiosInstance.post<ApiResponse<Movie>>(`/api/movies`,movie);
    let savedMovie= await moviesResponse.data.data;
    return savedMovie;
}
export async function updateMovie(movie:Movie):Promise<Movie>
{
    const moviesResponse = await axiosInstance.put<ApiResponse<Movie>>(`/api/movies/${movie._id}`,movie);
    let updatedMovie= await moviesResponse.data.data;
    return updatedMovie;
}
export async function deleteMovie(movieId:string):Promise<Movie>
{
    const moviesResponse = await axiosInstance.delete<ApiResponse<Movie>>(`/api/movies/${movieId}`);
    let deletedMovie= await moviesResponse.data.data;
    return deletedMovie;
}