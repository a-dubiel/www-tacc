requirejs.config({
  'baseUrl': 'scripts',
  'paths': {
    'jquery': 'components/jquery',
    'jquery.cycle2': 'components/jquery.cycle2',
    'skrollr': 'components/skrollr',
    'tacc': 'components/tacc'
  },
  'shim': {
    'tacc' : {
      'deps': ['jquery', 'jquery.cycle2', 'skrollr']
    },
    'jquery.cycle2': {
      'deps': ['jquery']
    }
  }
});


requirejs(['tacc']);