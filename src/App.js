import './custom.scss';
import {
  Routes,
  Route,
} from "react-router-dom";
import Base from 'src/pages/app/Base';
import Home from 'src/pages/app/Home';
import NotFound from 'src/pages/error/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Base/>}>
        <Route path="/" element={<Home/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
