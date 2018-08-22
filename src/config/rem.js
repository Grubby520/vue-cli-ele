/**
 * 动态控制根节点字体大小
 */
(function(doc, win){
    let docEl = doc.documentElement,
        resizeFn = 'orientationchange' in window ? 'orientationchange' : 'resize', // 事件，兼容移动设备翻转反向
        docFn = function(){
            let clientWidth = docEl.clientWidth; // 设置宽度
            if(!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
        if(!doc.addEventListener) return;
        win.addEventListener(resizeFn, docFn, false); // 冒泡阶段执行
        doc.addEventListener('DOMContentLoaded', docFn, false); // html加载并解析完成后即使
})(document, window)