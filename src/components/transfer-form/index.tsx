// External dependencies
import React, { useState } from "react";
import { Button, TextInput, Select } from "../lib";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSession } from "next-auth/react";

// Styles
import {
  ErrorMessage,
  TransferFormComponent,
  Title,
  CoinSection,
  CoinContent,
} from "./TransferForm.styles";
import { TransferFormProps } from "./TransferForm.types";
import { api } from "@/src/lib/axios";
import { useTransactions } from "@/src/hooks/TransactionsProvider";
import Image from "next/image";

const transferFormSchema = z.object({
  select: z.enum(["TRANSFER_IN", "TRANSFER_OUT"]),
  value: z.preprocess((input) => {
    const processed = z
      .string()
      .regex(/^\d+$/, { message: "Insert a valid number!" })
      .transform(Number)
      .safeParse(input);
    return processed.success ? processed.data : input;
  }, z.number().min(1)),
});

type TransferFormSchema = z.infer<typeof transferFormSchema>;

export const TransferForm: React.FC<TransferFormProps> = ({
  modalController,
  coin,
}) => {
  const [globalFormErros, setGlobalFormErros] = useState("");

  const controlTransactions = useTransactions();
  const session = useSession();

  const wallet = controlTransactions.getWallet();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TransferFormSchema>({
    resolver: zodResolver(transferFormSchema),
  });

  async function handleAddCrypto(data: TransferFormSchema) {
    try {
      if (data.select === "TRANSFER_OUT") {
        const maxOut =
          wallet.find((item) => item.coin.acronym === coin.acronym)?.quantity ||
          0;

        if (data.value > maxOut) {
          throw new Error(
            `Insufficient coin credit. Your transfer out limit is ${maxOut}`,
          );
        }
      }

      await api.post("/transactions/create", {
        user_id: session.data?.user.id,
        crypto_id: coin.acronym,
        quantity: data.value,
        type: data.select,
      });

      controlTransactions.appendTransaction({
        crypto_id: coin.acronym,
        quantity: data.value,
        type: data.select,
      });

      modalController(false);
    } catch (err) {
      if (err instanceof Error) {
        setGlobalFormErros(err?.message);
      }
    }
  }

  return (
    <TransferFormComponent onSubmit={handleSubmit(handleAddCrypto)}>
      <Title>Transfer Crypto</Title>

      <CoinSection>
        <span>You are transfering</span>

        <CoinContent>
          <Image src={coin?.image || ""} width={24} height={24} alt="" />
          <span>
            {coin.name}
            <small>{coin.acronym}</small>
          </span>
        </CoinContent>
      </CoinSection>

      <fieldset>
        <Select.Input
          error={errors.select?.message || ""}
          {...register("select")}
        >
          <Select.Group>
            <Select.Item value="TRANSFER_IN">Transfer in</Select.Item>
            <Select.Item value="TRANSFER_OUT">Transfer out</Select.Item>
          </Select.Group>
        </Select.Input>

        <TextInput
          error={errors.value?.message || ""}
          placeholder={"00,00"}
          min={0}
          type="number"
          {...register("value")}
          disabled={isSubmitting}
        />

        {globalFormErros && <ErrorMessage>{globalFormErros}</ErrorMessage>}
        <Button text="Transfer Crypto" sizeWidth="full" />
      </fieldset>
    </TransferFormComponent>
  );
};
