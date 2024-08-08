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
        "Sun'iy intellekt asoslari", "Kiberxavfsizlik asoslari", "Ma'lumotlar tuzilmasi va algoritmlash", "Elektronika va sxemalar", "Kompyuter tashkillashtirish"
    ]
    let teachers = [
        "Soliyev Barat Khanturayev", "Nestrov Gabriel Kamalovich", "Qahhorov Zohid Musayevich", "Lutfullayeva Sanobar Munirbayevna", "Rashidov Radik Kutlimuradovich", "Damirova Farida Hamzayevna", "Asadullayev Nodir Botirovich", "Yuriyeva Galina Kuramshina","Valiyev Shamsiddin Alibekovich", "Qilichov Bekzod Jumayevich", "Muhammadkarimova Munavvar Kudratullayevna","Maratov Ruslan Maksimov", "Bo'riboyev Yunus Karabayevich"
        
    ]
    let kredits = [4, 6, 6, 4, 8]
    let nb = [0,0,0,1,1,2,3,4,5,6,7,8]
    function place(teach, kredit, nb) {
        for (let i = 0; i < 5; i++) {
            let akaR = Math.floor(Math.random() * teach.length)
            let nbR = Math.floor(Math.random() * nb.length)
            tbody.innerHTML += `
            <tr>
                <td data-label="Fan">
                    <p id=\"fann\"> ${subjects[i]}</p>
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
                             <a href="/student/mening fanlarim/vazifalar/vazifalar.html" id="vazifalar"><i class="fa fa-copy"></i> Vazifalar</a>
                         </td>
                         <td data-label="Reja">
                             <a href="">
                                 <i class="fa fa-calendar"></i>
                             </a>
                         </td>
                     </tr>
            `        
            teach.splice(akaR, 1);
        }

    }
    place(teachers, kredits, nb)
    
}

table()