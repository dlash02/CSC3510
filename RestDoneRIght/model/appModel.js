'use strict';
var sql = require('./db.js');

//Task object constructor
var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};
Task.createTask = function (newTask, result) {
    sql.query("INSERT INTO tasks set ?", newTask, function (err, res) {

            if (err) {
                console.log("error: ", err);
                result(err, null);
                'use strict';
                module.exports = function (app) {
                    var todoList = require('../controller/appController');
                    // todoList Routes
                    app.route('/tasks').get(todoList.list_all_tasks).post(todoList.create_a_task);
                    app.route('/tasks/:taskId').get(todoList.read_a_task).put(todoList.update_a_task).delete(todoList.delete_a_task);
                };
            } else {
                console.log(res.insertId);
                result(null, res.insertId);
            }
        }
    );
};
Task.getTaskById = function (taskId, result) {
    sql.query("Select id, task, status, created_at from tasks where id = ? ", taskId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);

        }
    });
};
Task.getAllTask = function (result) {
    sql.query("Select * from tasks", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('tasks : ', res);

            result(null, res);
        }
    });
};
Task.updateById = function (id, task, result) {
    sql.query("UPDATE tasks SET task = ? WHERE id = ?", [task.task, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Task.remove = function (id, result) {
    sql.query("DELETE FROM tasks WHERE id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {

            result(null, res);
        }
    });
};

module.exports = Task;