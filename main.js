

var sideNav = document.querySelector('.side-nav');
var menuToggle = document.querySelector('.menu-toggle');
var close = document.querySelector('.close');

menuToggle.addEventListener('click', function() {
    sideNav.classList.toggle('side-nav-visible');
    menuToggle.classList.toggle('menu-toggle-hidden');
    close.classList.toggle('close-visible');
});

close.addEventListener('click', function() {
    sideNav.classList.toggle('side-nav-visible');
    menuToggle.classList.toggle('menu-toggle-hidden');
    close.classList.toggle('close-visible');
})


function getmeals() {
    toggleLoader(true)
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(res => {
            toggleLoader(false)
            let meals = res.data.meals;
            let cartona = "";

            for (let i = 0; i < meals.length; i++) {
                cartona += `
                 
                   
                      <div class="meal" onclick="ShowDetails(${meals[i].idMeal})">
                        <img src="${meals[i].strMealThumb}" alt="meal image" class="img " > 
                        <div class="layer"><p class="text-black font-bold text-3xl">${meals[i].strMeal}</p></div> 
                         
                    </div>
                `;
            }

            document.getElementById("main").innerHTML = cartona; 
        })
}

getmeals();


function ShowDetails(id) {
    window.location = `/details.html?id=${id}`;
}

function toggleLoader(show=true){
  if(show){
    document.getElementById("loader").style.visibility='visible'
  }else{
    document.getElementById("loader").style.visibility='hidden'
  }
}
