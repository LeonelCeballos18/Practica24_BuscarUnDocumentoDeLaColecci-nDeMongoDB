const express = require('express'); //inyeccion de la dependencia express
const mongoose = require('mongoose'); //inyeccion de la dependencia mongoose
const usersRoutes = require('./routes/users'); //incluimos el router que viene de persons
require('dotenv').config(); //Inyectamos la variable de ambiente

mongoose.Promise = global.Promise;
const app = express(); //app que hace la funcion del servidor
const port = process.env.PORT || 3000; //Configuramos el puerto de escucha

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.urlencoded({ extended: false }))
app.use(usersRoutes);
app.use('/assets', express.static(__dirname + '/../public'));

mongoose        //Conexion a base de datos
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

  app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));