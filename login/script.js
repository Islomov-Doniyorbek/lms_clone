let auth = document.querySelector("#btn_auth");

auth.onclick = () => {
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

    localStorage.setItem("savedData", val);
    let a = auth.querySelector("a")
    if (password.value == nums) {
        password.style.border = "1.6px solid lime";
        setTimeout(() => {
            window.location.href = "/dashboard/dash.html"
        }, 1500);
    } else {
        password.style.border = "1.6px solid red";
    }

}

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