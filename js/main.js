require.config({
  paths: {
    "jsdelivr": "https://cdn.jsdelivr.net/gh/memoriagame/js/memoriagame/main.js",
     "githubPages": "https://memoriagame.github.io/js/memoriagame/main.js",
    "githubusercontent": "https://raw.githubusercontent.com/memoriagame/js/main/memoriagame/main.js"
  }
});

require(['jsdelivr'], function() {
  console.log('jsdelivr is loaded.')
});

require(['githubPages'], function() {
  console.log('githubPages is loaded.')
});

require(['githubusercontent'], function() {
  console.log('githubusercontent is loaded.')
});
