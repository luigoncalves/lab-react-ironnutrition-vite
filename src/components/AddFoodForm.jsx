import { useState } from 'react';

function AddFoodForm({ addFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = e => {
    //this function will prevent the default behaviour of the browser when a click is done
    e.preventDefault();
    const newFood = { name, image, calories, servings };

    // calls the addNewMovie function that will add newMovie to the array

    addFood(newFood);

    //reset the state
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  const handleName = e => setName(e.target.value);
  const handleImage = e => setImage(e.target.value);
  const handleCalories = e => setCalories(e.target.value);
  const handleServings = e => setServings(e.target.value);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>

        <input type='text' name='name' value={name} onChange={handleName} />

        <label>Image: </label>

        <input type='text' name='image' value={image} onChange={handleImage} />

        <label>Calories: </label>

        <input
          type='number'
          name='calories'
          value={calories}
          onChange={handleCalories}
        />

        <label>Servings: </label>

        <input
          type='number'
          name='servings'
          value={servings}
          onChange={handleServings}
        />

        <button type='submit'>Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
