import { z } from "zod";

const UserSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    avatar: z.string().optional(),
  });
  