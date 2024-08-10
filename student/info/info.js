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


function info() {
    let fish = document.querySelector("#fish"),
        birht = document.querySelector("#birth"),
        reyting = document.querySelector("#reyting"),
        address = document.querySelector("#address"),
        type = document.querySelector("#type"),
        guruh = document.querySelector("#guruh"),
        tutor = document.querySelector("#tutor"),
        stipend = document.querySelector("#stipend"),
        img = document.querySelector(".img");
    let region = [
        "Andijon viloyati", "Namangan viloyati", "Farg'ona viloyati", "Sirdaryo viloyati", "Jizzax viloyati", "Samarqand viloyati", "Qashqadaryo viloyati","Surxondaryo viloyati","Buxoro viloyati", "Navoiy viloyati","Xorazm viloyati","Qoraqalpog'iston Respublikasi","Toshkent shahri", "Toshkent viloyati"
    ]
    let mahalla = [
        "Gulbog'","Karmon","O'zbekiston", "G'elon","Oqtosh", "Yuksalish", "Niyozbosh","Eski Qovunchi", "Xalqobod", "Oxunboboyev","Tinchlik","Said Ota", "Quyoshli","Gulbahor","Shirin","Boyovut","O'rtaovul", "G'alaba", "Turkiston"
    ]
    let rasmlar = [
        "/img/ananas.jpg",
        "/img/anor.jpg",
        "/img/apple.png",
        "/img/banana.jpg",
        "/img/carrot.jpg",
        "/img/cherry.jpg",
        "/img/eggplant.jpg",
        "/img/garlic.jpg",
        "/img/limon.jpg",
        "/img/onion.jpg",
        "/img/orik.jpg",
        "/img/pear.jpg",
        "/img/potato.jpg",
        "/img/qovoq.jpg",
        "/img/tarvuz.jpg",
        "/img/tomato.jpg",
    ]
    let reytings = [
        "24012-23", "24112-23","25612-23","24016-23","24115-23","24013-23","24114-23"
    ]
    let guruhs = [240, 241, 250, 20, 241, 240, 251, 263, 220, 212];
    let yil = [2005, 2005, 2004, 2005, 2004, 2004, 2005, 2006, 2004, 2005]
    let tur = [
        "Multimedia", "Sun'iy Intellekt", "Kompyuter injiniring","AT-Servis", "Mexatronika"
    ]
    let stip = ["Bor", "Yo'q"];
    let tutors = [
        "Mamatkulov Diyor", "Kamalov Bekzod", "Berdimuhamedov Sardor","Ziyayev Shahzod", "Tillayev Uchqun"
    ]
    let rr = Math.floor(Math.random() * region.length);
    let rm = Math.floor(Math.random() * mahalla.length);
    let rp = Math.floor(Math.random() * rasmlar.length);
    let rrr = Math.floor(Math.random() * reytings.length);
    let rst = Math.floor(Math.random() * stip.length);
    let rtt = Math.floor(Math.random() * tutors.length);
    let ry = Math.floor(Math.random() * tur.length);
    let rg = Math.floor(Math.random() * guruhs.length);
    let ryil = Math.floor(Math.random() * yil.length);
    let rkun = Math.floor(Math.random() * (30 - 1 + 1) + 1);
    let roy = Math.floor(Math.random() * (12 - 1 + 1) + 1);    

    fish.innerHTML = savedData;
    birht.innerHTML = `${rkun}-${roy}-${yil[ryil]}`;
    reyting.innerHTML = reytings[rrr];
    address.innerHTML = `${region[rr]}, ${mahalla[rm]} mahallasi`
    type.innerHTML = tur[ry];
    guruh.innerHTML = guruhs[rg];
    tutor.innerHTML = tutors[rtt];
    stipend.innerHTML = stip[rst];
    img.src = rasmlar[rp]

}

info()