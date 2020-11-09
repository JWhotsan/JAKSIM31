const sql = {
    user: {
        select_by_email: `select * from user where email = ?`,
        insert_user: `insert into user(email, password, username, phone) values(?, ?, ?, ?)`
    }
}

module.exports = sql;