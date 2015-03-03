requirejs.config({
  'baseUrl': 'scripts',
  'paths': {
    'jquery': 'components/jquery',
    'jquery.cycle2': 'components/jquery.cycle2',
    'jquery.cycle2.swipe': 'components/jquery.cycle2.swipe',
    'skrollr': 'components/skrollr',
    'tacc': 'components/tacc',
    'modernizr' : 'components/modernizr',
    'async' : 'components/async',
    'vimeo': 'components/vimeo'
  },
  'shim': {
    'tacc' : {
      'deps': ['jquery', 'jquery.cycle2', 'skrollr', 'modernizr', 'vimeo']
    },
    'jquery.cycle2': {
      'deps': ['jquery', 'jquery.cycle2.swipe']
    },
    'jquery.cycle2.swipe': {
      'deps': ['jquery']
    }
  }
});


requirejs(['tacc']);