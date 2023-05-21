import { z } from 'zod'

export const regirstrationFormSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  username: z.string().min(2, {message: 'username too short'}),
  password: z
    .string()
    .min(8, { message: 'Password must be atleast 6 characters' }),
})

export type RegirstrationFormSchema = z.infer<typeof regirstrationFormSchema>
