import * as Modal from "../../lib/modal";
import { Button } from "../../lib";
import { SignInForm } from "../../sign-in-form";
import { SignUpForm } from "../../sign-up-form";

import { signOut, useSession } from "next-auth/react";

import Image from "next/image";
import ChevronDown from "@/public/icons/chevron-down-small.svg";

import { SignSectionProps } from "../Header.types";

import {
  Name,
  SignSection as SignSectionComponent,
  SignSectionLogged,
  UserComponent,
  ListMenu,
} from "../Header.styles";

export const SignSection: React.FC<SignSectionProps> = () => {
  const { data, status } = useSession();

  if (status === "authenticated") {
    return (
      <SignSectionLogged>
        <UserComponent>
          <Image src={data?.user?.image || ""} width={32} height={32} alt="" />
          <Name>{data?.user?.name}</Name>
          <Image
            className="icon"
            src={ChevronDown.src}
            width={8}
            height={8}
            alt=""
          />
          <ListMenu>
            <li onClick={() => signOut()}>Logout</li>
          </ListMenu>
        </UserComponent>
      </SignSectionLogged>
    );
  }

  return (
    <SignSectionComponent>
      <Modal.Root>
        <Modal.Trigger asChild>
          <Button text="Sign in" sizeWidth="small" color="white" />
        </Modal.Trigger>
        <Modal.Content>
          <SignInForm />
        </Modal.Content>
      </Modal.Root>
      <Modal.Root>
        <Modal.Trigger asChild>
          <Button text="Sign up" sizeWidth="small" />
        </Modal.Trigger>
        <Modal.Content>
          <SignUpForm />
        </Modal.Content>
      </Modal.Root>
    </SignSectionComponent>
  );
};
