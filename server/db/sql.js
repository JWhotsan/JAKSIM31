const sql = {
    user: {
        select_by_email: `select * from user where email = ?`,
        insert_user: `insert into user(email, password, username, phone) values(?, ?, ?, ?)`
    },
    goal: {
        insert: `insert into goal(owner, cover, tag, goal, sub1, sub2, sub3, start_date, is_finish) values(?, ?, ?, ?, ?, ?, ?, ?, 0)`,
        update: `update goal set sub1 = ?, sub2 = ?, sub3 = ? where id = ?`,
        delete: `delete from goal where id = ?`,
        select_by_email_true: `select * from goal where owner = ? and is_finish = 1`,
        select_by_email_false: `select * from goal where owner = ? and is_finish = 0`,
        select_by_id: `select * from goal where id = ?`
    },
}

module.exports = sql;