//1 Question
document.querySelector(".side-bar .crayons-card .crayons-subtitle-2").textContent = "iNeuron";
document.querySelector(".side-bar .crayons-card .color-base-70").textContent = "I Wtite Code";

// 2 Question
const productArray = [];

document.querySelectorAll(".as-imagegrid-item > a > span").forEach((prod) => {
    let product = prod.innerText.trim();
    productArray.push(product.replace("Support", "").trim());
});
console.log(productArray);

//3 Question
const accordinContainer = document.querySelector(".accordion-homepage");
const h3 = document.createElement("h3");
const sectionEl = document.createElement("section");
const text = document.createTextNode("My New FAQ");
h3.appendChild(text);
sectionEl.appendChild(h3);
sectionEl.setAttribute("class", "parent");
accordinContainer.appendChild(sectionEl);

//4 Question
document.querySelector(".customer-support > a > i").nextSibling.textContent = "+91 6366256689";

//5 Question
document.querySelector(
    ".feature-column-carousel__button > .cta.cta--contained.cta--black"
).textContent = "Checkout";

//6 Question
document.querySelector(".searchinput___zXLAR").addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "Red";
});

// 7. Question
document.querySelectorAll(".search-form.search-widget")[1].submit();

//8 Question
let parentEl = document.getElementById("SIvCob");
let lists = document.getElementById("SIvCob").children;
for (let list of lists) {
    parentEl.removeChild(list);
}

// 9 Question
let color = document.getElementById("start-coding-btn");
color = getComputedStyle(color).backgroundColor;
const heading = document.querySelector(".display-heading-1");
heading.style.fontFamily = "monospace";
heading.style.color = color;

//10 Question
document.querySelectorAll(".login-btn-text")[1].addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "red";
});

// 11 Question
logo.removeChild(document.querySelector(".logo > span"));
const img = document.createElement("img");
img.src = "https://ineuron.ai/images/ineuron-logo.png";
img.style.height = "40px";
logo.appendChild(img);

// 12 Question
document.querySelector(".btn.btn-sm.btn-primary").style.backgroundColor = "#341433";

// 13 Question
document.querySelector(".fl-heading").innerHTML = "<span class='fl-heading-text'>JSBOOTCAMP</span>";



//15 Question
document.querySelector(".ps-title").style.textAlign = "right";

// 16 Question
document.querySelector(".section-title_title__VEDfK").innerHTML = "Start with scratch";
