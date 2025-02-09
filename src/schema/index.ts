import * as z from 'zod'

export const RegistSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email('Invalid email address').min(1, 'Email is required'),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    confirmPassword: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], 
    message: "Passwords must match.",
  });

export const UpdateSchema = z.object ({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }).optional(),
  email: z.string().email('Invalid email address').min(1, 'Email is required').optional(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }).optional(),
  confirmPassword: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }).optional(),
})
.refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"], 
  message: "Passwords must match.",
});