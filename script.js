
function searchFood(){
const query = document.getElementById('search-input').value;
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
.then(response => response.json())
.then(data =>{
    
if (data.meals){
    displayResults(data.meals);
} else {
    document.getElementById('results-container').innerHTML='<p>This Dish is not available.....</p>';
}
})
.catch(error =>{
    console.error("Error:",error);
    
});

}

function displayResults(meals){
    const Takeresults = document.getElementById('results-container');
    Takeresults.innerHTML = '';

    meals.forEach(meal => {
        const mealCard = `
        <div class="food-card">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>${meal.strMeal}</h3>
            <p><a href="${meal.strSource || `https://www.themealdb.com/meal/${meal.idMeal}`}" target="_blank">View Recipe</a></p>
            <p><a href="${meal.strYoutube}" target="_blank">Watch on YouTube</a></p> 
        </div>
        `;
        Takeresults.innerHTML += mealCard;
        
    });
}
