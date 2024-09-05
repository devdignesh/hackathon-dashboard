import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateHackathon from "./pages/CreateHackathon";
import HackathonDetails from "./components/HackathonDetails";
 

function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/createHackathon/:id?" element={<CreateHackathon />} />
          <Route path="/hackathonDetails/:id" element={<HackathonDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
