window.addEventListener("load", () => {
    var text = document.querySelector("#liuyan");
    var but = document.querySelector("#fabiao");
    var ul = document.querySelector('#liuyan_message');
    but.addEventListener("click", (e) => {
        e.preventDefault();
        if (text.value == '') {
            alert('请输入文字');
            return;
        } else {
            var li = document.createElement('li');
            li.innerHTML = text.value + '<a href="javascript:;">删除</a>';
            ul.insertBefore(li, ul.children[0]);
            text.value = '';
            var as = document.querySelectorAll('a');
            for (var i = 0; i < as.length; i++) {
                as[i].onclick = function() {
                    ul.removeChild(this.parentNode);
                }
            }
        }
    })
})