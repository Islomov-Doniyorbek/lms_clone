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

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
document.querySelector(".date").innerHTML = `${day}.${month}.${year}`;
document.querySelector(".time").innerHTML = `${hours}:${minutes}`

document.querySelector("#rule").onclick = () => {
    alert("Hech qanday qoida yo'q!")
}

function table() {
    let tbody = document.querySelector(".table tbody");
    
    let subjects = [
        "Sun'iy intellekt asoslari", "Kiberxavfsizlik asoslari", "Ma'lumotlar tuzilmasi va algoritmlash", "Elektronika va sxemalar", "Kompyuter tashkillashtirish", "Hisob", "Fizika 1", "Dasturlash 1", "Ingliz tili 1", "Diskret tuzilmalari", "Dinshunoslik", "O'zbekiston tarixi", "Dasturlash 2","Fizika 2","Ingliz tili 2","Falsafa"
    ]
    let patok = ["FS", "DZ", "MG", "LG", "FR", "NM", "HS", "CL", "AW", "PV", "CY", "CT", "BV", "DF", "PF", "FE", "ES", "SI", "DB", "FH"]
    let vaqt = [
        "08:30","10:00","11:00","12:00","13:30","14:30","15:00","10:30","11:30","16:30","17:00","16:00","18:00","12:30","09:30"
    ]
    let xona = [
        "E","D","F"
    ]
    let bal = [
        2,5,4,6,8,10,14,12,16,18,20,24,26,28,30,34,32,31,36,35,38,40,42,46,45,44,48,41,50,44,41,43,39,30,30,30,40,48,35,45,36,34,39,40,42,50,48,48,50
    ]
    let nb = [0,0,0,1,1,2,3,4,5,6,7,8]
    function place(fanlar, patok, vaqt, xona, bal) {
        for (let i = 0; i < 5; i++) {
            let rf = Math.floor(Math.random() * fanlar.length);
            let rp = Math.floor(Math.random() * patok.length);
            let rv = Math.floor(Math.random() * vaqt.length);
            let rx = Math.floor(Math.random() * xona.length);
            let rb = Math.floor(Math.random() * bal.length);
            let rpn = Math.floor(Math.random() * (40 - 10 + 1) + 10);
            let rxn = Math.floor(Math.random() * (200 - 100 + 1) + 100);
            let rsd = Math.floor(Math.random() * (29 - 1 + 1) + 1);
            let rso = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            tbody.innerHTML += `
            <tr>
                <td data-label="Fan">
                    <p id=\"fann\"> ${fanlar[rf]}</p>
                     </td>
                         <td data-label="Guruh">
                             <p>${patok[rp]} ${rpn}</p>
                         </td>
                        <td data-label="Sana">
                            <p>
                                 ${rsd}-${rso}-2024
                             </p>
                          </td>
                         <td data-label="Vaqt">
                             <p>${vaqt[rv]}</p>
                          </td>
                         <td data-label="Xona">
                             <p>${xona[rx]}-${rxn}</p>
                         </td>
                         <td data-label="Ball">
                             <p>${bal[rb] * 2}</p>
                         </td>
                         <td data-label="">
                             <a href="">
                                 <i class="fa fa-info"></i>
                             </a>
                         </td>
                     </tr>
            `        
        }

    }
    place(subjects, patok, vaqt, xona, bal)
    
}

table()