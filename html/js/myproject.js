window.addEventListener("load", () => {
    var box = document.querySelector(".lunbo");
    console.log(box);
    var banners = document.querySelectorAll(".banner");
    var ol = box.querySelector("ol");
    var xia = document.querySelector(".xia");
    var currentIndex = 0;
    var index = 0;
    for (i = 0; i < banners.length; i++) {
        //创建节点
        var li = document.createElement('li');
        //自定义index属性作为索引
        li.setAttribute("index", i);
        //追加节点
        ol.appendChild(li);
        //初始化节点与轮播图的样式，使第一张图放在前面
        ol.children[currentIndex].style.backgroundColor = "red";
        banners[currentIndex].style.zIndex = "99";
        li.addEventListener("click", function() {
            //当点击的li不是当前活跃的li时，触发轮播效果
            index == currentIndex && (() => {
                //清除所有
                for (j = 0; j < ol.children.length; j++) {
                    ol.children[j].style.backgroundColor = "#fff";
                }
                //改变点击的li
                this.style.backgroundColor = "red";
                //获取点击li的索引
                index = this.getAttribute('index');
                //使得对应索引的轮播图上浮到当前轮播图的下面
                banners[index].style.zIndex = "9";
                index == currentIndex || (() => {
                    //给当前轮播图添加淡出的动态效果
                    banners[currentIndex].classList.add("chufa_1");
                    //淡出效果的时间应该比实际动画时间略短一点，否则会出现闪图的情况
                    setTimeout(function() {
                        // 将对应的轮播图呈现
                        banners[index].style.zIndex = "99";
                        //当前轮播图下沉
                        banners[currentIndex].style.zIndex = "0";
                        //移除动画，避免下次添加动画时不起作用
                        banners[currentIndex].classList.remove("chufa_1");
                        //对应index变成当前index
                        currentIndex = index;
                    }, 1150);
                })()
            })();
        })
    }
    //下一张图片按钮
    xia.addEventListener('click', function() {
        // console.log("index   " + index);
        // console.log("currentIndex    " + currentIndex);
        index == currentIndex && (() => {
            // console.log("index   " + index);
            //由于获取属性值的时候index变成了字符串所以必须要进行强转
            index = index != banners.length - 1 ? Number(index) + 1 : 0;
            // console.log(index);
            for (j = 0; j < ol.children.length; j++) {
                ol.children[j].style.backgroundColor = "#fff";
            }
            ol.children[index].style.backgroundColor = "red";
            banners[index].style.zIndex = "1";
            index == currentIndex || (() => {
                banners[currentIndex].classList.add("chufa_1");
                setTimeout(function() {
                    banners[index].style.zIndex = "99";
                    banners[currentIndex].style.zIndex = "0";
                    banners[currentIndex].classList.remove("chufa_1");
                    currentIndex = index;
                }, 1150);
            })()
        })();
    })

    //每三秒自动轮播一次
    var timer = setInterval(() => {
        //手动调用点击事件
        xia.click();
    }, 3000);

    //当鼠标在轮播盒子时停止自动轮播（mouseenter无冒泡效果mouseover具有冒泡效果）
    box.addEventListener("mouseover", function() {
        //清楚定时器
        clearInterval(timer);
        timer = null;
    })

    //当鼠标离开轮播盒子时开启自动轮播（mouseleave无冒泡效果 mouseout 具有冒泡效果）
    box.addEventListener("mouseleave", function() {
        timer = setInterval(() => {
            xia.click();
        }, 3000);
    })

})