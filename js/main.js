require.config({
  paths: {
    "jsdelivr": "https://cdn.jsdelivr.net/gh/memoriagame/js/memoriagame/main",
     "githubPages": "https://memoriagame.github.io/js/memoriagame/main",
    "githubusercontent": "https://raw.githubusercontent.com/memoriagame/js/main/memoriagame/main"
  }
});


try {
  require(['jsdelivr'], function() {
   console.log('jsdelivr is loaded.')
  });
  } catch(error) {
    // Do something as a fallback. For example: 
    try {
      require(['githubPages'], function() {
        console.log('githubPages is loaded.')
        });
        } catch(error) {
          // Do something as a fallback. For example: 
         try {
      require(['githubusercontent'], function() {
        console.log('githubusercontent is loaded.')
        });
        } catch(error) {
            module = require('./js/main');
         }
        }
      }
    }    
  }
}
