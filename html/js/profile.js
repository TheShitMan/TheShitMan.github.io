window.addEventListener("load", function() {
    var nav_lis = document.querySelector("nav").querySelectorAll("li");
    var contents = document.querySelector(".content").children;
    // console.log(nav_lis);
    nav_lis[0].style.backgroundColor = "blue";
    for (let i = 0; i < nav_lis.length; i++) {
        nav_lis[i].addEventListener("click", function() {
            console.log(i);
            for (let j = 0; j < contents.length; j++) {
                contents[j].style.display = "none";
                nav_lis[j].style.backgroundColor = "";
            }
            contents[i].style.display = "block";
            nav_lis[i].style.backgroundColor = "blue";
        })
    };

})