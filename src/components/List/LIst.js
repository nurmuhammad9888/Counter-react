import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import "./list.css";
import { useTranslation } from 'react-i18next';

export const LIst = () => {
    const { t } = useTranslation();
    const { name } = useParams();
    const navga = useNavigate();
    const [ datas, setData ] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    return (
        <>
            <ul className='card-list'>
                <div  className='container'>
                <button className='btn-back' onClick={() => navga("/")}>{t("CountryCard.BackBtn")}</button>
                {
                datas.map(el =>(
                    <li className="card-counter-item">
                        <div>
                            <img className='card-counter-img' width="560" height="401" src={el.flags.png} alt={el.name.common}/>
                        </div>
                        <div className='card-counter--wrap'>
                            <h2 className='card-counter-item-title'>{el.name.common}</h2>
                            <strong className="card-counter-item-text">{t("CountryCard.NativeName")} : <span className='card-counter-item-span'> {el.name.common}</span></strong>
                            <strong className="card-counter-item-text">{t("CountryCard.Population")} : <span className='card-counter-item-span'>{el.population}</span></strong>
                            <strong className="card-counter-item-text">{t("CountryCard.Region")} : <span className='card-counter-item-span'> {el.region}</span></strong>
                            <strong className="card-counter-item-text">{t("CountryCard.SubRegion")}: <span className='card-counter-item-span'> {el.subregion}</span></strong>
                            <strong className="card-counter-item-text">{t("CountryCard.Capital")} : <span className='card-counter-item-span'>{el.capital?.[0]}</span></strong>
                            <div className='card-counter-borders'>
                                <strong className="card-counter-item-text">{t("CountryCard.BorderCountries")} :
                                {
                                    el.borders?.map(item =>(
                                        <span className='card-counter-item-span-borders'>{item}</span>
                                    ))
                                }
                                </strong>
                            </div>
                        </div>
                        <div className='card-counter--wrap-right'>
                            <strong className="card-counter-item-text">{t("CountryCard.TLD")} : <span className='card-counter-item-span'> {el.tld?.[0]}</span></strong>
                            <strong className="card-counter-item-text">{t("CountryCard.Currencies")} : <span className='card-counter-item-span'> {Object.keys(el.currencies)}</span></strong>
                            <strong className="card-counter-item-text">{t("CountryCard.Languages")} : <span className='card-counter-item-span'> {Object.values(el.languages).join(", ")}</span></strong>
                        </div>
                    </li>
                ))
                }
                </div>
            </ul>
        </>
    )
};