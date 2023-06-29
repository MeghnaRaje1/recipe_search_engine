import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

//square
const Square = () => {
   return (
     <div style={{ width: '400px', 
      height: '400px', 
      backgroundColor: 'red', 
      margin: 'auto' ,
      borderRadius: '10px',
      // display: 'flex', 
      // justifyContent: 'center', 
      // alignItems: 'center',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      background: 'grey'
   }}>
   </div>
   );
 };
//recommender function
function Recommender(){
   return(
   <Display2>
      <h1>Recommended Values</h1>
      <Square>
         
      </Square>
   </Display2>
   )
}
// nutrition function
function NutritionCalculator(){
   // const api_id = '49435b25';
   // const api_key = '4bd960fb8c5812a59403a822fad036aa';
   // const url = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
   // const headers = {
   // 'Content-Type': 'application/x-www-form-urlencoded',
   // 'x-app-id': api_id,
   // 'x-app-key': api_key,
   // 'x-remote-user-id': '0'
   // };
   // const query = {
   // "query": "tomato pizza biscuit cheese"
   // };

   // const data = fetch(url, {
   // method: 'POST',
   // headers: headers,
   // body: new URLSearchParams(query)
   // })
   // .then(response => response.json())
   // .then(data => console.log(data))
   // .catch(error => console.error(error));

   return(
   <Display2>
      <h1>Nutrition Values</h1>
      {/* <ul>
        {data['foods'].map(food => (
          <li key={food[0].food_name}>
            <span>{food[1].food_name}</span>
            <span>{food[1].nf_calories}</span>
          </li>
        ))}
      </ul> */}
      {/* <ul>
         {JSON.parse(data.foods).map(
            (ingredient) => (<li></li>)
         )}
      </ul> */}
      <Square/>
   </Display2>
   )
}



// below function is used to display the title, ingredients and recipe of the dish
function RecipeDetail() {
   const [recipeName, setRecipeName] = useState('')
   const [recipeDirections, setRecipeDirections] = useState('[]')
   const [recipeIngredients, setRecipeIngredients] = useState('[]')
   useEffect(()=>{
      let params = window.location.href
      params = params.split('?')[1]
      params = params.split('&')
      console.log(params)
      setRecipeName(params[0].split('=')[1].replaceAll('%20',' ').replaceAll('%27','').replaceAll('%22',''))
      let directions = decodeURIComponent(params[1].split('=')[1])
      setRecipeDirections(directions.trim().slice(1,directions.trim().length-1))
      let ingredients = decodeURIComponent(params[2].split('=')[1])
      setRecipeIngredients(ingredients.trim().slice(1,ingredients.trim().length-1))
   },[recipeIngredients])
   return (
      <Display>
         <Div>
            <h1> {recipeName} </h1>
            <Grid>
               <h2>Ingredients</h2>
               <ul>
                  {JSON.parse(recipeIngredients).map(
                     (ingredient) => (<li>{ingredient}</li>)
                  )}
               </ul>
               <h2>Directions</h2>
               <ul>
                  {JSON.parse(recipeDirections).map(
                     (direction) => (<li>{direction}</li>)
                  )}
               </ul>
            </Grid>
         </Div>
         <Div2>
            <NutritionCalculator/>
            <br></br>
            <Recommender/>
         </Div2>
      </Display>
   );
}

// now we define a function to display the nutrition values and recommended recipes
// function NutritionCalculator(){
//    return(
//       <Display2>
//       <h1>Nutrition Values</h1>
//    </Display2>
//    )
// }

const Display = styled.div`
color: brown;
/*align-items: center;*/
display:flex;
/*width: 50%;*/
`;

const Div = styled.div`
width:50%;
`;
const Div2 = styled.div`
float:right;
align-items: left;
width:50%;
`;


const Display2 = styled.div`
color: brown;
align-items: center;
/*float: right;*/
/*width: 50%;*/
`;

const Grid = styled.div`

`; 

export default RecipeDetail;
export { NutritionCalculator};