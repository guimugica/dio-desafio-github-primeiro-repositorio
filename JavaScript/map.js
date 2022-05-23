function getAdmins(map) {
  let admins = [];
  for ([key, value] of map) {
    if (value === 'Admin') {
      admins.push(key);
    }
  }
  return admins;
}

const usuarios = new Map();
usuarios.set('Jorge', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Luiz', 'User');
usuarios.set('Carla', 'Admin');

console.log(getAdmins(usuarios));
