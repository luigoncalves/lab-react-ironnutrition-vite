import { useState } from 'react';

import foodsJson from '../foods.json';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);
  // const [displayFoods, setDisplayFoods] = useState(foodsJson);

  const deleteFood = id => {
    const copyArr = [...foods];
    const filterArr = copyArr.filter(food => {
      return food.id !== id;
    });
    setFoods(filterArr);
  };

  const addFood = newFood => {
    const updatedList = [...foods, newFood];

    setFoods(updatedList);
  };

  return (
    <div className='FoodList'>
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFood={addFood} />
      {foods.map(element => {
        return (
          <FoodBox key={element.id} food={element} deleteFood={deleteFood} />
        );
      })}
    </div>
  );
}

export default FoodList;
