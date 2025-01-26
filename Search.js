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

const searchInput = document.getElementById("searchbyname");
const searchinput=document.getElementById("searchbylitter");
const searchResults = document.getElementById("container");
toggleLoader(false)
searchInput.addEventListener("keyup", function () {
  toggleLoader(true)
  const Input=searchInput.value.trim().toLowerCase();
  
  axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Input}`)
  .then(res => {
    toggleLoader(false)
    let meals = res.data.meals;
    let cartona = "";
    if(meals === null){
      cartona = `<h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-4xl ">Sorry, we didn't find any meals</h1>`
    }else{
          meals.forEach(meal => {
          cartona += `
        
       <div class="meal" onclick="ShowDetails(${meal.idMeal})">
                        <img src="${meal.strMealThumb}" alt="meal image" class="img " > 
                        <div class="layer"><p class="text text-white">${meal.strMeal}</p></div> 
                         
                    </div>
      
      `;
    })
    }
    searchResults.innerHTML = cartona;
    
  })
})
toggleLoader(false)
searchinput.addEventListener("keyup",()=>{

  const input=searchinput.value.trim().toLowerCase();
  toggleLoader(true)

  axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`)
  .then(res=>{
    toggleLoader(false)
    let meals=res.data.meals;
    let cartona="";
    if(meals === null){
      cartona = `<h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-4xl ">Sorry, we didn't find any meals</h1>`
    }else{
          meals.forEach(meal => {
          cartona += `
        
       <div class="meal" onclick="ShowDetails(${meal.idMeal})">
                        <img src="${meal.strMealThumb}" alt="meal image" class="img " > 
                        <div class="layer"><p class="text-black text-3xl font-semibold">${meal.strMeal}</p></div> 
                         
                    </div>
      
      `;
    })
    }
    searchResults.innerHTML = cartona;
  })
})
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
