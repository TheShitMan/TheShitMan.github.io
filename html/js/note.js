window.addEventListener("load", () => {
    var myVideo = document.querySelector("#notevideo");
    var bofang = document.querySelector("#bofang");
    var kuaijin = document.querySelector("#kuaijin");
    var kuaitui = document.querySelector("#kuaitui");
    var yingjia = document.querySelector("#yingjia");
    var yingjian = document.querySelector("#yingjian");
    var jingying = document.querySelector("#jingying");
    var val = 5;

    console.log(bofang);
    bofang.addEventListener("click", () => {
        console.log("gfaf");
        if (myVideo.paused) {
            myVideo.play();
            bofang.children[0].innerHTML = "&#xe87a;";
        } else {
            myVideo.pause();
            bofang.children[0].innerHTML = "&#xe87c;";
        }
    })

    kuaijin.addEventListener("click", () => {
        myVideo.currentTime += val;
    })

    kuaitui.addEventListener("click", () => {
        myVideo.currentTime -= val;
    })

    yingjia.addEventListener("click", () => {
        myVideo.volume += 0.1;
    })

    yingjian.addEventListener("click", () => {
        myVideo.volume -= 0.1;
    })

    jingying.addEventListener("click", () => {
        if (myVideo.muted) {
            myVideo.muted = false;
            jingying.children[0].innerHTML = "&#xe676;";
        } else {
            myVideo.muted = true;
            jingying.children[0].innerHTML = "&#xe613;";
        }
    })

})