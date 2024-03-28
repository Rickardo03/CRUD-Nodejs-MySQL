-- creando la base de datos
CREATE DATABASE crudnodejsmysql;

-- Utilizando la base de datos
use crudnodejsmysql;

-- Creando tabla
CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    telefono VARCHAR(10) NOT NULL
);

-- mostrar tablas
SHOW TABLES;

--describir tabla
describe customer;