var bcrypt = require("bcryptjs");

export function comparePass(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}
