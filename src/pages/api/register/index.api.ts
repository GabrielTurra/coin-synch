import { prisma } from "@/src/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { hash } from "bcryptjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const signUpDatachema = z.object({
    name: z
      .string()
      .regex(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/),
    email: z
      .string()
      .email()
      .transform((email) => email.toLowerCase()),
    password: z.string().min(6),
  });

  const { name, email, password } = signUpDatachema.parse(req.body);

  const password_hash = await hash(password, 6);

  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (userWithSameEmail) {
    return res.status(400).json({
      message: "Email already registered.",
    });
  }

  const user = await prisma.user.create({
    data: {
      name,
      password_hash,
      email,
    },
  });

  return res.status(201).json(user);
}
