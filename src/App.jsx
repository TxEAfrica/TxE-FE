import Home from "./landingPage/home";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EventRegForm from './registrationPage/eventregistration/EventRegForm'

const App = () => {
  return ( 
    <BrowserRouter>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<EventRegForm />} />
        </Routes>
      </div>
    </BrowserRouter>
   );
}
 
export default App;