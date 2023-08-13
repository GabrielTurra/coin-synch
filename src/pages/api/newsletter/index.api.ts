import { prisma } from "@/src/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const newsletterDatachema = z.object({
    email: z
      .string()
      .email()
      .transform((email) => email.toLowerCase()),
  });

  const { email } = newsletterDatachema.parse(req.body);

  const emailAlreadyExists = await prisma.newsletter.findUnique({
    where: {
      email,
    },
  });

  if (emailAlreadyExists) {
    return res.status(400).json({
      message: "Email already taken.",
    });
  }

  const newsletter = await prisma.newsletter.create({
    data: {
      email,
    },
  });

  return res.status(201).json(newsletter);
}
