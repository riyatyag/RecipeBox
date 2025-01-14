import React from 'react';
import './App.css';
import Mainpage from './Component/Mainpage';
import Mealinfo from './Component/Mealinfo';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Mainpage />} />
            <Route path='/:mealid' element={<Mealinfo />} />
        </Routes>
    );
}

export default App;
