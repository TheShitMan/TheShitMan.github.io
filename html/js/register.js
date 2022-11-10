window.addEventListener("load", () => {
    var username = document.querySelector("#username");
    var messge = document.querySelector("#message");
    var usernameCheck = false;
    username.addEventListener("blur", () => {
        console.log("失去焦点");
        var username_text = username.value;
        var reg_username = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/;
        reg_username.test(username_text) ? (() => {
            console.log("用户名校验成功");
            messge.innerHTML = "";
            username.style.border = "1px solid green";
            username.style.backgroundColor = "rgba(5, 133, 5, .5)";
            usernameCheck = true;
        })() : (() => {
            console.log("有户名校验失败");
            // console.log(username.parentNode.children.length);
            // username.parentNode.children.length == 1 && (() => {
            //     var resulte = document.createElement("span");
            //     resulte.innerHTML = "用户名不对";
            //     username.parentNode.insertBefore(resulte, username.nextSibling);
            //     resulte.style.color = "red";
            // })();
            // alert("用户名应大于6小于10，且由大小写字母与数字组成");
            messge.innerHTML = "用户名应大于6小于10，且由大小写字母与数字组成";
            username.style.border = "1px solid red";
            username.style.backgroundColor = "rgba(195, 6, 6, 0.5)";
            usernameCheck = false;
        })();
    });

    var password = document.querySelector("#password");
    var password_text;
    var passwordCheck = false;
    password.addEventListener("blur", () => {
        password_text = password.value;
        //固定六位到十位字符密码包含大小写字母与数字的组合
        var reg_password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/;
        reg_password.test(password_text) ? (() => {
            messge.innerHTML = "";
            password.style.border = "1px solid green";
            password.style.backgroundColor = "rgba(5, 133, 5, .5)";
            passwordCheck = true;
        })() : (() => {
            // alert("用户名应大于6小于10，且由大小写字母与数字组成");
            messge.innerHTML = "密码应大于6小于10，且由大小写字母与数字组成";
            password.style.border = "1px solid red";
            password.style.backgroundColor = "rgba(195, 6, 6, 0.5)";
            passwordCheck = false;
        })();
    });

    var password2 = document.querySelector("#password2");
    var password2Check = false;
    password2.addEventListener("blur", () => {
        var password_text2 = password2.value;
        password_text2 == password_text && password_text2 != "" ? (() => {
            messge.innerHTML = "";
            password2.style.border = "1px solid green";
            password2.style.backgroundColor = "rgba(5, 133, 5, .5)";
            password2Check = true;
        })() : (() => {
            // alert("密码不一致");
            if (password_text2 != "") {
                messge.innerHTML = "密码不一致";
            } else {
                messge.innerHTML = "密码不能为空";
            }
            password2.style.border = "1px solid red";
            password2.style.backgroundColor = "rgba(195, 6, 6, 0.5)";
            password2Check = false;
        })();

    });

    var email = document.querySelector("#email");
    var emailCheck = false;
    email.addEventListener("blur", () => {
        var email_text = email.value;
        var emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        emailReg.test(email_text) ? (() => {
            messge.innerHTML = "";
            email.style.border = "1px solid green";
            email.style.backgroundColor = "rgba(5, 133, 5, .5)";
            emailCheck = true;
        })() : (() => {
            messge.innerHTML = "请填写正确的邮箱格式";
            email.style.border = "1px solid red";
            email.style.backgroundColor = "rgba(195, 6, 6, 0.5)";
            emailCheck = false;
        })();
    })

    var congzhi = document.querySelector("#congzhi");
    congzhi.addEventListener("click", () => {
        // location.reload();
        //重置样式
        messge.innerHTML = "";
        username.style.border = "1px solid #767676";
        username.style.backgroundColor = "rgba(126, 163, 215, .8)";
        password.style.border = "1px solid #767676";
        password.style.backgroundColor = "rgba(126, 163, 215, .8)";
        password2.style.border = "1px solid #767676";
        password2.style.backgroundColor = "rgba(126, 163, 215, .8)";
        email.style.border = "1px solid #767676";
        email.style.backgroundColor = "rgba(126, 163, 215, .8)";
    });


    var register = document.querySelector("#register");
    register.onsubmit = function(e) {
        // console.log(usernameCheck);
        // console.log(passwordCheck);
        // console.log(password2Check);
        // console.log(emailCheck);
        // return usernameCheck && passwordCheck && password2Check && emailCheck;
    }

    var tijiao = document.querySelector("#tijiao");
    tijiao.onclick = function(e) {
        e.preventDefault();
        if (usernameCheck && passwordCheck && password2Check && emailCheck) {
            console.log("fjafjld");
            window.location.href = "login.html";
        }
    }
})