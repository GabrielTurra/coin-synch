import React from "react";
import { SignUpFormComponent } from "./SignUpForm.styles";
import { SignUpFormProps } from "./SignUpForm.types";
import { Button, TextInput } from "../lib";
import { Title } from "./SignUpForm.styles";
import * as Modal from "../modal";

import LockIcon from '@/public/icons/lock.svg';
import MailIcon from '@/public/icons/mail.svg';
import UserIcon from '@/public/icons/user.svg';
import { SignInForm } from "../sign-in-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Checkbox } from "../lib/checkbox";

const signUpFormSchema = z.object({
  name: z.string().regex(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/, { message: "Insert a valid name!" }),
  email: z.string().email({ message: "Insert a valid email!" }).transform((email) => email.toLowerCase()),
  password: z.string().min(6, { message: "Password must be at least 6 characters long!" }),
  confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters long!" }),
  acceptCheckbox: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
}).refine((schema) => schema.confirmPassword === schema.password, {
  message: "Passwords do not match!",
  path: ["confirmPassword"],
});

type SignUpFormSchema = z.infer<typeof signUpFormSchema>;

export const SignUpForm:React.FC<SignUpFormProps> = () => {
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors, isSubmitting } 
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema)
  });

  async function handleClaimNewsletter(data: SignUpFormSchema) {
    console.log(data);
  };

  return (
    <SignUpFormComponent
      onSubmit={handleSubmit(handleClaimNewsletter)}
    >
      <Title>
        Sign up to <strong><span>Coin</span>Synch</strong>
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

        <Checkbox error={errors.acceptCheckbox?.message} {...register("acceptCheckbox")}>
          <p>I have read and accept the <a href="#">Privacy Policy</a> and <a href="#">Terms of User Sign up</a>.</p>
        </Checkbox>
      </fieldset>

      <Button 
        text="Sign up" 
        sizeWidth="full" 
        disabled={isSubmitting}
      />

      <Modal.Root>
        <Modal.Trigger asChild>
          <p>
            Already have an account? <strong>Sign up to <span>Coin</span>Synch</strong>
          </p>
        </Modal.Trigger>
        <Modal.Content>
          <SignInForm />
        </Modal.Content>
      </Modal.Root>
    </SignUpFormComponent>
  );
};
