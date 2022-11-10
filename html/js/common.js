window.addEventListener("load", function() {
    /**
     * header 生成
     */
    var tarbar = `<div class="tarbar">
    <a href="index.html">
        <div class="logo">Our Love</div>
    </a>
    <span class="iconfont icon-shoudie zhedie"></span>
    <ul>
        <li>
            <a href="index.html"><span class="iconfont icon-shouye"></span>首页</a>
        </li>
        <li>
            <a href="myproject.html">
                <span class="iconfont icon-xiangmu"></span> 项目
            </a>
        </li>
        <li>
            <a href="leave.html">
                <span class="iconfont icon-liuyan1"></span> 留言
            </a>
        </li>
        <li>
            <a href="note.html">
                <span class="iconfont icon-liuyan1"></span> 随笔
            </a>
        </li>
        <li>
            <a href="profile.html">
                <span class="iconfont icon-guanyuwomen"></span> 关于我
            </a>
        </li>
    </ul>
    <div class="tarbar_right">
        <a href="login.html"><button class="btn1">登录</button></a>
        <a href="register.html"><button class="btn2">注册</button></a>
    </div>
</div>`;
    var header = document.querySelector("header");
    header.innerHTML = tarbar;
    // console.log(header);
    var zhedie = document.querySelector(".zhedie");
    // console.log(zhedie.className);
    var flag = true;
    zhedie.addEventListener("click", () => {
        var menue = document.querySelector(".tarbar").querySelector("ul");
        // console.log(menue.style.display);
        if (flag) {
            menue.style.display = "block";
            flag = !flag;
        } else {
            menue.style.display = "none";
            flag = !flag;
        }

    });

    /**
     * footer生成
     */
    var footer_context = `<div class="footer">
     <div class="suoming">
         <dl>
             <dt>最新博客</dt>
             <dd>震惊！隔壁母猪突然失踪</dd>
         </dl>
         <dl>
             <dt>后台管理</dt>
             <dd><a href="shujukeshihua.html">数据可视</a></dd>
             <dd>系统登录</dd>
         </dl>
         <dl>
             <dt>联系我</dt>
             <dd>Email:8888888</dd>
             <dd>QQ:8888888</dd>
             <dd>weixin:8888888</dd>
         </dl>
         <dl>
             <dt>博客简介</dt>
             <dd>梦想还是要有的，万一实现了呢～</dd>
         </dl>
     </div>
     <span class="buttom_text">Copright©2020-2022 huaihauxueyuanjisuanjikexueyujishuxueyuan H5kechensheji</span>
 </div>`;

    var footer = document.querySelector("footer");
    footer.innerHTML = footer_context;


    /* 时间展示 开始*/
    var timer = document.querySelector(".timer");

    timer != null && (() => {
            function xignqiFormat(x) {
                var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
                return arr[x];
            }
            // console.log(timer);
            function getshijian() {
                var date = new Date();
                var year = date.getFullYear();
                timer.querySelector("#year1").innerHTML = Math.floor(year / 100);
                timer.querySelector("#year2").innerHTML = year % 100;
                var month = date.getMonth() + 1;
                var yue = month < 10 ? '0' + month : month;
                // console.log(yue);
                timer.querySelector("#yue").innerHTML = yue;
                var day = date.getDate();
                var ri = day < 10 ? '0' + day : day;
                timer.querySelector("#ri").innerHTML = ri;
                var hours = date.getHours();
                var hh = hours < 10 ? '0' + hours : hours;
                timer.querySelector("#hh").innerHTML = hh;
                var minutes = date.getMinutes();
                var mm = minutes < 10 ? '0' + minutes : minutes;
                timer.querySelector("#mm").innerHTML = mm;
                var seconds = date.getSeconds();
                var ss = seconds < 10 ? '0' + seconds : seconds;
                timer.querySelector("#ss").innerHTML = ss;
                if (hours < 12) {
                    timer.querySelector("#tishiyu").innerHTML = "早上好";
                } else if (hours < 18) {
                    timer.querySelector("#tishiyu").innerHTML = "下午好";
                } else {
                    timer.querySelector("#tishiyu").innerHTML = "晚上好";
                }

                var xingqi = date.getDay();
                // console.log(xignqiFormat(xingqi));
                timer.querySelector("#xingqi").innerHTML = xignqiFormat(xingqi);
            };
            getshijian();
            this.setInterval(getshijian, 1000);

            var cha = timer.querySelector("#cha");
            cha.addEventListener("click", function() {
                console.log("cha");
                timer.style.display = "none";
            });
        })()
        /*时间展示 结束 */
})
