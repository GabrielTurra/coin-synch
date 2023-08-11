import React from "react";
import { NewsletterFormComponent } from "./NewsletterForm.styles";
import { NewsletterFormProps } from "./NewsletterForm.types";
import { Button, TextInput } from "../lib";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/src/lib/axios";
import { AxiosError } from "axios";

const newsletterFormSchema = z.object({
  email: z.string().email({ message: "Insert a valid email!" }).transform((email) => email.toLowerCase()),
});

type NewsletterFormData = z.infer<typeof newsletterFormSchema>;

export const NewsletterForm:React.FC<NewsletterFormProps> = () => {
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors, isSubmitting } 
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterFormSchema)
  });

  async function handleClaimNewsletter(data: NewsletterFormData) {
    try {
      await api.post("/newsletter", {
        email: data.email
      });
      return reset();
    } catch (err) {
      if(err instanceof AxiosError) {
        console.log(err?.response?.data?.message);
        return reset();
      }

      console.log(err);
    }
  }

  return (
    <NewsletterFormComponent 
      as="form" 
      onSubmit={handleSubmit(handleClaimNewsletter)}
    >
      <TextInput 
        className="input" 
        placeholder="Email"
        label={errors.email?.message || "Email"}
        sizeWidth="full"
        disabled={isSubmitting}
        {...register("email")}
      />

      <Button 
        text="Subscribe" 
        sizeWidth="full"  
        type="submit"
        disabled={isSubmitting}
      />
    </NewsletterFormComponent>
  );
};
