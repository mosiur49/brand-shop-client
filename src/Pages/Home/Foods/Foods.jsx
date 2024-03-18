import React, { useEffect, useState } from 'react';
import FoodsCart from './FoodsCart';

const Foods = () => {
    const [foods,setFoods] =useState([])

    useEffect( ()=>{
        fetch('foods.json')
        .then(res =>res.json())
        .then(data =>setFoods(data))
    },[])
    return (
        <div className='mt-10'>
            <div className='text-center space-y-4'>
            <h3 className='text-xl text-orange-700'>PURE ORGANIC PANTRY</h3>
            <h1 className='text-5xl font-black'>Exploring the World of <br /> Organic Foods</h1>
            <p className=''>Organic food is a concept that refers to foods that are raised or 
                grown <br /> using the methods and standards of organic agriculture,
                which do not use: <br /> Artificial chemicals pesticides…</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-slate-400 py-3 px-3 mt-5'>
               
                {
                    foods.map(food => <FoodsCart
                    key={food.id}
                    food={food}
                    ></FoodsCart>)
                }
            </div>
        </div>
    );
};

export default Foods;