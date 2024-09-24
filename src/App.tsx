import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateHackathon from "./pages/CreateHackathon";
import HackathonDetails from "./components/HackathonDetails";
import EditHackathon from "./pages/EditHackathon";
 

function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-hackathon/:id?" element={<CreateHackathon />} />
          <Route path="/hackathon-details/:id" element={<HackathonDetails />} />
          <Route path="/edit-hackathon-details/:id" element={<EditHackathon />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
