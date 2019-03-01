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
async searchAPI(){
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
class UI {}

(function(){
const searchForm = document.getElementById("searchForm");
const searchCity = document.getElementById("searchCity");
const searchCategory = document.getElementById("searchCate");

const zomato = new ZOMATO();

const ui = new UI();


//add select options
document.addEventListener("DOMContentLoaded",()=>{
//all the logics here
zomato.searchAPI().then(data => console.log(data));
});
})();