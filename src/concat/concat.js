"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var PROJECTS = [// {
  //     title: "Beat Poems",
  //     img: "./assets/images/poems.png",
  //     meta: "Poems and Natural Language Processing",
  //     description: "A single page app that makes your poems a little less ordinary. Input a poem and Bongo Cat will do its own spin on your material. Then let Bongo Cat read it aloud, accompanied with some sweet bongos.",
  //     demo: null,
  //     active: "https://christianmkastner.com/beat-poems/",
  //     github: {
  //         frontend: 'https://github.com/christiankastner/beat-poems',
  //     },
  //     tags: ["JavaScript", "Webpack", "Babel", "SASS", "SVG", "Adobe Illustrator"]
  // },
  // {
  //     title: "Virtual Canvas",
  //     img: "./assets/images/virtual_canvas.png",
  //     meta: "Interactive Audio Visualizer",
  //     description: "A shared space for audio and visual artists to create on the same canvas simultaneously. By combining animation and audio in the browser with P5.js, UI state management with React Redux, and websocketing using ActionCable in rails, Virtual Canvas allows users to create shapes synced to audio and collaborate on a music visualizer together.",
  //     demo: "https://www.youtube.com/embed/qsTvRDrYrx0",
  //     active: "https://christianmkastner.com/virtual-canvas/#/",
  //     github: {
  //         frontend: 'https://github.com/christiankastner/virtual-canvas',
  //         backend: 'https://github.com/christiankastner/virtual_canvas_backend_api'
  //     },
  //     tags: ["React", "Ruby on Rails", "Web Sockets", "Redux", "SASS", "Firebase Cloud Storage"]
  // },
  // {
  //     title: "Kangaroo Hangout",
  //     img: "./assets/images/hangout.png",
  //     meta: "Event Planning App",
  //     description: "Want to plan a whole day's outing? Kangaroo Hangout is an event planning app that lets user's input places they'd like to go to, then search for nearby locations to also visit. Want Sushi after your Muay Thai class or a library near your favorite burger place? That's easy with kangaroo hangout.",
  //     demo: "https://www.youtube.com/embed/iZrBZusBhJQ",
  //     active: 'https://christianmkastner.com/kangaroo-hangout-frontend/#/',
  //     github: {
  //         frontend: 'https://github.com/christiankastner/kangaroo-hangout-frontend',
  //         backend: 'https://github.com/christiankastner/kangaroo-hangout-backend-api'
  //     },
  //     tags: ["React", "Ruby on Rails", "JWT", "Google Places API", "Semantic UI"]
  // },
];
var SKILLS = {
  "Tech": ["React", "Redux", "Javascript", "HTML5", "CSS3", "SASS/SCSS", "Jest", "Gulp", "Webpack", "Rails", "ActionCable", "Ruby", "Python", "MySQL", "PostgreSQL", "Heroku", "Git & Github"],
  "Data": ["R", "Matlab", "SciKit Learn", "Pandas", "Matplotlib", "Numerical Analysis"],
  "Creative": ["Photoshop", "Illustrator", "XD", "Lightroom", "P5.js", "Mo.js", "Processing in Java"]
};

var renderDemo = function renderDemo(url) {
  if (url == null) return "";
  var iframe = document.createElement("div");
  iframe.className = "responsive";
  iframe.innerHTML = "<iframe width=\"560\" height=\"315\" src=\"".concat(url, "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"\"></iframe>");
  return iframe;
};

var renderLinks = function renderLinks() {
  var _ul;

  ul = document.createElement("ul");
  ul.className = "links";

  for (var _len = arguments.length, links = new Array(_len), _key = 0; _key < _len; _key++) {
    links[_key] = arguments[_key];
  }

  var newArray = links.filter(function (x) {
    return x;
  }).map(function (x) {
    link = document.createElement("li");
    link.append(x);
    return link;
  });

  (_ul = ul).append.apply(_ul, _toConsumableArray(newArray));

  return ul;
};

function get(element) {
  return document.getElementById(element);
}

document.addEventListener('DOMContentLoaded', function () {
  var open = get("menu-btn");
  var nav = get("nav");
  open.addEventListener('click', function () {
    nav.classList.toggle('open-nav');
  });
  nav.addEventListener('click', function () {
    nav.classList.toggle('open-nav');
  });
  var about = document.getElementById("text-card");
  var projectList = document.getElementById("project-list");
  var skillList = document.getElementById("skill-list"); // Populate about section

  (function () {
    ABOUT.map(function (paragraph) {
      var p = document.createElement("p");
      p.innerText = paragraph;
      about.appendChild(p);
    });
  })(); // Populate project list


  (function () {
    PROJECTS.map(function (project) {
      li = document.createElement("li");
      li.className = "project-card";
      img = document.createElement("img");
      img.src = project.img;
      img.alt = "".concat(project.title, " picture");
      div = document.createElement("div");
      div.className = "project-header";
      h3 = document.createElement("h3");
      h3.innerText = project.title;
      h4 = document.createElement("h4");
      h4.innerText = project.meta;
      demo = document.createElement("a");
      demo.innerText = "Live Site" || "Not Deployed, Currently Developing";

      if (project.active) {
        demo.href = project.active;
      }

      frontend = document.createElement("a");
      project.github.frontend ? frontend.innerText = "Frontend" : "";
      frontend.href = project.github.frontend;
      backend = document.createElement("a");
      project.github.backend ? backend.innerText = "Backend" : backend.href = project.github.backend;
      links = renderLinks(demo, frontend, backend);
      gradient = document.createElement("div");
      gradient.className = "gradient";
      div.append(h3, h4, links);
      tags = document.createElement("div");
      tags.innerHTML = project.tags.map(function (x) {
        return "<span>" + x + "</span>";
      }).join(" - ");
      tags.classList.add("tags");
      var p = document.createElement("p");
      p.innerText = project.description;
      iframe = renderDemo(project.demo);
      container = document.createElement("div");
      container.className = "text-container";
      container.append(iframe);
      li.append(img, div, p, container, tags, gradient);
      projectList.appendChild(li);
    });
  })(); // Populate Skills


  (function () {
    for (var title in SKILLS) {
      var _li = document.createElement("li");

      var _h = document.createElement("h4");

      _h.innerText = title;
      var p = document.createElement("p");
      p.innerText = SKILLS[title].join(", ");

      _li.append(_h, p);

      skillList.appendChild(_li);
    }
  })();
});