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


function row() {
    let tbody = document.querySelector(".table tbody");
    let calculator = document.querySelector(".calculator");


    let nums = [1, 2, 2, 1, 3, 3, 4, 5];
    let rn = Math.floor(Math.random() * nums.length);

    let fanlar = [
        "Hisob", "Dasturlash 1", "Dasturlash 2", "Fizika 1", "Fizika 2", "Diskret tuzilmalari", "Falsafa", "Ingliz tili 1", "Ingliz tili 2", "Dinshunoslik", "O'zbekistonning eng yangi tarixi", "Akademik yozuv", "Kompyuter tashkillashtirish", "Ma'lumotlar tuzilmasi va algoritmlash", "Sun'iy intellekt asoslari", "Kiberxavfsizlik asoslari", "Elektronika va sxemalari", "Ehtimollar statistikasi"
    ]
    let kredit = [4,4,4,4,4,4,4,4,6,6,6]

    for (let i = 0; i < nums[rn]; i++){
        let rf = Math.floor(Math.random() * fanlar.length);
        let rk = Math.floor(Math.random() * kredit.length);
        tbody.innerHTML += `
        <tr>
            <td>${fanlar[rf]}</td>
            <td>${kredit[rk]}</td>
            <td><button id="tanlash" type="button" data-kredit="${kredit[rk]}">Tanlash</button></td>
        </tr>
        `
        fanlar.splice(fanlar[rf], 1)
    }

    let btns = document.querySelectorAll("#tanlash");
    let summa = 0;
    btns.forEach(e => {
        e.onclick = () => {
            e.classList.toggle("bg")
            if (e.innerText == "Bekor qilish") {
                e.innerText = "Tanlash";
                let kr = Number(e.parentElement.parentElement.querySelectorAll("td")[1].innerHTML);
                summa -= kr;
                
                calculator.innerHTML = `<span>Jami: </span> <b id="total">${summa * 118199} so'm</b> `
            } else {
                let kr = Number(e.parentElement.parentElement.querySelectorAll("td")[1].innerHTML);
                summa += kr;
                
                calculator.innerHTML = `<span>Jami: </span> <b id="total">${summa * 118199} so'm</b><br><br><button id=\"oplata\">To'lov</button>`
                console.log(summa);
                e.innerText = "Bekor qilish";
            }
        }

    })

}
row()