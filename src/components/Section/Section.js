import { useState, useEffect } from 'react';
import './section.css';
import Card from '../Card/Card';
import { useTranslation } from 'react-i18next';

const Section = () => {
	const [data, setData] = useState([]);
	const [loding, setLoding] = useState(true);
	const [eror, setEror] = useState(false);
	const { t } = useTranslation();

	useEffect(() => {
		fetch('https://restcountries.com/v3.1/all')
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoding(false);
			});
	}, []);

	function serachFn(evt) {
		if (evt.target.value !== '') {
			fetch(`https://restcountries.com/v3.1/name/${evt.target.value}`)
				.then((res) => res.json())
				.then((data) => {
					setData(data);
					setLoding(false);
				})
				.catch((err) => {
					console.log('Error');
					setEror(true);
					setLoding(false);
				});
		} else {
			fetch('https://restcountries.com/v3.1/all')
				.then((res) => res.json())
				.then((data) => {
					setData(data);
				});
		}
	}

	function selectFn(evt) {
		console.log(evt.target.value);
		if (evt.target.value !== '') {
			fetch(`https://restcountries.com/v3.1/region/${evt.target.value}`)
				.then((res) => res.json())
				.then((data) => {
					setData(data);
					setLoding(false);
				})
				.catch((err) => {
					console.log('Error');
					setEror(true);
					setLoding(false);
				});
		}
	}

	return (
		<>
			<div className="container">
				{loding && <h2>Loding...</h2>}
				{eror && <h2>Error...</h2>}
				<ul className="counter-list-form">
					<li className="counter-item-form">
						<form className="counter-form" action="#" method="POST" autoComplete="off">
							<div className="serach-wrapper">
								<input className="counter-search-input" onChange={serachFn} type="search" name="search" placeholder={t("Main.SearchPlaceholder")} aria-label="Search for a country…"
								/>
								<span className="search-icon"></span>
							</div>
							<select className="counter-select" onChange={selectFn}>
								<option hidden>{t("Main.FilterByRegion")}</option>
								<option value="Africa">Africa</option>
								<option value="Americas">Americas</option>
								<option value="Asia">Asia</option>
								<option value="Europe">Europe</option>
								<option value="Oceania">Oceania</option>
							</select>
						</form>
					</li>
				</ul>
                {data?.length ?(
				<ul className="counter-list">
					{data.map((el) => {
						return (
							<Card key={el.id} name={el.name.common} img={el.flags.png} population={el.population} region={el.region} capital={el.capital?.[0]}
							/>
						);
					})}
				</ul>
                ):(
					<h2 className='my-4 text-light'>Not found</h2>
                )}
			</div>
		</>
	);
};

export default Section;
