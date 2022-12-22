import React from 'react';
import { Link } from 'react-router-dom';
import "./card.css";
import { useTranslation } from 'react-i18next';

const Card = ({name, img ,population ,region ,capital}) => {
    const { t } = useTranslation();
    return (
            <li className="counter-item">
                <img className='counter-img' width="265" height="160" src={img} alt={name}/>
                <h2 className='counter-item-title'>{name}</h2>
                <strong className="counter-item-text">{t("Card.Population")}: <span className='counter-item-span'>{population}</span></strong>
                <strong className="counter-item-text">{t("Card.Region")}:<span className='counter-item-span'> {region}</span></strong>
                <strong className="counter-item-text">{t("Card.Capital")}:<span className='counter-item-span'>{capital}</span></strong>
                <Link className='btn-item' to={`/link/${name}`}> {t("Card.MoreInfoBtn")}</Link>
            </li>
    );
};

export default Card;