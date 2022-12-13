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
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apis" element={<Apis />} />
            <Route path="/api-details/:apiId" element={<ApiDetails />} />
            <Route path="/usage-plans" element={<UsagePlans />} />
            <Route path="/usage-plans/:apiId" element={<UsagePlans />} />
          </Routes>
        </div>
      </AppContent>
    </AppContextProvider>
  );
}

export default App;
