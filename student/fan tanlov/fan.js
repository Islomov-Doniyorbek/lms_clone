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



function choose() {
    let cols = document.querySelectorAll(".fakultet .col");
    let innerDisplay = document.querySelector(".inner_display");


    let multimedia = ["Web Dizayn", "Mobil dasturlash", "Grafik dizayn", "Mikrochip", "Moution Design"];
    let mexatrotexnika = ["Robototexnika", "Robotlarni loyihalash", "Mexanik qurilmalar", "Sxema va chiplar"]
    let pochta = ["Pochta", "Ommaviy axborot vositalari", "Antenna va signal", "Simsiz qurilmalar"];
    let suniyintelekt = ["Sun'iy Intellekt", "Robotlarni loyihalash", "Neyron tarmoqlar", "Ma'lumotlar muhandisi"];
    function joyla(fak) {
        for (let i = 0; i < fak.length; i++) {
            innerDisplay.innerHTML += `
                <div class="row">
                   <p><b id="numeric" style=\"color: #1d2d5b;\">${i+1}</b>. <b id="subject" style=\"color: #1d2d5b;\">${fak[i]}</b></p><button id="choose">Tanlash</button>
                </div>
            `
        }
    }

    cols.forEach((e, a) => {
        e.onclick = () => {
            innerDisplay.innerHTML = ' '
            if (e.id === "multimedia") {
                joyla(multimedia)
            } else if (e.id === "robototexnika") {
                joyla(mexatrotexnika)
            } else if (e.id === "pochta") {
                joyla(pochta)
            } else if (e.id === "suniyintelekt") {
                joyla(suniyintelekt)
            }
            let btns = document.querySelectorAll("#choose");
            let u = 0;
            // console.log(btns);
            btns.forEach(e => {
                    e.addEventListener("click", () => {
                        u++;
                        e.innerHTML = ' ';
                        if (u < 3) {
                            e.disabled = true;
                            e.innerHTML = "<i class=\"fa fa-check-square-o\" style=\"color: lime;\"></i>";
                            e.parentElement.style.border = "2px solid lime";
                        } else {
                            e.disabled = true;
                            e.innerHTML = "<i class=\"fa fa-remove\" style=\"color: red;\"></i>";
                            e.parentElement.style.border = "2px solid red";
                            e.parentElement.querySelector("#numeric").style.color = "red"
                            e.parentElement.querySelector("#subject").style.color = "red"
                            // e.style.background = 
                            e.style.zIndex = 110;
                            let did = document.createElement("span");
                            did.style.position = "absolute";
                            did.style.zIndex = 109;
                            did.style.width = "140px";
                            did.style.padding = "3px 8px";
                            did.style.fontSize = "13px";
                            did.style.background = "#ffffff";
                            did.style.color = "red";
                            did.style.textAlign = "center"
                            did.style.border = "1.3px solid red";
                            did.style.borderRadius = "4px"
                            did.id = "did";
                            did.style.animation = "scr 3s linear forwards";
                            did.textContent = "Boshqa tanlay olmaysiz!";
                            e.parentElement.appendChild(did)

                        }
                    })
                    
                
                // console.log(e);
            })

            
        }

    })

}

choose()








