import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import './App.scss';
import NavBAr from './components/navbar';
import Films from './pages/films';
import People from './pages/people';
import Species from './pages/species';
import Vehicles from './pages/vehicles';
import Locations from './pages/locations';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBAr />
        <Routes>
          <Route path="/" element={<Films />} />
          <Route path="people" element={<People />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="species" element={<Species />} />
          <Route path="locations" element={<Locations />} />
        </Routes>
        {/* footer */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
