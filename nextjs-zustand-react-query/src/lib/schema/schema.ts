import * as z from "zod";

export const MovieFormData = z.object({
    _id:z.string().optional(),
    title: z.string({
        error: (iss) => iss.input === undefined || iss.input==='' ? "Field is required." : "Invalid input."
    }).min(1, "Title is required."),
    year:z.coerce.number<number>().min(1, "Year is required."),
    director:z.object({
        name:z.string().min(1, "Director name is required."),
        phoneNo:z.string().min(1, "Phone number is required."),
    }),
});
export type MovieFormSchema = z.infer<typeof MovieFormData>;

export const LoginFormData = z.object({
    username:z.string().min(1, "Username is required."),
    password:z.string().min(1, "Password is required."),
})
export type LoginFormSchema = z.infer<typeof LoginFormData>;

export const ReviewFormData = z.object({
    rating: z.number().min(1, "Rating is required."),
    review:z.string().min(1, "Review is required."),
});
export type ReviewFormSchema = z.infer<typeof ReviewFormData>