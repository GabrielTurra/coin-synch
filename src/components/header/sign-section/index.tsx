import { Modal, Button } from "../../lib";
import { SignInForm } from "../../sign-in-form";
import { SignUpForm } from "../../sign-up-form";

import { signOut, useSession } from "next-auth/react";

import Image from "next/image";
import ChevronDown from "@/public/icons/chevron-down-small.svg";
import LogoutIcon from "@/public/icons/logout.svg";

import { SignSectionProps } from "../Header.types";

import {
  Name,
  SignSection as SignSectionComponent,
  SignSectionLogged,
  UserComponent,
  ListMenu,
} from "../Header.styles";
import { useState } from "react";

export const SignSection: React.FC<SignSectionProps> = () => {
  const { data, status } = useSession();
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);

  function handleOpenSignUp() {
    setOpenSignUp(true);
  }

  function handleOpenSignIn() {
    setOpenSignIn(true);
  }

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
            <li onClick={() => signOut()}>
              <div>
                <Image src={LogoutIcon.src} width={16} height={16} alt="" />
                Logout
              </div>
            </li>
          </ListMenu>
        </UserComponent>
      </SignSectionLogged>
    );
  }

  return (
    <SignSectionComponent>
      <Modal.Root onOpenChange={setOpenSignIn} open={openSignIn}>
        <Modal.Trigger asChild>
          <Button text="Sign in" sizeWidth="small" color="white" />
        </Modal.Trigger>
        <Modal.Content>
          <SignInForm onOpenSignUp={handleOpenSignUp} />
        </Modal.Content>
      </Modal.Root>

      <Modal.Root onOpenChange={setOpenSignUp} open={openSignUp}>
        <Modal.Trigger asChild>
          <Button text="Sign up" sizeWidth="small" />
        </Modal.Trigger>
        <Modal.Content>
          <SignUpForm onOpenSignIn={handleOpenSignIn} />
        </Modal.Content>
      </Modal.Root>
    </SignSectionComponent>
  );
};
