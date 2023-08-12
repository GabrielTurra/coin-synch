// External dependencies
import React, { useState } from "react";
import * as Modal from "../lib/modal";
import { signIn } from "next-auth/react";
import { Button, TextInput } from "../lib";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

// Internal dependencies
import { SignInFormProps } from "./SignInForm.types";
import { SignUpForm } from "../sign-up-form";

// Images
import LockIcon from "@/public/icons/lock.svg";
import MailIcon from "@/public/icons/mail.svg";

// Styles
import { ErrorMessage, SignInFormComponent, Title } from "./SignInForm.styles";

const signInFormSchema = z.object({
  email: z
    .string()
    .email({ message: "Insert a valid email!" })
    .transform((email) => email.toLowerCase()),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long!" }),
});

type SignInFormSchema = z.infer<typeof signInFormSchema>;

export const SignInForm: React.FC<SignInFormProps> = () => {
  const [globalFormErros, setGlobalFormErros] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
  });

  async function handleSignIn(data: SignInFormSchema) {
    try {
      const status = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (status?.error) {
        throw new Error("Invalid credentials!");
      }

      router.push("dashboard");
    } catch (err) {
      if (err instanceof Error) {
        setGlobalFormErros(err?.message);
      }
      reset();
    }
  }

  return (
    <SignInFormComponent onSubmit={handleSubmit(handleSignIn)}>
      <Title>
        Sign in to{" "}
        <strong>
          <span>Coin</span>Synch
        </strong>
      </Title>

      <fieldset>
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
        <a href="#">Forgot password?</a>

        {globalFormErros && <ErrorMessage>{globalFormErros}</ErrorMessage>}
        <Button text="Sign in" sizeWidth="full" />
      </fieldset>

      <Modal.Root>
        <Modal.Trigger asChild>
          <p>
            Don’t have an account?{" "}
            <strong>
              Sign up to <span>Coin</span>Synch
            </strong>
          </p>
        </Modal.Trigger>
        <Modal.Content>
          <SignUpForm />
        </Modal.Content>
      </Modal.Root>
    </SignInFormComponent>
  );
};
