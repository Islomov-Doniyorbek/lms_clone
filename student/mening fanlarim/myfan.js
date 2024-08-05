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



function table() {
    let tbody = document.querySelector(".table tbody");
    
    let subjects = [
        "Akademik yozuv AWR", "Differensial tenglamalar DTH","Ingliz tili FRL","Dasturlash PRG","Diskret tuzilmalari DIS","Ma'lumotlar tuzilmasi MTH","Elektronika va sxemalar ESM","Ehtimollar statistikasi EST","Kiberxavfsizlik CYS","Sun'iy Intellekt SI","Hisob CAL","Falsafa PHL","Fizika PHY","O'zbekistonning eng yangi tarixi HIS", "Dinshunoslik REL", "Milliy istiqlol g'oyasi", "Kimyo"
    ]
    let teachers = [
        "Mirsoliyeva Xurshida Muyinbekovna", "Salimova Gulfiya Mamarayimovna", "Haydarov Xurshid Dalimovich", "Damirova Karina Latifjanovna", "Asamova Jamila Karimovna", "Azimov Azim Azimovich", "Kerimbetova Malika Sayfullayevna", "Zufarova Zarifa Zafarovna", "Saidov Nosir Faritovich", "Shokirov Ruslan Nusratovich", "Turg'unova Barchinoy Boltaboyevna", "Yermolov Shamil Ilyayevich", "Jaloliddinov Murtazo Qo'chqorovich", "Turdiyev Alixo'ja Olimovich", "Safarova Galina Kuramshina", "Maksimov Gamzat Grigoriy", "Istamov Jalol Bekmurodovich", "Marsova Valentina Aleksandrovna", "Kudratov Fatih Jumabayevich"
        
    ]
    let numbers = [5, 6, 7];
    let kredits = [4, 6, 6, 4, 8]
    let nb = [0,0,0,1,1,2,3,4,5,6,7,8]
    function place(teach, kredit, fan, nb) {
        for (let i = 0; i < numbers[Math.floor(Math.random() * numbers.length)]; i++) {
            let subR = Math.floor(Math.random() * fan.length)
            let akaR = Math.floor(Math.random() * teach.length)
            let nbR = Math.floor(Math.random() * nb.length)
            tbody.innerHTML += `
            <tr>
                <td data-label="Fan">
                    <p> ${fan[subR]}</p>
                     </td>
                         <td data-label="Kredit">
                             ${kredit[Math.floor(Math.random() * kredit.length)]}
                         </td>
                        <td data-label="O'qituvchi">
                            <p>
                                 <span class="group">00${akaR}</span> group <br>
                                 <span class="teacher">${teach[akaR]}</span>
                             </p>
                          </td>
                         <td data-label="Davomat">
                             <a href="">${nb[nbR]}</a>
                          </td>
                         <td data-label="Amal">
                             <a href="" id="vazifalar"><i class="fa fa-copy"></i> Vazifalar</a>
                         </td>
                         <td data-label="Reja">
                             <a href="">
                                 <i class="fa fa-calendar"></i>
                             </a>
                         </td>
                     </tr>
            `        
            fan.splice(subR, 1);
            teach.splice(akaR, 1);
        }
    }
    place(teachers,kredits, subjects, nb)
}

table()