import React, { useState } from 'react'
import { GiFullPizza } from "react-icons/gi";
import { GiNoodles } from "react-icons/gi";
import { CiBowlNoodles } from "react-icons/ci";
import { FaIceCream } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import './Tabs.css';
import {fetchTabData } from '../../Service';
import { useEffect } from 'react';

function Tabs(props) {
    const [data, setData] = useState('Pizza')
    const [active, setActive] = useState('Pizza');
    const [tabLabel, seTabLabel] = useState([
        {
            name: 'Pizza',
            icon: <GiFullPizza />,
            id: "0209cb28fc05320434e2916988f47b71"
        },
        {
            name: 'Noodles',
            icon: <GiNoodles />,
            id: "fb116ade14057fd6d111a73767f3dacc"
        },
        {
            name: 'Desert',
            icon: <CiBowlNoodles />,
            id: "e3266e3c35d91ade17a72006ca2dff38"
        },
        {
            name: 'Ice cream',
            icon: <FaIceCream />,
            id: "9b2a48e1ad861657ebbc7d5aab99a281"
        },
    ])
    
    useEffect(() => {
        fetchTabData(tabLabel[0].id).then((res) => {
            setData(res)
        })
    }, [])

    const clickhandler = (name, id) => {
        setActive(name);
        fetchTabData(id).then((response) => {
            setData(response);
            props.setLoader(false);
        })
    }

    return (
        <div className="container">
            <h1 className='recipeHeading'>What would you like to have!</h1>
            <div className="tabs">
                {
                    tabLabel && tabLabel.map((item, index) => (
                        <div onClick={() => (clickhandler(item.name, item.id),props.setLoader(true))} key={index} className={`tablist ${active === item.name ? "active" : ""}`}>
                            <div className='svg'>
                            {item.icon}
                            </div>
                            <span>{item.name}</span>
                        </div>
                    ))
                }
            </div>
            <div className='recipe_banner'>
                {
                    data !== "" && data.recipe && <>
                        <div className="left-col">
                            <span className='badge'>{data.recipe.cuisineType[0].toUpperCase()}</span>
                            <h1>{data.recipe.label}</h1>
                            <p><strong>Recipe by:</strong><small>{data.recipe.source}</small></p>
                            <h3>Ingredients</h3>
                            <div className='ingredients'>
                                <ul>
                                    {
                                        data.recipe.ingredientLines.map((list, index) => (
                                            <li key={index} ><FaCalendarCheck size="18px" color="#6fcb9f" />&nbsp;<span>{list}</span></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="right-col">
                            <div className="image-wrapper">
                                <img src={data.recipe.image} alt={data.recipe.label} />
                            </div>
                        </div>

                    </>
                }
            </div>
        </div>
    )
}

export default Tabs


