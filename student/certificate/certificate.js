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


function ariza() {
    let tbody = document.querySelector(".table tbody");
    
    let type = [
        "Akademik ma'lumotnoma", "O'qish joyidan ma'lumotnoma"
    ]
    let qayer = [
        "Mahalla", "Harbiy xizmat", "Temir yo'llari", "Aviakassa", "Ish joyiga", "Litsey", "Kollej", "Kutubxona", "Maktab", "Talabalar turar joyi", "Passport stoli"
    ]
    function place(type, qayer) {
        for (let i = 0; i < 1; i++) {
            let qr = Math.floor(Math.random() * qayer.length)
            let tr = Math.floor(Math.random() * type.length);
            let id = Math.floor(Math.random() * (50000 - 10000 + 1) + 10000);
            tbody.innerHTML += `
            <tr>
                <td data-label="ID">
                    <p>${id}</p>
                     </td>
                         <td data-label="Turi">
                             <p>${type[tr]}</p>
                         </td>
                        <td data-label="Qayer">
                                 <p>${qayer[qr]}</p>                             
                          </td>
                         <td data-label="Status">
                            <button> Navbatda </button>
                          </td>
                         
                         </td>
                     </tr>
            `        
        }

    }
    place(type, qayer)
    
    let arizabtn = document.querySelector("#addAriza");

    arizabtn.onclick = () => {
        let body = document.querySelector("body");
        let zayavka = document.createElement("div");
        zayavka.className = "zayavka";
        let h3 = document.createElement("h3");
        h3.className = "title-ariza";
        h3.innerText = "Ariza berish";
        h3.style.color = "#1d2d5b";
        
        let select1 = document.createElement("select");
        // select1.innerHTML = `<option value="Qayerga">Qayerga</option>`
        for (let i = 0; i < qayer.length; i++) {
            select1.innerHTML += `
            <option value="${qayer[i]}">${qayer[i]}</option>                    
            `
        };

        let select2 = document.createElement("select");
        select2.innerHTML = `
                    <option value="Akademik ma'lumotnoma">Akademik ma'lumotnoma</option>
                    <option value="O'qish joyidan ma'lumotnoma">O'qish joyidan ma'lumotnoma</option>                    
                `;
        let button1 = document.createElement("button");
        let button2 = document.createElement("button");
        button1.innerText = "Bekor qilish";
        button2.innerText = "Yaratish";
        let buttons = document.createElement("div");
        buttons.className = "buttons";
        buttons.appendChild(button1)
        buttons.appendChild(button2)
        
        zayavka.appendChild(h3);
        zayavka.appendChild(select2)
        zayavka.appendChild(select1)
        zayavka.appendChild(buttons)
        body.appendChild(zayavka);

        button1.onclick = () => {
            zayavka.style.display = "none";
        }
        button2.onclick = () => {
            let id = Math.floor(Math.random() * (50000 - 10000 + 1) + 10000);
            tbody.innerHTML += `
            <tr>
                <td data-label="ID">
                    <p>${id}</p>
                     </td>
                         <td data-label="Turi">
                             <p>${select1.value}</p>
                         </td>
                        <td data-label="Qayer">
                                 <p>${select2.value}</p>                             
                          </td>
                         <td data-label="Status">
                            <button> Navbatda </button>
                          </td>
                         
                         </td>
                     </tr>
            `;
            zayavka.style.display = "none";
        }

    }

}

ariza()