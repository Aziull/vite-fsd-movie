import { z } from 'zod'

export const loginFormSchema = z.object({
  username: z.string().min(2, {message: "too short"}),
  password: z
    .string()
    .min(8, { message: 'Password must be atleast 6 characters' }),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
