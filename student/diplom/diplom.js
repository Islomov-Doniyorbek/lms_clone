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


function table() {
    let tbody = document.querySelector(".table tbody");
    
    let mavzu = [
        "Web olam", "Little programmers", "Yangi tizimlar", "Sun'iy web sayt", "Kelajak robotlari", "Zamonaviy veb ilovalar"
    ]
    let teachers = [
        "Soliyev Barat Khanturayev", "Nestrov Gabriel Kamalovich", "Qahhorov Zohid Musayevich", "Lutfullayeva Sanobar Munirbayevna", "Rashidov Radik Kutlimuradovich", "Damirova Farida Hamzayevna", "Asadullayev Nodir Botirovich", "Yuriyeva Galina Kuramshina","Valiyev Shamsiddin Alibekovich", "Qilichov Bekzod Jumayevich", "Muhammadkarimova Munavvar Kudratullayevna","Maratov Ruslan Maksimov", "Bo'riboyev Yunus Karabayevich"
        
    ]
    let add = ["Yo'q", "Ilmiy ish", "Maqola"];
    let baho = [4, 5];
    function place(teach,theme) {
        for (let i = 0; i < 1; i++) {
            let akaR = Math.floor(Math.random() * teach.length)
            let br = Math.floor(Math.random() * baho.length)
            let addr = Math.floor(Math.random() * add.length)
            let taqdimot = Math.floor(Math.random() * (12000 - 4000 + 1) + 4000)
            tbody.innerHTML += `
            <tr>
                <td data-label="Mavzu">
                    <p id=\"fann\"> ${theme[i]}</p>
                     </td>
                         <td data-label="Rahbar">
                             <p>${teach[akaR]}</p>
                         </td>
                        <td data-label="Taqdimot">
                                 <p class="taqdimot">
                                    ${taqdimot}
                                 </p>
                             
                          </td>
                         <td data-label="Diplom ishi">
                             <a href="">Diplom ishi</a>
                          </td>
                         <td data-label="Qo'shimcha">
                             ${add[addr]}
                         </td>
                         <td data-label="Olingan baho">
                             ${baho[br]}
                         </td>
                     </tr>
            `        
            teach.splice(akaR, 1);
        }

    }
    place(teachers,mavzu)
    
}

table()