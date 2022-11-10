export function animate(obj, target, back) {
  // 给不同的元素添加不同的定时器 obj.timer 
  clearInterval(obj.timer)
  obj.timer = setInterval(function () {
    // 解决盒子位置不能完全到位的问题
    var step = (target - obj.offsetLeft) / 20;   //向上取整
    step = step > 0 ? Math.ceil(step) : Math.floor(step)
    if (obj.offsetLeft >= target) {
      clearInterval(obj.timer)
      // if (back) {
      //     back()
      // }
      back && back()
    } else {
      obj.style.left = obj.offsetLeft + step + 'px'
    }
  }, 15)
}