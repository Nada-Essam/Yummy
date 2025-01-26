
var sideNav = document.querySelector(".side-nav");
var menuToggle = document.querySelector(".menu-toggle");
var close = document.querySelector(".close");

menuToggle.addEventListener("click", function () {
  sideNav.classList.toggle("side-nav-visible");
  menuToggle.classList.toggle("menu-toggle-hidden");
  close.classList.toggle("close-visible");
});

close.addEventListener("click", function () {
  sideNav.classList.toggle("side-nav-visible");
  menuToggle.classList.toggle("menu-toggle-hidden");
  close.classList.toggle("close-visible");
});

toggleLoader(true)
axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
.then(res=>{
  toggleLoader(false)
    console.log(res.data);
    let ingredients=res.data.meals;
    let cartona="";
    ingredients.slice(0,20).forEach(ingredient => {
        cartona += `
        <div class="meal" onclick="getIngredientsMeals('${ingredient.strIngredient}')">
                     <div class="bg-transparent cursor-pointer text-center text-lg text-white">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                       <h3 class="font-bold text-2xl">${ingredient.strIngredient}</h3>
                       <p class="text-lg">${ingredient.strDescription.split(' ').slice(0,20).join(' ')}</p>
                    </div>        
                </div>
        `;
    });
    document.getElementById("main").innerHTML=cartona;
})

function getIngredientsMeals(ingredient){
  toggleLoader(true)
  axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
  .then(res=>{
    toggleLoader(false)
      console.log(res);
      let meals=res.data.meals;
      let cartona="";
      meals.forEach(meal => {
          cartona += `
          <div class="meal" onclick="ShowDetails(${meal.idMeal})">
                            <img src="${meal.strMealThumb}" alt="meal image" class="img " > 
                            <div class="layer"><p class="text text-black">${meal.strMeal}</p></div> 
                             
                
                        </div>
          `;
      });
      document.getElementById("main").innerHTML=cartona;
  })

}
function ShowDetails(id) {
    window.location = `/Yummy/Details.html?id=${id}`;
  }

  function toggleLoader(show=true){
    if(show){
      document.getElementById("loader").style.visibility='visible'
    }else{
      document.getElementById("loader").style.visibility='hidden'
    }
  }
