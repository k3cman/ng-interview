import './App.css';
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import Navigation from './components/Navigation';
import Senior from './pages/Senior';
import Medior from './pages/Medior';

function App() {
  return (
    <div className="App pb-10">
      <div className="flex align-center justify-center mt-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1213 278" width="149" height="34">
            <path fill="#343433" d="M1212.5,179.9v-35h-209.8V92.4h-35v87.4L1212.5,179.9L1212.5,179.9z M967.7,74.9h244.8V40
            H967.7V74.9z M771.8,74.9h162.3V40H771.8L771.8,74.9L771.8,74.9z M752.5,40H510v35h104.9v104.9h35V74.9h102.6L752.5,40L752.5,40z
             M716.8,92.4v87.4h217.3v-35H751.8v-17.5h182.3v-35C934.1,92.4,716.8,92.4,716.8,92.4z M335.4,92.4V40h-34.1l0.1,139.9l33.9,0v-52.5
            h174.9v52.5h35V92.4H335.4L335.4,92.4z"></path>
            <path fill="#2CB3E8" d="M815.7,236.2c1.5-4.2,3.3-7.7,5.8-10.3c2.5-2.6,5.6-4.4,9.1-5.6c1.9-0.7,5.5-1.2,8.9-1.5
            c4.2-0.4,8-0.4,10.5-0.4c3,0,7.2,0.3,9.5,0.6c2.3,0.3,4.4,0.6,6,1c1.9,0.4,3.9,1.1,5.4,1.6v8.3c-11.1-1.6-17.9-1.5-20.1-1.5
            c-3.8,0-10.9,0.3-15.9,1.5c-2.6,0.6-4.5,2.1-6,4c-1.5,1.8-3.8,5.7-4,9.8c-0.3,4.4,0.3,7.4,0.9,10.5c0.6,3.1,1.7,5.7,3.1,7.6
            c1.4,2,3.3,3.5,5.7,4.4c2.4,0.9,12.8,1.4,16.3,1.4c1.5,0,2.9,0,4.1-0.1c1.2-0.1,3.8-0.2,4.6-0.4c0.9-0.1,1.8-0.3,2.7-0.5v-16.1
            h-11.9v-10.1h22.9v32.8c-1.9,0.9-3.9,1.7-5.9,2.3c-1.8,0.6-4,1.1-6.5,1.6c-2.5,0.5-6.7,0.7-9.6,0.7c-4.7,0-16.5-0.5-20.2-1.6
            c-3.7-1.1-6.9-2.9-9.4-5.6c-2.6-2.7-4.5-6.2-5.9-10.7C814.3,255.5,813.4,242.6,815.7,236.2 M936.3,242c5.8,0,8.1-3.1,8.1-5.9
            c0-1.4-1.1-3.6-1.8-4.4c-0.8-0.8-1.8-1.4-2.8-1.7c-1.1-0.4-2.3-0.5-3.7-0.5h-22.8V242L936.3,242L936.3,242z M902.2,219.2h34.2
            c1.7,0,3.5,0.1,5.1,0.3c1.7,0.2,3.2,0.6,4.7,1.2c1.5,0.6,2.8,1.4,4.1,2.4c1.2,1,2.3,2.3,3.2,3.8c0.9,1.6,1.6,3.4,2.1,5.6
            c0.5,2.2,0.6,5.8,0,7.3c-0.4,1.1-0.1,0.7-0.8,1.8c-0.7,1.1-1.4,1.9-2.1,2.8c-0.6,0.8-1.3,1.6-2.1,2.3c-1.7,1.5-3.6,2.5-5.7,3.1v0.1
            l13.8,26.5h-12.6l-12.3-24.1h-20.7v24.1h-11L902.2,219.2L902.2,219.2z M1009.4,267.7c3,0,13-0.4,15-1.1c2-0.7,3.5-2,4.7-3.7
            c1.2-1.8,2-4.2,2.5-7.3c0.5-3.1,0.5-12.2,0-15.3c-0.5-3.1-1.3-5.5-2.5-7.4c-1.2-1.8-2.7-3.1-4.7-3.8c-2-0.7-12-1.1-15-1.1
            s-8.5,0.4-10.5,1.1c-2,0.7-3.6,2-4.7,3.8c-1.2,1.8-2,4.3-2.5,7.4c-0.5,3.1-0.5,12.2,0,15.3c0.5,3.1,1.3,5.5,2.5,7.3
            c1.2,1.8,2.7,3,4.7,3.7C1000.9,267.3,1006.4,267.7,1009.4,267.7 M1009.4,277.8c-2.8,0-8.4-0.2-10.9-0.6c-2.4-0.4-4.6-1.1-6.6-2.1
            c-2-1-3.8-2.3-5.3-4c-1.5-1.7-2.9-3.7-3.9-6.3s-1.9-5.5-2.4-9c-0.6-3.5-0.2-16.4,1-20.8c1.2-4.4,3-7.9,5.3-10.5
            c2.3-2.6,5.2-4.3,8.5-5.3c3.3-1,10.1-1.5,14.3-1.5c2.8,0,12.9,0.2,15.3,0.6c2.4,0.4,4.6,1.1,6.6,2.2c2,1,3.8,2.4,5.3,4.1
            c1.5,1.7,2.8,3.8,3.9,6.4c1.1,2.5,1.9,5.6,2.4,9c0.6,3.5,0.6,12.4,0,15.8c-0.6,3.5-1.4,6.5-2.4,9c-1.1,2.5-2.4,4.6-3.9,6.3
            c-1.5,1.6-3.3,3-5.3,4c-2,1-4.2,1.7-6.6,2.1C1022.3,277.6,1012.2,277.8,1009.4,277.8 M1070.1,219.2h10.9v35.5c0,2.6,0.2,4.7,0.7,6.4
            c0.5,1.7,1.2,3,2.3,4c1.1,1,2.4,1.6,4.1,2s6,0.6,8.5,0.6c2.2,0,10.9-0.2,12.5-0.6c1.6-0.4,3-1.1,4.1-2c1.1-1,1.9-2.3,2.5-4
            c0.5-1.7,0.8-3.8,0.8-6.4v-35.5h10.9v36.2c0,3.8-0.4,7.2-1.3,10c-0.9,2.8-2.3,5.2-4.2,7c-1.9,1.9-4.4,3.2-7.5,4.2
            c-3,0.9-13.5,1.4-17.9,1.4c-4.3,0-10.3-0.5-13.4-1.4c-3.1-0.9-5.6-2.3-7.5-4.1c-1.9-1.8-3.4-4.2-4.2-7c-0.9-2.8-1.3-6.1-1.3-9.9
            V219.2L1070.1,219.2z M1189.5,243.1c1.7,0,3-0.3,4-0.8c1-0.6,1.7-1.1,2.5-1.9c0.5-0.5,1.1-2.7,1.1-4.1c0-1.4-0.6-2.5-1.2-3.6
            c-0.6-1-1.4-1.9-2.4-2.4c-1-0.6-2.4-0.9-4-0.9h-22.3v13.7L1189.5,243.1L1189.5,243.1z M1156.2,219.2h35c1.4,0,2.8,0.1,4.3,0.3
            c1.4,0.2,2.8,0.6,4.1,1.2c1.3,0.6,2.6,1.4,3.7,2.4c1.1,1,2.1,2.3,3,3.9c0.9,1.6,1.5,3.5,2,5.7c0.5,2.2,0.6,5.3,0.1,7.6
            c-0.5,2.2-1.4,4-2.3,5.5c-0.9,1.6-1.9,2.8-3.1,3.8c-1.2,1-2.4,1.7-3.8,2.3c-1.3,0.6-2.7,0.9-4.2,1.1c-1.4,0.2-2.8,0.3-4.2,0.3h-23.6
            v23.1h-11V219.2L1156.2,219.2z M146.2,36.2c-0.3-18.9-17.6-41.3-48.6-34.9c-70.9,14.6-90.9,78-94,96.2
            c32.5-13.3,42.9-14.4,80.8-15.3C123.1,81.3,146.6,59,146.2,36.2 M88.8,146c-20.4-32.9-51.5-41.9-71-29.9
            c-16.1,9.9-26.7,36.1-5.4,59.6c48.5,53.7,113.3,38.8,130.6,32.2C115,186.6,108.8,178.2,88.8,146 M167.2,31.4
            c-3.9,34.9-8,44.5-25.4,78.2c-17.8,34.4-9.6,65.7,10.7,76.3c16.8,8.8,44.7,4.5,54-25.9C227.6,90.9,181.7,42.9,167.2,31.4"></path></svg></div>
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigation />} />
          <Route exact path="/s" element={<Senior />} />
          <Route exact path="/m" element={<Medior />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
