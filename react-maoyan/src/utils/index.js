
//防抖
export const useDebounce=(fn, wait=1000)=> {
    var timer = null;
    return function () {
        var context = this
        var args = arguments
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(function () {
            fn.apply(context, args)
        }, wait)
    }
}