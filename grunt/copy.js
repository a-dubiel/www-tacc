exports.task = {
  bowerjs: {       
    expand: true,
    flatten: true,
    cwd: '<%= path.source %>/<%= path.components %>',
    src: '**/*.js',
    dest: '<%= path.build %>/<%= path.scripts %>/<%= path.components %>/', 
    filter: 'isFile'   
  },
  bootstrap:{
    expand: true,
    flatten: false,
    cwd: '<%= path.source %>/<%= path.components %>/bootstrap/bootstrap-less/',
    src: '**/*.less',
    dest: '<%= path.source %>/<%= path.styles %>/<%= path.components %>/bootstrap/'
  },
  misc: {       
    expand: true,
    cwd: '<%= path.source %>/<%= path.misc %>',
    src: '**/*',
    dest: '<%= path.build %>', 
    dot: true 
  }
};