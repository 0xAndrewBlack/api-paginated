const express = require("express");
const app = express();

const users = require("./users");

app.get("/", (req, res) => {
  res.send("Navigate to /users !");
});

app.get("/users", paginate(users), (req, res) => {
  res.json(res.paginate);
});

function paginate(model) {
  return (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 4;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (startIndex > 0) {
      results.prev = {
        page: page - 1,
        limit: limit,
      };
    }

    results.current = {
      page: page,
      limit: limit,
    };

    if (endIndex < model.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    results.results = model.slice(startIndex, endIndex);

    res.paginate = results;
    next();
  };
}

app.listen(3000);
