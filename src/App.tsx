import { Route, Routes } from "react-router-dom";
import AppContent from "./AppContent";
import Navbar from "./Common/Navbar";
import ApiDetails from "./Components/ApiDetails/ApiDetails";
import Apis from "./Components/Apis/Apis";
import Home from "./Components/Home/Home";
import UsagePlans from "./Components/UsagePlans/UsagePlans";
import { AppContextProvider } from "./Context/AppContext";

function App() {
  //
  // Render
  //
  return (
    <AppContextProvider>
      <AppContent>
        <div
          className="sl-bg-canvas"
          style={{
            minHeight: "100vh",
            position: "absolute",
            top: "0px",
            bottom: "0px",
            left: "0px",
            right: "0px",
            zIndex: "-1",
          }}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apis" element={<Apis />} />
          <Route path="/api-details/:apiId" element={<ApiDetails />} />
          <Route path="/usage-plans" element={<UsagePlans />} />
          <Route path="/usage-plans/:apiId" element={<UsagePlans />} />
        </Routes>
      </AppContent>
    </AppContextProvider>
  );
}

export default App;
