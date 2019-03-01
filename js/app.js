class ZOMATO {
    constructor() {
        this.api = "c1c92e6f53e4a41fc598b394a5c1766b";
        this.header = {
            method: "GET",
            headers: {
                "user-key": this.api,
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        };
    }
async searchAPI(city, categoryID){
//category url
const categoryURL = `https://developers.zomato.com/api/v2.1/categories`;

//category  data
const categoryInfo = await fetch(categoryURL,this.header);
const categoryJSON = await categoryInfo.json();
const categories = await categoryJSON.categories;
 
 return {
    categories
  };
 }
}
class UI {
constructor(){
    this.loader = document.querySelector('.loader');
    this.restaurantList = document.getElementById('restaurant-list');
 }
 addSelectOptions(categories){
    const search = document.getElementById("searchCategory");
    let output = `<option value='0' selected>select category</option>`;
    categories.forEach(category => {
        output += `<option value="${category.categories.id}">${category.categories.name}
        </option>`
    })
    search.innerHTML = output;
 }
showFeedback(text){
const feedback = document.querySelector('.feedback');
feedback.classList.add("showItem");
feedback.innerHTML = `<p>${text}</p>`;
setTimeout(() => {
    feedback.classList.remove("showItem");
}, 3000); 
}
}

(function(){
const searchForm = document.getElementById("searchForm");
const searchCity = document.getElementById("searchCity");
const searchCategory = document.getElementById("searchCategory");

const zomato = new ZOMATO();

const ui = new UI();


//add select options
document.addEventListener("DOMContentLoaded",()=>{
//all the logics here
zomato.searchAPI().then(data => ui.addSelectOptions(data.categories));
});

searchForm.addEventListener("submit", event => {
    event.preventDefault();
   
    const city = searchCity.value.toLowerCase();
    const categoryID = parseInt(searchCategory.value);
   
   if(city === '' || categoryID === 0){
    ui.showFeedback('please enter a city and select category');
   }
else{
//logic goes here

}
});
})();