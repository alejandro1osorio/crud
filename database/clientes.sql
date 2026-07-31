-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 31-07-2026 a las 18:42:59
-- Versión del servidor: 8.4.3
-- Versión de PHP: 8.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Base de datos: `clientes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cabeza_factura`
--

CREATE TABLE `cabeza_factura` (
  `numero` int NOT NULL,
  `fecha` date NOT NULL,
  `total` decimal(12,2) NOT NULL,
  `clientes_cliente` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `cabeza_factura`
--

INSERT INTO `cabeza_factura` (`numero`, `fecha`, `total`, `clientes_cliente`) VALUES
(1, '2025-03-10', 2585000.00, 1),
(2, '2026-03-15', 830000.00, 3),
(3, '2026-04-02', 320000.00, 4),
(4, '2026-04-18', 950000.00, 2),
(5, '2026-05-05', 1300000.00, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `cliente` int NOT NULL,
  `nombre_cliente` varchar(100) NOT NULL,
  `direccion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`cliente`, `nombre_cliente`, `direccion`) VALUES
(1, 'Alejandro Osorio Salazar', 'Calle 79 # 26 B3 29'),
(2, 'Mauricio Osorio', 'Calle 79 # 26B3 29'),
(3, 'Laura Martínez Gómez', 'Carrera 45 # 12-30'),
(4, 'Carlos Rodríguez Pérez', 'Avenida 10 # 25-18'),
(5, 'Diana Torres Ramírez', 'Calle 60 # 15-40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_factura`
--

CREATE TABLE `detalle_factura` (
  `cantidad` int NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `cabeza_factura_numero` int NOT NULL,
  `productos_producto` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `detalle_factura`
--

INSERT INTO `detalle_factura` (`cantidad`, `valor`, `cabeza_factura_numero`, `productos_producto`) VALUES
(1, 2500000.00, 1, 1),
(1, 85000.00, 1, 2),
(1, 20000.00, 1, 3),
(1, 20000.00, 2, 1),
(1, 180000.00, 2, 3),
(2, 640000.00, 2, 5),
(1, 320000.00, 3, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `producto` int NOT NULL,
  `nombre_producto` varchar(100) NOT NULL,
  `valor` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`producto`, `nombre_producto`, `valor`) VALUES
(1, 'Laptop Lenovo IdeaPad', 2500000.00),
(2, 'Mouse Logitech inalámbrico', 85000.00),
(3, 'Teclado Mecánico Redragon', 180000.00),
(4, 'Monitor Samsung 24 pulgadas', 650000.00),
(5, 'Disco SSD Kingston 1TB', 320000.00),
(6, 'USB Memory', 18000.00);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cabeza_factura`
--
ALTER TABLE `cabeza_factura`
  ADD PRIMARY KEY (`numero`),
  ADD KEY `fk_cabeza_factura_clientes_idx` (`clientes_cliente`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`cliente`);

--
-- Indices de la tabla `detalle_factura`
--
ALTER TABLE `detalle_factura`
  ADD PRIMARY KEY (`cabeza_factura_numero`,`productos_producto`),
  ADD KEY `fk_detalle_factura_productos1_idx` (`productos_producto`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`producto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cabeza_factura`
--
ALTER TABLE `cabeza_factura`
  MODIFY `numero` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `cliente` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `producto` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cabeza_factura`
--
ALTER TABLE `cabeza_factura`
  ADD CONSTRAINT `fk_cabeza_factura_clientes` FOREIGN KEY (`clientes_cliente`) REFERENCES `clientes` (`cliente`);

--
-- Filtros para la tabla `detalle_factura`
--
ALTER TABLE `detalle_factura`
  ADD CONSTRAINT `fk_detalle_factura_cabeza_factura1` FOREIGN KEY (`cabeza_factura_numero`) REFERENCES `cabeza_factura` (`numero`),
  ADD CONSTRAINT `fk_detalle_factura_productos1` FOREIGN KEY (`productos_producto`) REFERENCES `productos` (`producto`);
COMMIT;

