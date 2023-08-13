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
  AddCryptoFormComponent,
  Title,
} from "./AddCryptoForm.styles";
import { AddCryptoFormProps } from "./AddCryptoForm.types";
import { useCoins } from "@/src/hooks/CoinsProvider";
import { api } from "@/src/lib/axios";

const addCryptoFormSchema = z.object({
  select: z.string(),
  value: z.preprocess((input) => {
    const processed = z
      .string()
      .regex(/^\d+$/, { message: "Insert a valid number!" })
      .transform(Number)
      .safeParse(input);
    return processed.success ? processed.data : input;
  }, z.number().min(1)),
});

type AddCryptoFormSchema = z.infer<typeof addCryptoFormSchema>;

export const AddCryptoForm: React.FC<AddCryptoFormProps> = ({
  modalController,
}) => {
  const [globalFormErros, setGlobalFormErros] = useState("");
  const controlCoins = useCoins();
  const session = useSession();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AddCryptoFormSchema>({
    resolver: zodResolver(addCryptoFormSchema),
  });

  async function handleAddCrypto(data: AddCryptoFormSchema) {
    try {
      await api.post("/transactions/create", {
        user_id: session.data?.user.id,
        crypto_id: data.select,
        quantity: data.value,
        type: "TRANSFER_IN",
      });

      modalController(false);
    } catch (err) {
      if (err instanceof Error) {
        setGlobalFormErros(err?.message);
      }
      reset();
    }
  }

  return (
    <AddCryptoFormComponent onSubmit={handleSubmit(handleAddCrypto)}>
      <Title>Add Crypto</Title>

      <fieldset>
        <Select.Input
          error={errors.select?.message || ""}
          {...register("select")}
        >
          <Select.Group>
            {controlCoins.coins.map((coin) => (
              <Select.Item icon={coin.image} value={coin.acronym} showIcon>
                {coin.name}
                <small>{coin.acronym}</small>
              </Select.Item>
            ))}
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
        <Button text="Add Crypto" sizeWidth="full" />
      </fieldset>
    </AddCryptoFormComponent>
  );
};
