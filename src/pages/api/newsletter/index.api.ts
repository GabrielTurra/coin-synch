import { prisma } from "@/src/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method !== "POST") {
    return res.status(405).end();
  }

  const { email } = req.body;

  const emailAlreadyExists = await prisma.newsletter.findUnique({
    where: {
      email,
    }
  });

  if(emailAlreadyExists) { 
    return res.status(400).json({ 
      message: "Email already taken." 
    });
  }

  const newsletter = await prisma.newsletter.create({
    data: {
      email, 
    }
  });

  return res.status(201).json(newsletter);
}
