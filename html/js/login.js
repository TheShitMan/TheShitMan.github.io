window.addEventListener("load", () => {
    var step_text = document.querySelector("h1");
    var text = "迎来到我的个人博客，抓紧登陆吧，一起来关注我吧";
    var currentText = "";
    var i = 0;
    var timer = setInterval(() => {
        if (i >= text.length) {
            step_text.innerHTML = "欢";
            i = 0;
        } else {
            currentText = step_text.innerText + text[i++];
            step_text.innerHTML = currentText;
        }
    }, 500);


    var password = document.getElementById("password");
    var eye = document.getElementById("eye");
    var flag = 0;
    eye.addEventListener("click", function() {
        if (flag == 0) {
            password.type = "text";
            eye.src = "../images/register/open.png";
            flag = 1;
        } else {
            password.type = "password";
            eye.src = "../images/register/close.png";
            flag = 0;
        }
    });

    var username = document.querySelector("#username");
    var password = document.getElementById("password");
    var denglu = document.querySelector("#denglu");
    var message = document.querySelector("#message");
    denglu.addEventListener("click", (e) => {
        e.preventDefault();
        if (username.value == "html5kc" && password.value == "123456") {
            window.location.href = "index.html";
        } else {
            message.innerHTML = "账户名或密码错误";
        }
    })

    // denglu.onclick = function(e) {
    //     console.log("fsfsd");
    //     e.preventDefault();
    //     if (username.value == "html5kc" && password.value == "123456") {
    //         window.location.href = "index.html";
    //     } else {
    //         messge.innerHTML = "账户名或密码错误";
    //     }
    // }

})