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

username.innerHTML = savedData

function schedule() {
    
    let fanlar = [
        "Kiberxavfsizlik asoslari", "Sun'iy intellekt asoslari", "Kompyuter tashkillashtirish", "Elektronika va sxemalar", "Ma'lumotlar tuzilmasi va algoritmlash"
    ]
    let bino = ["A", "B", "C", "D", "E", "F"]
    let xonalar = document.querySelectorAll(".content-box .xona");

    
    
    for (let i = 0; i < xonalar.length; i++) {
        let rnb = Math.floor(Math.random() * bino.length);
        let rnx = Math.floor(Math.random() * (400 - 100 + 1) + 100);
        xonalar[i].innerHTML = `${bino[rnb]}-${rnx}`
    }
    
    
    let fan = document.querySelectorAll(".fan");
    for (let i = 0; i < fan.length; i++) {
        let rnf = Math.floor(Math.random() * fanlar.length);
        fan[i].innerHTML = `${fanlar[rnf]}`
        
    }
    let cntbx = document.querySelectorAll(".content-box");
    let clrs = [
        "navy", "teal", "orangered", "forestgreen", "gold","crimson", "cadetblue"
    ];
    for (let i = 0; i < cntbx.length; i++) {
        let rnc = Math.floor(Math.random() * clrs.length);
        cntbx[i].style.background = clrs[rnc]; 
    }

    var randomNumbers = [];
    function generateRandomNumbers(min, max, count) {
        var numbersGenerated = 0;
        while (numbersGenerated < count) {
          var number = Math.floor(Math.random() * (max - min + 1) + min);
          if (!randomNumbers.includes(number)) {
            randomNumbers.push(number);
            numbersGenerated++;
          }
        }
    }
    generateRandomNumbers(1, 15, 5)

    for (let i = 0; i < randomNumbers.length; i++) {
        let r = Math.floor(Math.random() * 14);
        let f = randomNumbers[i]
        cntbx[f].style.background = "transparent"; 
        cntbx[f].style.color = "transparent"; 
    }
    
}

schedule()