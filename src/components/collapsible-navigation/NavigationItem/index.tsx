import { NavigationItemProps } from "../CollapsibleNavigation.types";
import { NavigationItem as NavigationItemComponent } from "../CollapsibleNavigation.styles";
import Image from "next/image";
import * as Tooltip from "../../lib/tooltip";

export const NavigationItem: React.FC<NavigationItemProps> = ({ icon }) => {
  return (
    <NavigationItemComponent>
      <Tooltip.Provider>
        <Tooltip.Root delayDuration={100}>
          <Tooltip.Trigger asChild>
            <Image src={icon} width={32} height={32} alt="" />
          </Tooltip.Trigger>
          <Tooltip.Content side="right" />
        </Tooltip.Root>
      </Tooltip.Provider>
    </NavigationItemComponent>
  );
};
