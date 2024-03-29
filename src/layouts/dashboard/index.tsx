import { BalanceSection } from "@/src/components/balance-section";
import {
  DashboardComponent,
  DashboardContainer,
  DashboardContent,
} from "./DashboardLayout.styles";
import { DashboardLayoutProps } from "./DashboardLayout.types";
import { Wallet } from "@/src/components/wallet";

export const DashboardLayout: React.FC<DashboardLayoutProps> = () => {
  return (
    <DashboardComponent>
      <DashboardContent>
        <DashboardContainer>
          <BalanceSection />
          <Wallet />
        </DashboardContainer>
      </DashboardContent>
    </DashboardComponent>
  );
};
