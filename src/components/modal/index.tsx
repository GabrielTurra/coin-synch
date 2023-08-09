import CloseIcon from "@/public/icons/close.svg";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Image from "next/image";
import React from "react";
import * as ModalBase from "./Modal.styles";
import { DialogContentProps } from "./Modal.types";

export const Content = React.forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, ...props }, forwardedRef) => (
    <DialogPrimitive.Portal>
      <ModalBase.Overlay />
      <ModalBase.Content {...props} ref={forwardedRef}>
        {children}
        <ModalBase.Close aria-label="Close">
          <Image src={CloseIcon.src} width={16} height={16} alt="Close modal" />
        </ModalBase.Close>
      </ModalBase.Content>
    </DialogPrimitive.Portal>
  )
);

Content.displayName = "DialogContent";
export const Root = DialogPrimitive.Root;
export const Trigger = DialogPrimitive.Trigger;
export const Title = DialogPrimitive.Title;
