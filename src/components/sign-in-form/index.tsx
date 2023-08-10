import React, { useRef } from "react";
import { SignInFormComponent } from "./SignInForm.styles";
import { SignInFormProps } from "./SignInForm.types";
import { Button, TextInput } from "../lib";
import { Title } from "./SignInForm.styles";
import * as Modal from "../modal";

import LockIcon from '@/public/icons/lock.svg';
import MailIcon from '@/public/icons/mail.svg';
import { SignUpForm } from "../sign-up-form";

export const SignInForm:React.FC<SignInFormProps> = () => (
  <SignInFormComponent>
    <Title>
      Sign in to <strong><span>Coin</span>Synch</strong>
    </Title>

    <fieldset>
      <TextInput icon={MailIcon.src} placeholder="Email" />
      <TextInput icon={LockIcon.src} placeholder="Password" type="password" />
      <a href="#">Forgot password?</a>
      <Button text="Sign in" sizeWidth="full" />
    </fieldset>

    <Modal.Root>
      <Modal.Trigger asChild>
        <p>
          Don’t have an account? <strong>Sign up to <span>Coin</span>Synch</strong>
        </p>
      </Modal.Trigger>
      <Modal.Content>
        <SignUpForm />
      </Modal.Content>
    </Modal.Root>
  </SignInFormComponent>
);
