import React from 'react';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import { Route, Routes } from 'react-router-dom';
import { LIst } from './components/List/LIst';

const App = () => {
    return (
        <>
        <Header/>
            <div>
                <Routes>
                    <Route path='/' element={<Section/>} />
                    <Route path='/link/:name' element={<LIst/>} />
                </Routes>
            </div>
        </>
        );
    };
    export default App;