import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import './RecipeList.css';
import { fetchData } from '../../Service';

const RecipeList = (props) => {
    const [searchedTearm, setSearchedTearm] = useState('');
    const [query, setQuery] = useState('pasta');
    const [data, setData] = useState('');
 
    const searchRecipe = (searchQueri) => {
        fetchData(searchedTearm).then((response) => {
            setData(response);
            props.setLoader(false); 
        })
    }
        
    useEffect(() => {
    fetchData(query).then((response) => {
            setData(response);
            setSearchedTearm(searchedTearm);
            props.setLoader(false);
        })
    }, [])

    return (
        <div className='container'>
            <div className='heading-line'>
                <strong>Search Recipes</strong>
                <div className='input-wrapper'>
                    <input onChange={(e) => setSearchedTearm(e.target.value)} value={searchedTearm} className='input-field' type="text" placeholder='Search your recipies.......' />
                    <button onClick={() => (searchRecipe(searchedTearm), props.setLoader(true))}><FaSearch /></button>
                </div>
            </div>
            <div className='flexbox'>
                {
                    data && data.hits.map((item, index) => (
                        <div key={index} className='flexItem'>
                            <div className='img-wrapper'>
                                <img src={item.recipe.image} alt={item.recipe.label} />
                            </div>
                            <p>{item.recipe.label}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecipeList
