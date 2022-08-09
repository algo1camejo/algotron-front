import './custom.scss';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from 'src/pages/app/Home';
import NotFound from 'src/pages/error/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
