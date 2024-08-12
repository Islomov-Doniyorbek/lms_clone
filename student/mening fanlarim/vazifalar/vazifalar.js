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
    
    let subjects = [
        "Akademik yozuv AWR", "Differensial tenglamalar DTH","Ingliz tili FRL","Dasturlash PRG","Diskret tuzilmalari DIS","Ma'lumotlar tuzilmasi MTH","Elektronika va sxemalar ESM","Ehtimollar statistikasi EST","Kiberxavfsizlik CYS","Sun'iy Intellekt SI","Hisob CAL","Falsafa PHL","Fizika PHY","O'zbekistonning eng yangi tarixi HIS", "Dinshunoslik REL", "Milliy istiqlol g'oyasi", "Kimyo"
    ]
    let teachers = [
        "Mirsoliyeva Xurshida Muyinbekovna", "Salimova Gulfiya Mamarayimovna", "Haydarov Xurshid Dalimovich", "Damirova Karina Latifjanovna", "Asamova Jamila Karimovna", "Azimov Azim Azimovich", "Kerimbetova Malika Sayfullayevna", "Zufarova Zarifa Zafarovna", "Saidov Nosir Faritovich", "Shokirov Ruslan Nusratovich", "Turg'unova Barchinoy Boltaboyevna", "Yermolov Shamil Ilyayevich", "Jaloliddinov Murtazo Qo'chqorovich", "Turdiyev Alixo'ja Olimovich", "Safarova Galina Kuramshina", "Maksimov Gamzat Grigoriy", "Istamov Jalol Bekmurodovich", "Marsova Valentina Aleksandrovna", "Kudratov Fatih Jumabayevich"
        
    ]
    let numbers = [4, 5];
    let score = [5.4, 6.8, 7, 8.4, 9.1, 4, 3.6, 5.8, 6.6, 7.4, 8.2, 9.5, 8.5,10, 9,3,10, 8, 10, 5, 2, 0, 1]
    
    let kun = ["4 kun", "4 kun","5 kun","5 kun", "3 kun", "7 kun"]
    let akaR = Math.floor(Math.random() * teachers.length)
    let total_score = 0.0;
    function vazifa(teach) {
        for (let i = 0; i < 5; i++) {
            let kunR = Math.floor(Math.random() * kun.length)
            let balR = Math.floor(Math.random() * score.length)
            tbody.innerHTML += `
            <tr>
                        <td data-label="O'qituvchi">
                            <p> ${teach}</p>
                        </td>
                         <td data-label="Topshiriq">
                            <a href="" id="vazifalar">Topshiriq ${i+1}</a>
                         </td>
                        <td data-label="Muddat">
                            <p>
                                ${kun[kunR]}
                             </p>
                          </td>
                         <td data-label="Ball | Maks" id="balll">
                             <p id="total" class="total">${score[balR]}</p> <p id="max" class="total bg">10 </p>  
                          </td>
                         <td data-label="Fayl">
                             <a href="" id="vazifalar">Fayl</a>
                         </td>
                     </tr>
            `        
            total_score += score[balR]
            document.querySelector("#total_score").innerHTML = parseFloat(total_score.toFixed(2));
            let perc = (parseFloat(total_score.toFixed(2)) * 100) / 50
            document.querySelector("#percent").innerHTML = perc + "%";
            let baho = 2;
            if (perc >= 90) {
                baho = 5;
            } else if (perc >= 70 && perc < 90 ) {
                baho = 4;
            }else if (perc >= 60 && perc < 70) {
                baho = 3
            } else {
                baho = 2;
            }
            document.querySelector("#baho").innerHTML = baho;
            
        }
    }
    vazifa(teachers[akaR])
}

table()