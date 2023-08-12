import { DashboardComponent, DashboardContent } from "./DashboardLayout.styles";
import { DashboardLayoutProps } from "./DashboardLayout.types";

export const DashboardLayout: React.FC<DashboardLayoutProps> = () => {
  return (
    <DashboardComponent>
      <DashboardContent></DashboardContent>
    </DashboardComponent>
  );
};
