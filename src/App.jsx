import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./landingPage/home";
import EventRegForm from './registrationPage/eventregistration/EventRegForm';
import TechSupportApplication from './applications/category/TechSupportApplication';
import ApplyForGrant from './applications/grant/ApplyForGrant'
import FailedModal from './modals/FailedModal';
import SuccessModal from './modals/SuccessModal';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<EventRegForm />} />
                <Route path="/techsupport" element={<TechSupportApplication />} />
                <Route path="/grant" element={<ApplyForGrant />} />
                {/* <Route path='/modal' element ={<SuccessModal />} /> */}
                {/* <Route path='/modal' element ={<FailedModal />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
