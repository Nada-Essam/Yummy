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

const searchparam = location.search;
const param = new URLSearchParams(searchparam);
const id = param.get("id");

function getMealDetails(id) {
  let content = "";
  toggleLoader(true)
  axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => {
      toggleLoader(false)
      const meal = res.data.meals[0]; // تخزين بيانات الوجبة لتسهيل الوصول إليها
      
      content += `
        <div class="image basis-full md:basis-1/3 ml-28">
          <img src="${meal.strMealThumb}" class="rounded-2xl" alt="">
          <h2 class="text-white font-bold text-2xl">${meal.strMeal}</h2>
        </div>

        <div class="info basis-full md:basis-2/3 text-white pt-3">
          <h2 class="font-semibold text-3xl" style="margin-bottom:10px">Instructions</h2>
          <p class="text-md mr-6">${meal.strInstructions}</p>
          <h2 class="font-semibold text-3xl" style="margin-top:20px">Area: ${meal.strArea}</h2>
          <h2 class="font-semibold text-3xl" style="margin-top:20px">Category: ${meal.strCategory}</h2>
          <h3 class="font-semibold text-3xl" style="margin-top:20px">Recipes:</h3>
          <div id="recipe" class="mt-6">
      `;

      // إضافة المكونات داخل #recipe
    for (let i = 1; i <= 20; i++) {
  const ingredient = meal[`strIngredient${i}`];
  const measure = meal[`strMeasure${i}`];

  if (ingredient) { 
    content += `<p class="recipes text-md ml-2 inline-block">${measure} ${ingredient}</p>`;
  }
}


      // إغلاق div#recipe بعد الانتهاء من حلقة المكونات
      content += `
          </div> 
          <h3 class="font-semibold text-3xl" style="margin-top:20px">Tags:</h3>
          <button type="button" class="mt-5 bg-green-500 hover:bg-green-700 font-semibold text-xl py-2 px-4 rounded-lg text-white">
            <a href="${meal.strSource}" class='text-white'>Source</a>
          </button>
          <button type="button" class="bg-red-500 hover:bg-red-700 font-semibold text-xl py-2 px-4 rounded-lg text-white">
            <a href='${meal.strYoutube}' class='text-white'>YouTube</a>
          </button>
        </div>
      `;

      // عرض المحتوى النهائي داخل عنصر الصفحة
      document.getElementById("Details").innerHTML = content;
    });
}

// استدعاء الدالة
getMealDetails(id);

function toggleLoader(show=true){
  if(show){
    document.getElementById("loader").style.visibility='visible'
  }else{
    document.getElementById("loader").style.visibility='hidden'
  }
}
