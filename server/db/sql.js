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
    manager: {
        isWritten: `select * from manager where goal_id = ? and write_date = ?`,
        insert: `insert into manager(goal_id, write_date, do1, do1_point, do2, do2_point, do3, do3_point, review_diary) values(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        select_all: `select * from manager where goal_id = ?`,
        select_detail: `select * from manager where goal_id = ? order by id asc limit 1 offset ?`
    },
    report: {
        select_by_id: `select * from manager where goal_id = ?`,
        update_review: `update goal set review = ? where id = ?`,
    }
}

module.exports = sql;