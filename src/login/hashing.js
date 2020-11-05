var bcrypt = require("bcryptjs");

export function hashPass(password) {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);
  return { hash, salt };
}

export function comparePass(password, hash) {
  return bcrypt.compareSync(password, hash);
}

export function hashToken(id, username) {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(username, salt);
  return hash;
}
