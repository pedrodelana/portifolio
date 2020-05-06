var currentPath = process.cwd();
console.log(currentPath);

var fullpath = __dirname + "/img/" + 'erro400.jpg';
console.log(fullpath);

var full = window.location.pathname;
var path = full.substr(full.lastIndexOf("/") + 1);
console.log(path);