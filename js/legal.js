(function(){
var links=[].slice.call(document.querySelectorAll(".toc a"));
if(!links.length)return;
function id(a){return a.getAttribute("data-to")||a.getAttribute("href").slice(1)}
function spy(){
var cur=null;
links.forEach(function(a){var el=document.getElementById(id(a));if(el&&el.offsetParent!==null&&el.getBoundingClientRect().top<150)cur=a});
links.forEach(function(a){a.classList.toggle("active",a===cur)});
}
window.addEventListener("scroll",spy,{passive:true});
window.addEventListener("hashchange",function(){setTimeout(spy,60)});
spy();
})();