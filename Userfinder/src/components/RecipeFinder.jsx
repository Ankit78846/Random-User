import React, { useEffect, useState } from 'react'
import "./RecipeFinder.css";
const RecipeFinder = () => {

const [food,setFood] = useState(null);
const [loading,setLoading] = useState(false);

const fetchFood = async ()=>{
    setLoading(true)
    try {
        // API_Key =IPQ6OCoCeTuCvtfJfSp3dw==sGEO7iGfKZV3k5Jq
         const response = await fetch('https://dummyjson.com/recipes?limit=10&skip=10&select=name,image');
         const data = await response.json();
        // setFood(data.recipes[0]);
        const randomIndex = Math.floor(Math.random() * data.recipes.length);
      setFood(data.recipes[randomIndex]);

        console.log(data)
    } catch (error) {
          console.error(error);
    }finally {
      setLoading(false);
    }
   
}
useEffect(()=>{
fetchFood();
},[])

  return (

    <div className='container'>
        <h1 className='title'>RecipeFinder</h1>
        {loading && <p>loading......</p>}
        {food && !loading && (
            <>
     <img src={food.image} alt="food" />
    <h1 >{food.name} {food.id}</h1>
  
       <div className="button" onClick={fetchFood}>Search recipe</div> 
    </> 
    ) }  </div>
  )
}

export default RecipeFinder