-- SERVICIOS

INSERT INTO servicios(tipo,costo) VALUES
('hora',35),
('dia',150),
('pensión',500);

-- INVENTARIO/PLANTAS

INSERT INTO plantas(planta) VALUES
('Planta Baja'),
('Planta Media'),
('Planta Alta');

-- INVENTARIO/ESTACIONAMIENTO

INSERT INTO estacionamiento(plantas_id,lugar) VALUES
(1,'B-01'),
(1,'B-02'),
(1,'B-03'),
(1,'B-04'),
(1,'B-05'),
(1,'B-05'),
(1,'B-06'),
(1,'B-07'),
(1,'B-08'),
(1,'B-09'),
(1,'B-10'),
(1,'B-11'),
(1,'B-12'),
(2,'M-01'),
(2,'M-02'),
(2,'M-03'),
(2,'M-04'),
(2,'M-05'),
(2,'M-06'),
(2,'M-07'),
(2,'M-08'),
(2,'M-09'),
(2,'M-10'),
(2,'M-11'),
(2,'M-12'),
(3,'A-01'),
(3,'A-02'),
(3,'A-03'),
(3,'A-04'),
(3,'A-05'),
(3,'A-06'),
(3,'A-07'),
(3,'A-08'),
(3,'A-09'),
(3,'A-10'),
(3,'H');

-- USUARIOS/GENERO

INSERT INTO genero(genero) VALUES ('Mujer'),('Hombre'); 