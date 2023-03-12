const router = require("express").Router();
const dbConnection = require("../config/db-connection");

//GET
router.get("/", (req, res) => {
  let sql = `SELECT * FROM tb_pelis`;
  dbConnection.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

router.get("/:id", (req, res) => {
  let sql = `SELECT * FROM tb_pelis WHERE id_peli = ${req.params.id}`;
  dbConnection.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

//POST
router.post("/", (req, res) => {
  const { nombre, imagen } = req.body;
  let sql = `INSERT INTO tb_pelis(nombre,imagen,valoracion) values("${nombre}","${imagen}",0)`;
  dbConnection.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.send("Movie added successfully");
    }
  });
});

//PUT
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, imagen, valoracion } = req.body;
  let sql = `UPDATE tb_pelis SET 
              nombre = '${nombre}', imagen = '${imagen}' , valoracion = ${valoracion} 
              WHERE id_peli = ${id}`;
  dbConnection.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.send("Movie updated successfully");
    }
  });
});

//DELETE
router.delete("/:id", (req, res) => {
  let sql = `DELETE FROM tb_pelis WHERE id_peli = ${req.params.id}`;
  dbConnection.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.send("Movie deleted successfully");
    }
  });
});

module.exports = router;
