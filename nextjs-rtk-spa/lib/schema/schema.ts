import * as z from "zod";

export const MovieFormData = z.object({
    title: z.string({
        error: (iss) => iss.input === undefined || iss.input==='' ? "Field is required." : "Invalid input."
    }).min(1, "Title is required."),
    year:z.coerce.number(),
    director:z.object({
        name:z.string().min(1, "Director name is required."),
        phoneNo:z.string().min(1, "Phone number is required."),
    }),
});
export type MovieFormSchema = z.infer<typeof MovieFormData>;