//防抖函数--解决refresh非常频繁的问题
export function debounce(func,delay){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            func.apply(this,args)
        },delay)
    }
}