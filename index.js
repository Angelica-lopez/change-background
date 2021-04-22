const colors = ["#E8DAEF", "#6FEBFC", "#6FFCAF", "#E0FC6F", "#FF55FC", "#B96483", "#3460E8", "#73FFD7", "#F9C112", "#2F6321", "#90A99D", "#5D375E"];
const button = document.querySelector(".button");
const button2 = document.querySelector(".button--2");
const change = document.querySelector(".content__item2");


button.addEventListener('click', function() {
    const number = Math.floor(Math.random()*12);
    document.body.style.backgroundColor = colors[number];
    button.style.color = colors[number];
    change.style.color = colors[number];
    change.textContent = colors[number];
})

button2.addEventListener('click', function() {
    document.body.style.backgroundColor = "#f1f5f8";
    change.textContent = "#f1f5f8";
    button.style.color = "#f1f5f8";
    change.style.color = "#f1f5f8";
})