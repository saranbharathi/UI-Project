import Access from './Components/Access';
import Login from './Components/Login';
import Password from './Components/Password';
import Reset from './Components/Reset';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/access" element={<Access />} />
        <Route path="/forgot" element={<Password />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </Router>
  );
}

export default App;
