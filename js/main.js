require.config({
  paths: {
    "jsdelivr": "https://cdn.jsdelivr.net/gh/memoriagame/js/memoriagame/main",
     "githubPages": "https://memoriagame.github.io/js/memoriagame/main",
    "githubusercontent": "https://raw.githubusercontent.com/memoriagame/js/main/memoriagame/main"
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
