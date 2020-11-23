var bcrypt = require("bcryptjs");

export function comparePass(password, hash) {
  return bcrypt.compareSync(password, hash);
}
