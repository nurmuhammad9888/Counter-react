import { useState, useEffect } from 'react';
import './section.css'

import Card from '../Card/Card';

const Section = () => {
    // const [val, setValue] = useState("");
    const [data, setData] = useState([]);

    useEffect(() =>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    }, [])

    function serachFn(evt){
        if(evt.target.value !== ""){
            fetch(`https://restcountries.com/v3.1/name/${evt.target.value}`)
            .then(res => res.json())
            .then(data => {
                setData(data) 
            })
            .catch(err =>{
                console.log("Error");
                <h1>Not found</h1>
            })
        }else{
            fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
        }
    }

    function selectFn(evt){
        console.log(evt.target.value);
        if(evt.target.value !== ""){
            fetch(`https://restcountries.com/v3.1/region/${evt.target.value}`)
            .then(res => res.json())
            .then(data => {
                setData(data) 
            })
            .catch(err =>{
                console.log("Error");
                <h1>Not found</h1>
            })
        }
    }

    return (
        <>
            <div className="container">
                <ul className="counter-list-form">
                    <li className="counter-item-form">
                        <form className='counter-form' action="#" method='POST' autoComplete='off'>
                            <div className='serach-wrapper'>
                            <input className='counter-search-input' onChange={serachFn} type="search" name='search' placeholder='Search for a country…' aria-label='Search for a country…'/>
                            <span className='search-icon'></span>
                            </div>
                            <select className='counter-select' onChange={selectFn}>
                                <option hidden>Filter by Region</option>
                                <option value="Africa">Africa</option>
                                <option value="Americas">Americas</option>
                                <option value="Asia">Asia</option>
                                <option value="Europe">Europe</option>
                                <option value="Oceania">Oceania</option>
                            </select>
                        </form>
                    </li>
                </ul>
                <ul className="counter-list"> 
                {data.map(el =>{
                    return  <Card key={el.id} name={el.name.common} img={el.flags.png} population={el.population} region={el.region} capital={el.capital?.[0]}/>
                })}
                </ul>
            </div>
        </>
    );
};

export default Section;