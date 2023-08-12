// External dependencies
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { SignUpFormProps } from "./SignUpForm.types";
import { ZodError, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";

// Internal dependencies
import * as Modal from "../lib/modal";
import { Button, TextInput } from "../lib";
import { SignInForm } from "../sign-in-form";
import { Checkbox } from "../lib/checkbox";
import { api } from "@/src/lib/axios";

// Images
import LockIcon from "@/public/icons/lock.svg";
import MailIcon from "@/public/icons/mail.svg";
import UserIcon from "@/public/icons/user.svg";

// Styles
import { ErrorMessage, SignUpFormComponent, Title } from "./SignUpForm.styles";

const signUpFormSchema = z
  .object({
    name: z
      .string()
      .regex(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/, {
        message: "Insert a valid name!",
      }),
    email: z
      .string()
      .email({ message: "Insert a valid email!" })
      .transform((email) => email.toLowerCase()),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long!" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long!" }),
    acceptCheckbox: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms and conditions" }),
    }),
  })
  .refine((schema) => schema.confirmPassword === schema.password, {
    message: "Passwords do not match!",
    path: ["confirmPassword"],
  });

type SignUpFormSchema = z.infer<typeof signUpFormSchema>;

export const SignUpForm: React.FC<SignUpFormProps> = () => {
  const [globalFormErros, setGlobalFormErros] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
  });

  async function handleSignUp(data: SignUpFormSchema) {
    try {
      await api.post("/register", {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      const status = await signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/dashboard",
        redirect: true,
      });

      if (status?.error) {
        throw new Error(
          "Sorry, we have a problem to initiate your session. Try again later.",
        );
      }

      reset();
    } catch (err) {
      if (err instanceof AxiosError) {
        setGlobalFormErros(err?.response?.data?.message || "");
        return;
      }

      if (err instanceof Error || err instanceof ZodError) {
        setGlobalFormErros(err?.message || "");
        return;
      }

      console.log(err);
    }
  }

  return (
    <SignUpFormComponent onSubmit={handleSubmit(handleSignUp)}>
      <Title>
        Sign up to{" "}
        <strong>
          <span>Coin</span>Synch
        </strong>
      </Title>

      <fieldset>
        <TextInput
          error={errors.name?.message || ""}
          icon={UserIcon.src}
          placeholder="Name"
          {...register("name")}
          disabled={isSubmitting}
        />
        <TextInput
          error={errors.email?.message || ""}
          icon={MailIcon.src}
          placeholder="Email"
          {...register("email")}
          disabled={isSubmitting}
        />
        <TextInput
          error={errors.password?.message || ""}
          icon={LockIcon.src}
          placeholder="Password"
          type="password"
          {...register("password")}
          disabled={isSubmitting}
        />
        <TextInput
          error={errors.confirmPassword?.message || ""}
          icon={LockIcon.src}
          placeholder="Confirm password"
          type="password"
          {...register("confirmPassword")}
          disabled={isSubmitting}
        />

        <Checkbox
          error={errors.acceptCheckbox?.message}
          {...register("acceptCheckbox")}
        >
          <p>
            I have read and accept the <a href="#">Privacy Policy</a> and{" "}
            <a href="#">Terms of User Sign up</a>.
          </p>
        </Checkbox>

        {globalFormErros && <ErrorMessage>{globalFormErros}</ErrorMessage>}
      </fieldset>

      <Button text="Sign up" sizeWidth="full" disabled={isSubmitting} />

      <Modal.Root>
        <Modal.Trigger asChild>
          <p>
            Already have an account?{" "}
            <strong>
              Sign up to <span>Coin</span>Synch
            </strong>
          </p>
        </Modal.Trigger>
        <Modal.Content>
          <SignInForm />
        </Modal.Content>
      </Modal.Root>
    </SignUpFormComponent>
  );
};
