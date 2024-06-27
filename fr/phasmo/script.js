function openNav() {
    var sidebar = document.getElementById("mySidebar");
    var f = document.getElementById("filtres");
    var s = document.getElementById("santem");
    sidebar.style.width = "250px";
    f.style.display = "inline"
    s.style.display = "block";
}
  
  function closeNav() {
    var sidebar = document.getElementById("mySidebar");
    var f = document.getElementById("filtres");
    var s = document.getElementById("santem");
    f.style.display = "none";
    s.style.display = "none";
    sidebar.style.width = "0";
}

window.addEventListener("DOMContentLoaded", (event) => {
    var sidebar = document.getElementById("mySidebar");
    sidebar.style.width = "0";
    const sm35 = document.querySelector("#csm35");
    if (sm35) {
        sm35.addEventListener("change", () => {
            var ombre = document.getElementById("ombre")
            if (sm35.checked) {
                ombre.style.display = "block";
            }
            else {
                ombre.style.display = "none";
            }
        })
    }

    const checkbox40 = document.querySelector("#csm40");
    if (checkbox40) {
        checkbox40.addEventListener("change", () => {
            var listesm40 = document.getElementsByClassName("sm40")
            var len40 = listesm40.length
            if (checkbox40.checked) {
                for (let i = 0; i < len40; i++) {
                    listesm40[i].style.display = "block";
                }
            }
            else {
                for (let i = 0; i < len40; i++) {
                    listesm40[i].style.display = "none";
                }
            }
        })
    }

    const checkbox50 = document.querySelector("#csm50");
    if (checkbox50) {
        checkbox50.addEventListener("change", () => {
            var listesm50 = document.getElementsByClassName("sm50")
            var len50 = listesm50.length
            if (checkbox50.checked) {
                for (let i = 0; i < len50; i++) {
                    listesm50[i].style.display = "block";
                }
            }
            else {
                for (let i = 0; i < len50; i++) {
                    listesm50[i].style.display = "none";
                }
            }
        })
    }

    const checkbox60 = document.querySelector("#csm60");
    if (checkbox60) {
        checkbox60.addEventListener("change", () => {
            var listesm60 = document.getElementsByClassName("sm60")
            var len60 = listesm60.length
            if (checkbox60.checked) {
                for (let i = 0; i < len60; i++) {
                    listesm60[i].style.display = "block";
                }
            }
            else {
                for (let i = 0; i < len60; i++) {
                    listesm60[i].style.display = "none";
                }
            }
        })
    }

    const checkbox65 = document.querySelector("#csm65");
    if (checkbox65) {
        checkbox65.addEventListener("change", () => {
            var listesm65 = document.getElementsByClassName("sm65")
            var len65 = listesm65.length
            if (checkbox65.checked) {
                for (let i = 0; i < len65; i++) {
                    listesm65[i].style.display = "block";
                }
            }
            else {
                for (let i = 0; i < len65; i++) {
                    listesm65[i].style.display = "none";
                }
            }
        })
    }

    const checkbox70 = document.querySelector("#csm70");
    if (checkbox70) {
        checkbox70.addEventListener("change", () => {
            var listesm70 = document.getElementsByClassName("sm70")
            var len70 = listesm70.length
            if (checkbox70.checked) {
                for (let i = 0; i < len70; i++) {
                    listesm70[i].style.display = "block";
                }
            }
            else {
                for (let i = 0; i < len70; i++) {
                    listesm70[i].style.display = "none";
                }
            }
        })
    }

    const checkbox75 = document.querySelector("#csm75");
    if (checkbox75) {
        checkbox75.addEventListener("change", () => {
            var listesm75 = document.getElementsByClassName("sm75")
            var len75 = listesm75.length
            if (checkbox75.checked) {
                for (let i = 0; i < len75; i++) {
                    listesm75[i].style.display = "block";
                }
            }
            else {
                for (let i = 0; i < len75; i++) {
                    listesm75[i].style.display = "none";
                }
            }
        })
    }
});
