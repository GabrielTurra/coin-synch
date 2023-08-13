import { NavigationItemProps } from "../CollapsibleNavigation.types";
import {
  NavigationItem as NavigationItemComponent,
  NavigationContent,
} from "../CollapsibleNavigation.styles";
import Image from "next/image";
import { Tooltip } from "../../lib";

export const NavigationItem: React.FC<NavigationItemProps> = ({ icon }) => {
  return (
    <NavigationItemComponent>
      <Tooltip.Provider>
        <Tooltip.Root delayDuration={100}>
          <Tooltip.Trigger asChild>
            <NavigationContent>
              <Image src={icon} width={32} height={32} alt="" />
              <span>Lorem ipsum</span>
            </NavigationContent>
          </Tooltip.Trigger>
          <Tooltip.Content text="Lorem Ipsum" side="right" />
        </Tooltip.Root>
      </Tooltip.Provider>
    </NavigationItemComponent>
  );
};
