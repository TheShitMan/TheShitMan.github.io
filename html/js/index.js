window.addEventListener("load", () => {
    var box3 = document.querySelector(".box3");
    window.onscroll = function(e) {
        //获取视口高宽
        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        //获取盒子距离视口底部的距离
        var juli = h - box3.getBoundingClientRect().top;
        // console.log(juli);
        // console.log(box3.childNodes.length);
        if (juli > 10) {
            for (i = 0; i < box3.children.length; i++) {
                box3.children[i].classList.add("chufa3");
            }
        }
    }
})