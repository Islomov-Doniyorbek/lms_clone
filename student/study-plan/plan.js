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
    let dataTabel = document.querySelector(".dataTable");
    let n = 8;
    for (let i = 0; i < n; i++) {
        dataTabel.innerHTML += `
        <div class="card">
            <p id="semestr">${i+1} semestr</p>
            <table class="table">
                <thead>
                    <tr>
                        <th>Fan</th>
                        <th>Kredit</th>
                        <th>Olingan baho</th>
                    </tr>
                    </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
        `        
    }
    let tbodies = document.querySelectorAll(".table tbody");
    let baho = [2, 3, 3, 3, 4, 4, 4, 5];
    let fanlar = [
        ["Hisob", "Fizika 1", "Dasturlash 1", "Dinshunoslik", "Ingliz tili 1", "Falsafa"], ["Akademik yozuv", "Dasturlash 2", "Differensial tenglamalar", "Diskret tuzilamalari", "Fizika 2", "Ingliz tili 2", "O'zbekiston tarixi"],
        ["Elektronika va sxemalar", "Kiberxavfsizlik asoslari", "Kompyuter tashkillashtirish", "Ma'lumotlar tuzilmasi va algoritmlash", "Sun'iy intellekt asoslari"],
        ["Kompyuter tarmoqlari", "Web ilovalar yaratish", "IT/Mutaxassislik tanlov fani", "Ehtimollar va statistika", "Ma‘lumotlar bazasi"],
        ["Kompyuter tarmoqlari", "Kompyuter grafikasi", "Inson-mashina o'zaro ta'siri", "Dasturlash uslublari va paradigmalar", "Ochiq tanlov, fan", "Individual loyiha"],
        ["IT/Mutaxassislik tanlov fani", "Individual loyiha", "IT/Mutaxassislik tanlov fani", "Mobil ilovalarni ishlab chiqish (MT)", "Kompyuter animatsiyasi (MT)", "Operatsion tizimlar"],
        ["IT/Mutaxassislik tanlov fani", "IT/Mutaxassislik tanlov fani", "IT/Mutaxassislik tanlov fani", "Veb dizayn"],
        ["IT/Mutaxassislik tanlov fani","IT/Mutaxassislik tanlov fani","IT/Mutaxassislik tanlov fani"]
    ]
    let kreditlar = [
        [6, 6, 6, 4, 4, 4],
        [6, 4, 4, 4, 4, 4, 4],
        [6, 6, 6, 6, 6],
        [6, 8, 6, 6, 6],
        [6, 6, 6, 6, 4, 2],
        [6, 2, 6, 6, 6, 6],
        [6, 2, 6, 6, 6, 6],
        [6, 6, 6, 6],
        [6, 6, 6],
        
        
        
    ]
    function place(fanlar, kredit, baho, tbody) {
        for (let i = 0; i < fanlar.length; i++) {
            let gpa = 0.0, kr = 0, krb = 0;
            
            let rb = Math.floor(Math.random() * baho.length);
            
            tbody.innerHTML += `
            <tr>
                <td data-label="Fan">
                    <p id=\"fann\"> ${fanlar[i]}</p>
                </td>
                <td data-label="Kredit">
                    <p>${kredit[i]}</p>
                    </td>
                    <td data-label="Olingan baho">
                    <p>
                    ${baho[rb]}
                    </p>
                    </td>
                    </tr>
                `;
        }
    }
    
    tbodies.forEach((e,i) => {
        place(fanlar[i], kreditlar[i], baho, e)        
    })
    
}

table()