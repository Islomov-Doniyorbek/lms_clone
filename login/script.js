let auth = document.querySelector("#btn_auth");

auth.addEventListener("click", () => {
    let log = document.querySelector(".log");
    let password = document.querySelector(".password");

    let val = log.value;
    let lav = [];
    let nums = '';

    for (let i = 0; i < val.length; i++) {
        lav.push(val[i])
    }
    
    lav.forEach(e => {
        for (let i = 0; i < harflar_Kichik.length; i++) {
            if (e == harflar_Kichik[i]) {
                nums += i + 1;
            } else if (e == harflar_Katta[i]) {
                nums += i + 1;
            }          
        }
    });

    if (password.value == nums) {
        alert("Muvaffaqiyatli kirildi!")
    } else {
        alert("Noto'g'ri!!!")
    }
})

function hide() {
    let icon = document.querySelector(".bx i");
    let password = document.querySelector("#parol")

    icon.addEventListener("click", () => {
        icon.classList.toggle("fa-eye-slash");
        if (password.type === "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }
    })
}
hide()