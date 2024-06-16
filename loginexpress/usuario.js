const connection = require("./conexion");

const obtenerUsuarios = async (req, res) => {

    try {
      const [results, fields] = await connection.query(
        "SELECT * FROM `usuarios`",
      );
      res.status(200).json(results)
  
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    } catch (err) {
      console.log(err);
      res.status(500).send("Error en el servidor")
    }
}
const eliminarUsuario = async (req, res) => {
 
    const datos = req.query;
    try {
      const [results, fields] = await connection.query(
        "DELETE FROM `usuarios` WHERE `usuarios`.`id` = ?",
        [datos.id]
      );
      if (results.affectedRows > 0) {
        res.status(200).send("Usuario Eliminado")
      } else {
        res.status(401).send("error al eliminar")
      }
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    } catch (err) {
      console.log(err);
      res.status(500).send("Error en el servidor")
    }
}
module.exports = {obtenerUsuarios, eliminarUsuario}
