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
axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
.then(res=>{
  toggleLoader(false)
    // console.log(res);
    let categories=res.data.categories;
    let cartona="";
    categories.forEach(category => {
        cartona += `
                 
                   
        <div class="meal relative" onclick='getGategoriesMeals("${category.strCategory}")'>
          <img src="${category.strCategoryThumb}" alt="meal image" class="img " > 
          <div class="layer ">
          <h3 class="text-black absolute left-1/2 top-[5%] transform -translate-x-1/2 text-3xl">${category.strCategory}</h3>
          <p>${category.strCategoryDescription.split(" ").slice(0, 20).join(" ")}</p>
          </div> 
           
      </div>
  `;
})

document.getElementById("main").innerHTML = cartona; 
    })

    function getGategoriesMeals(category){
      toggleLoader(true)
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(res=>{
          toggleLoader(false)
            console.log(res.data);
            let meals=res.data.meals;
            let cartona="";
            meals.forEach(meal => {
                cartona += `
                
                <div class="meal" onclick="ShowDetails(${meal.idMeal})">
                                <img src="${meal.strMealThumb}" alt="meal image" class="img " > 
                                <div class="layer"><p class="text text-black">${meal.strMeal}</p></div> 
                                 
                            </div>
                `;
            })
            document.getElementById("main").innerHTML = cartona;
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
