let menu = document.querySelector(".fa-navicon");
let aside = document.querySelector("aside");
let aside2 = document.querySelectorAll("aside span");
let title_p = document.querySelector("aside .title p");
let close = document.querySelector("aside .fa-remove");
let user = document.querySelector(".fa-user");
let profBox = document.querySelector(".profile-box");

menu.onclick = () => {
    if (window.innerWidth >= 993) {
        aside.classList.toggle("width")
        aside2.forEach(e => {
            e.classList.toggle("none");
        });
    } else if (window.innerWidth < 993) {
        aside.classList.toggle("hide")
        aside.classList.remove("screen")
    }
}
close.onclick = () => {
    aside.classList.remove("hide")
    aside.classList.toggle("screen")
}
user.onclick = () => {
    profBox.classList.toggle("hidden");
    user.classList.toggle("clr")
}
let username = document.querySelector(".username p");

let savedData = localStorage.getItem("savedData");

username.innerHTML = savedData;

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
document.querySelector(".date").innerHTML = `${day}.${month}.${year}`;
document.querySelector(".time").innerHTML = `${hours}:${minutes}`

function survey() {
    let currspan = document.querySelector(".current");
    let finspan = document.querySelector(".finished");
    let currContent = document.querySelector("#current");
    let finContent = document.querySelector("#finished");

    currspan.onclick = () => {
        currspan.style.borderBottom = "1px solid navy"
        finspan.style.borderBottom = "none"
        currContent.style.display = "block";
        finContent.style.display = "none";
    }
    finspan.onclick = () => {
        currspan.style.borderBottom = "none"
        finspan.style.borderBottom = "1px solid navy"
        currContent.style.display = "none";
        finContent.style.display = "flex";
    }
}
survey()