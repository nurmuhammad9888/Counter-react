import React from 'react';
import './header.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Header = ({ setTheme, theme }) => {
const {t, i18n} = useTranslation();

    return (
        <>
        <div className="counter-wrap-nav">
            <div className="container">
                <ul className='counter-list-nav'>
                    <li className='counter-item-nav'>
                        <Link className='counter-logo' to="/"> {t("header.logo")}</Link>
                    </li>
                    <li className='counter-item-nav'>
                        <select defaultValue={i18n.language}
                            onChange={(e) => {
                            i18n.changeLanguage(e.target.value)
                            localStorage.setItem("lang", e.target.value)
                        }}
                            className='counter-item-select'>
                            <option value="en">EN</option>
                            <option value="uz">UZ</option>
                            <option value="ru">RU</option>
                        </select>
                        <button className='counter-text-dark' onClick={() => { setTheme(theme === "light" ? "dark" : "light")}} type="button">{t("header.darkModeBtb")}</button>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
};


export default Header;