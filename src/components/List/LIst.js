import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Header from '../Header/Header';
import "./list.css";

export const LIst = () => {
    const { name } = useParams();
    const navga = useNavigate();
    const [ datas, setData ] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then((res) => res.json())
        .then((data) => setData(data));

    }, []);

    return (
        <div>
            <ul className='card-list'>
                <div  className='container'>
                <button className='btn-back' onClick={() => navga("/")}>Back</button>
                {
                datas.map(el =>(
                    <li className="card-counter-item">
                        <div>
                            <img className='card-counter-img' width="560" height="401" src={el.flags.png} alt={el.name.common}/>
                        </div>
                        <div className='card-counter--wrap'>
                            <h2 className='card-counter-item-title'>{el.name.common}</h2>
                            <strong className="card-counter-item-text">Native Name : <span className='card-counter-item-span'> {el.name.common}</span></strong>
                            <strong className="card-counter-item-text">Population : <span className='card-counter-item-span'>{el.population}</span></strong>
                            <strong className="card-counter-item-text">Region : <span className='card-counter-item-span'> {el.region}</span></strong>
                            <strong className="card-counter-item-text">Sub Region : <span className='card-counter-item-span'> {el.subregion}</span></strong>
                            <strong className="card-counter-item-text">Capital : <span className='card-counter-item-span'>{el.capital?.[0]}</span></strong>
                            <div className='card-counter-borders'>
                                <strong className="card-counter-item-text">Border Countries :
                                {
                                    el.borders?.map(item =>(
                                        <span className='card-counter-item-span-borders'>{item}</span>
                                    ))
                                }
                                </strong>
                            </div>
                        </div>
                        <div className='card-counter--wrap-right'>
                            <strong className="card-counter-item-text">Top Level Domain : <span className='card-counter-item-span'> {el.tld?.[0]}</span></strong>
                            <strong className="card-counter-item-text">Currencies : <span className='card-counter-item-span'> {Object.keys(el.currencies)}</span></strong>
                            <strong className="card-counter-item-text">Languages : <span className='card-counter-item-span'> {Object.values(el.languages).join(", ")}</span></strong>
                        </div>
                    </li>
                ))
                }
                </div>
            </ul>
        </div>
    )
};