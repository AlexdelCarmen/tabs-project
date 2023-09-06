 

const tabs = document.querySelectorAll(".faq-tab");  //FAQ tabs
let selectedTab = "";
const faqContainers = document.querySelectorAll(".faq-container"); // FAQ containers
console.log(tabs);
tabs.forEach(tab => tab.addEventListener('click', (e)=>{
    tabs.forEach(tab => tab.classList.remove("active")); //remove active class from all tabs
    tab.classList.add("active"); //add active class to selected tab
    selectedTab = document.getElementById(tab.dataset.tab); 
    faqContainers.forEach(faqContainer => faqContainer.classList.remove("visible")); 
    selectedTab.classList.add("visible");
}))

