const loadMeals = search => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
displayMeals = meals => {
    const callDiv = document.getElementById('meal-container')
    callDiv.innerHTML = ``;
  meals.forEach(meal => {
  
    const makeDiv = document.createElement('div')
    makeDiv.classList.add('col')
    makeDiv.innerHTML = `              
    <div class="card h-100">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
    </div>
</div>
        `
    callDiv.appendChild(makeDiv)
  })
}

const searchFood = () => {
  const searchFiled = document.getElementById('search-field')
  const searchText = searchFiled.value
  loadMeals(searchText)
  searchText.value = ''
}

loadMeals('a')
