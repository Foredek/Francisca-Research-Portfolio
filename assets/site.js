(function(){var n=document.getElementById("nav"),b=document.getElementById("mb");if(!n||!b)return;
function close(){n.classList.remove("open");b.setAttribute("aria-expanded","false")}
b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o?"true":"false")});
n.querySelectorAll(".menu a").forEach(function(a){a.addEventListener("click",close)});
document.addEventListener("keydown",function(e){if(e.key==="Escape")close()})})();
