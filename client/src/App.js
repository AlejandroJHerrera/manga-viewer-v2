import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { themeAtom } from './Atoms';
import Navbar from './Components/Navbar';
import Home from './Views/Home';
import Item from './Views/Item';
import Landing from './Views/Landing';
import Profile from './Views/Profile';

function App() {
  const theme = useRecoilValue(themeAtom);
  return (
    <div className="" data-theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<Profile />} />
          <Route path="/manga/:id" element={<Item />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
