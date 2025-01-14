import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Mealinfo = () => {
    const { mealid } = useParams();
    const [info, setInfo] = useState(null);

    useEffect(() => {
        const getInfo = async () => {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
            const jsonData = await get.json();
            setInfo(jsonData.meals ? jsonData.meals[0] : null);
        };

        getInfo();
    }, [mealid]);

    return (
        <div>
            {!info ? (
                <p>Data Not Found</p>
            ) : (
                <div className='mealInfo'>
                    <img src={info.strMealThumb} alt={info.strMeal} />
                    <div className='info'>
                        <h1>Recipe Detail</h1>
                        <button>{info.strMeal}</button>
                        <h3>Instructions</h3>
                        <p>{info.strInstructions}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Mealinfo;
