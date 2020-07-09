"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var PROJECTS=[],SKILLS={Tech:["React","Redux","Javascript","HTML5","CSS3","SASS/SCSS","Jest","Gulp","Webpack","Rails","ActionCable","Ruby","Python","MySQL","PostgreSQL","Heroku","Git & Github"],Data:["R","Matlab","SciKit Learn","Pandas","Matplotlib","Numerical Analysis"],Creative:["Photoshop","Illustrator","XD","Lightroom","P5.js","Mo.js","Processing in Java"]},renderDemo=function(e){if(null==e)return"";var t=document.createElement("div");return t.className="responsive",t.innerHTML='<iframe width="560" height="315" src="'.concat(e,'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>'),t},renderLinks=function(){var e;ul=document.createElement("ul"),ul.className="links";for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=n.filter(function(e){return e}).map(function(e){return link=document.createElement("li"),link.append(e),link});return(e=ul).append.apply(e,_toConsumableArray(a)),ul};function get(e){return document.getElementById(e)}document.addEventListener("DOMContentLoaded",function(){var e=get("menu-btn"),t=get("nav");e.addEventListener("click",function(){t.classList.toggle("open-nav")}),t.addEventListener("click",function(){t.classList.toggle("open-nav")});var n=document.getElementById("text-card"),r=document.getElementById("project-list"),a=document.getElementById("skill-list");ABOUT.map(function(e){var t=document.createElement("p");t.innerText=e,n.appendChild(t)}),PROJECTS.map(function(e){li=document.createElement("li"),li.className="project-card",img=document.createElement("img"),img.src=e.img,img.alt="".concat(e.title," picture"),div=document.createElement("div"),div.className="project-header",h3=document.createElement("h3"),h3.innerText=e.title,h4=document.createElement("h4"),h4.innerText=e.meta,demo=document.createElement("a"),demo.innerText="Live Site",e.active&&(demo.href=e.active),frontend=document.createElement("a"),e.github.frontend&&(frontend.innerText="Frontend"),frontend.href=e.github.frontend,backend=document.createElement("a"),e.github.backend?backend.innerText="Backend":backend.href=e.github.backend,links=renderLinks(demo,frontend,backend),gradient=document.createElement("div"),gradient.className="gradient",div.append(h3,h4,links),tags=document.createElement("div"),tags.innerHTML=e.tags.map(function(e){return"<span>"+e+"</span>"}).join(" - "),tags.classList.add("tags");var t=document.createElement("p");t.innerText=e.description,iframe=renderDemo(e.demo),container=document.createElement("div"),container.className="text-container",container.append(iframe),li.append(img,div,t,container,tags,gradient),r.appendChild(li)}),function(){for(var e in SKILLS){var t=document.createElement("li"),n=document.createElement("h4");n.innerText=e;var r=document.createElement("p");r.innerText=SKILLS[e].join(", "),t.append(n,r),a.appendChild(t)}}()});