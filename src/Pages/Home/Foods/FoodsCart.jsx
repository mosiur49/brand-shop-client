import React from 'react';

const FoodsCart = ({food}) => {
    const {strMeal,strMealThumb}=food;
    return (
        <div className=''>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure>
    <img src={strMealThumb}alt="Shoes" />
    </figure>
  <div className="card-body">
    <h2 className="card-title">{strMeal}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-between">
      <button className="btn btn-accent">Details</button>
      <button className="btn btn-warning">Add cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodsCart;