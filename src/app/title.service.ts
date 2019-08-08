
var path;
export function setPath(path) {
  this.path = path;
}
export function getPath() {
  switch (this.path) {
    case '':
      return 'Dashbord';
    case 'admin':
      return 'Admin';
    case 'teacher':
      return 'Teacher'
    default:
      return 'Dashbord';
  }
}
