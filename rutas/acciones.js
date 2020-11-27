const express = require('express');
const router = express.Router();

const mysqlConnection = require('../BD/database.js');

// GET all Employees
router.get('/Get_Dueno', (req, res) => {
  mysqlConnection.query('select * from Dueno', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET all Employees
router.get('/', (req, res) => {
    res.json("Hola Todo en Orden!!");
  });

  router.post('/CrearEditarMascota',(req,res)=>{

    const {in_RazaID , 
      in_Nombre , 
      in_Sexo , 
      in_FechaNacimiento , 
      in_Color , 
      in_Senas , 
      in_ObservacionesGenerales , 
      in_DuenoID} = req.body;
    console.log('Los datos a editar son: '+in_Nombre+" "+in_RazaID+" "+in_FechaNacimiento);
    const query = `
    SET @in_RazaID = ?;
    SET @in_Nombre = ?;
    SET @in_Sexo = ?;
    SET @in_FechaNacimiento = ?;
    SET @in_Color = ?;
    SET @in_Senas = ?;
    SET @in_ObservacionesGenerales = ?;
    SET @in_DuenoID = ?;
    CALL CrearEditarMascota(@in_RazaID, @in_Nombre, @in_Sexo,
      @in_FechaNacimiento,@in_Color, @in_Senas,
      @in_ObservacionesGenerales, @in_DuenoID); `;
  
      res.json("jeje ok los datos de la mascota"+in_RazaID +
      in_Nombre +
      in_Sexo +
      in_FechaNacimiento +
      in_Color +
      in_Senas + 
      in_ObservacionesGenerales +
      in_DuenoID);  
  });

  module.exports = router;
  