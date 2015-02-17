exports.task = {
  bowerutils: {       
    expand: true,
    flatten: true,
    cwd: '<%= path.source %>/<%= path.components %>',
    src: ['**/modernizr.js', '**/jquery.js'],
    dest: '<%= path.build %>/<%= path.scripts %>/<%= path.components %>'
  },  
  bootstrap:{
    expand: true,
    flatten: false,
    cwd: '<%= path.source %>/<%= path.components %>/bootstrap/bootstrap-less/',
    src: '**/*.less',
    dest: '<%= path.source %>/<%= path.styles %>/<%= path.components %>/bootstrap/'
  },
  faless:{
    expand: true,
    flatten: false,
    cwd: '<%= path.source %>/<%= path.components %>/font-awesome/font-awesome-less/',
    src: ['less/*.less'],
    dest: '<%= path.source %>/<%= path.styles %>/<%= path.components %>/font-awesome/'
  },
  fafiles:{
    expand: true,
    flatten: true,
    cwd: '<%= path.source %>/<%= path.components %>/font-awesome/font-awesome-less/',
    src: ['fonts/*.*'],
    dest: '<%= path.build %>/<%= path.fonts %>'
  },
  misc: {       
    expand: true,
    cwd: '<%= path.source %>/<%= path.misc %>',
    src: '**/*',
    dest: '<%= path.build %>', 
    dot: true 
  }
};