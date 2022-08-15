import './custom.scss';
import {
  Routes,
  Route,
} from "react-router-dom";
import Base from 'src/pages/app/Base';
import Home from 'src/pages/app/Home';
import TrabajosPracticos from 'src/pages/app/TrabajosPracticos';
import Examenes from 'src/pages/app/Examenes';
import NotFound from 'src/pages/error/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Base/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="trabajos-practicos" element={<TrabajosPracticos/>}/>
        <Route path="examenes" element={<Examenes/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
