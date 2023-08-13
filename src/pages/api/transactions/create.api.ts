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

  const transactionsDatachema = z.object({
    user_id: z.string().uuid(),
    crypto_id: z.string(),
    type: z.enum(["TRANSFER_IN", "TRANSFER_OUT"]),
    quantity: z.preprocess((input) => {
      const processed = z
        .string()
        .regex(/^\d+$/, { message: "Insert a valid number!" })
        .transform(Number)
        .safeParse(input);
      return processed.success ? processed.data : input;
    }, z.number().min(1)),
  });

  const { user_id, crypto_id, quantity, type } = transactionsDatachema.parse(
    req.body,
  );

  if (!crypto_id) {
    return null;
  }

  const userFromPrisma = await prisma.user.findUnique({
    where: {
      id: user_id,
    },
  });

  if (!userFromPrisma) {
    return null;
  }

  if (Number(quantity) <= 0) {
    return null;
  }

  const transaction = await prisma.transaction.create({
    data: {
      user_id: userFromPrisma.id,
      crypto_id,
      quantity,
      type,
    },
  });

  return res.status(201).json(transaction);
}
