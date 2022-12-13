import { useContext } from "react";
import { AppContext } from "./Context/AppContext";

function AppContent({ children }: { children: any }) {
  const appCtx = useContext(AppContext);
  const { isDarkMode, isGreenTheme } = appCtx;
  //
  // Render
  //
  return (
    <div
      data-theme={isDarkMode ? "dark" : "light"}
      data-color={isGreenTheme ? "green" : "blue"}
    >
      {children}
    </div>
  );
}

export default AppContent;
