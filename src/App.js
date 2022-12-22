import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import { Route, Routes } from 'react-router-dom';
import { LIst } from './components/List/LIst';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Lang } from './Lang/Lang';

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")
    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme]);

    i18n.use(initReactI18next).init({
        fallbackLng: localStorage.getItem("lang") || "en",
        interpolation: {
            escapeValue: false,
        },

        resources: {
            en: { translation: Lang.en },
            uz: { translation: Lang.uz },
            ru: { translation: Lang.ru },
        }
    });

    return (
        <div className={`${theme} wrapper`}>
        <Header setTheme={setTheme} theme={theme}/>
            <div>
                <Routes>
                    <Route path='/' element={<Section/>} />
                    <Route path='/link/:name' element={<LIst/>} />
                </Routes>
            </div>
        </div>
        );
    };
    export default App;