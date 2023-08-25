const config = require('./config');

class User {
  static async createUser(name, email, password) {
    const [rows, fields] = await config.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
      return rows.insertId;
  }

  static async getUserByEmail(email) {
    const [rows, fields] = await config.execute('SELECT * FROM users WHERE email = ?', [email]);
      return rows[0];
  }

  // Add other CRUD operations here as needed
}

module.exports = User;