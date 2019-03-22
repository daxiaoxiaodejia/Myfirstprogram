var timerId = null;
function move (element, target) {
    // 为了避免抖动问题，可以在新定时器开启前，先清除旧的定时器
    //  - 可以确保每个元素的运动只由单个定时器控制
    clearInterval(timerId); // 当传入给clearInterval的Id无效时，操作会被忽略。
    timerId = setInterval(function () {
        // 1 实时获取元素当前位置
        var current = element.offsetTop;
        console.log(current)
        //  offsetLeft获取样式时会进行四舍五入
        //   - 例如，元素当前left实际为396.49
        //      - offsetLeft取值为396
        //      - 计算后的step为0.4
        //      - 又给left设置了396.4
        //      - 但是元素其实已经在396.4的位置了，所以不会动
       
        // 2 设置每次运动的步长
        //   - 变速运动的步长设置公式： (目标位置 - 当前位置) / 10
        var step = (target - current) / 10;
        //   - 为了避免offsetLeft取值的问题，我们可以对step进行取整
        //      - 确保元素每次至少运动1px
        //      - 根据step的正负分别设置向上取整和向下取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // 3 设置运动公式，计算新位置 = 当前位置 + 步长
        current = current + step;
        // 4 设置给元素的样式，进行移动
        element.style.top = current + 'px';
        // 5 当元素到达目标位置时，清除定时器
        if (current === target) {
            clearInterval(timerId);
        }
    }, 30);
}