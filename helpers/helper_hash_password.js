const bcrypt = require('bcrypt');

function hashPassword(body_password, db_password) {

  return bcrypt.compareSync(body_password, db_password)

}

module.exports = hashPassword;
