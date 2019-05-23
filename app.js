require('./index.scss')
//获取屏幕宽度
let htmlWidth=document.documentElement.clientWidth || document.body.clienWidth;

//获取html的dom
let htmlDom=document.getElementsByTagName('html')[0];

//设置html的fontsize
htmlDom.style.fontSize=(htmlWidth/10)+'px'

//动态设置
window.addEventListener('resize',(e)=>{
    htmlDom.style.fontSize=(htmlWidth/10)+'px'
})