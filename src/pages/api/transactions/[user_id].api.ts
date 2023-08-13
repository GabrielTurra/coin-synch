import { prisma } from "@/src/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const user_id = String(req.query.user_id);

  if (!user_id) return null;

  const user = await prisma.user.findUnique({
    where: {
      id: user_id,
    },
  });

  if (!user) return null;

  const transactions = await prisma.transaction.findMany({
    where: {
      user_id,
    },
  });

  return res.status(201).json(transactions);
}
