-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-08-2020 a las 23:30:16
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `encuesta`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administradores`
--

CREATE TABLE `administradores` (
  `id_admin` varchar(30) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido_p` varchar(50) NOT NULL,
  `apellido_m` varchar(50) NOT NULL,
  `puesto` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE `preguntas` (
  `id` int(11) NOT NULL,
  `titulo` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`id`, `titulo`) VALUES
(1, '¿Por qué elegiste esta empresa?'),
(2, '¿Cuáles consideras que son tus fortalezas?'),
(3, '¿Cómo te ves en 5 años?'),
(4, '¿Has sido cliente nuestro?'),
(5, '¿Por qué crees que eres la persona adecuada para el puesto?');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puesto_trabajo`
--

CREATE TABLE `puesto_trabajo` (
  `id_puesto` varchar(100) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `puesto_trabajo`
--

INSERT INTO `puesto_trabajo` (`id_puesto`, `nombre`) VALUES
('1RRHH', 'Recursos Humanos'),
('2RRHH', 'Asistente de Recursos Humanos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuesta`
--

CREATE TABLE `respuesta` (
  `id` int(11) NOT NULL,
  `nombre_usuario` varchar(30) DEFAULT NULL,
  `id_p` int(11) DEFAULT NULL,
  `resp` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `respuesta`
--

INSERT INTO `respuesta` (`id`, `nombre_usuario`, `id_p`, `resp`) VALUES
(2968, 'DRUMPADD', 1, 'Porque me interesan las ofertas laborales que ofrece'),
(2969, 'DRUMPADD', 2, 'Puntualidad'),
(2970, 'DRUMPADD', 3, 'Una persona más capacitada laborando en un puesto más alto'),
(2971, 'DRUMPADD', 4, 'No'),
(2972, 'DRUMPADD', 5, 'Por mis habilidades en el desempeño de las actividades'),
(2978, 'miguel123', 1, 'Porque quiero tener experiencia'),
(2979, 'miguel123', 2, 'Creatividad'),
(2980, 'miguel123', 3, 'Una persona más capacitada'),
(2981, 'miguel123', 4, 'Si'),
(2982, 'miguel123', 5, 'Porque tengo los suficientes conocimientos'),
(3263, 'erickFR', 1, 'ñdmdbvlñ'),
(3264, 'erickFR', 2, 'lmdm'),
(3265, 'erickFR', 3, 'bñkdgmkñ'),
(3266, 'erickFR', 4, 'lbmkfm'),
(3267, 'erickFR', 5, ''),
(3278, 'Hazard', 1, ''),
(3279, 'Hazard', 2, 'puntualidad'),
(3280, 'Hazard', 3, 'con un futuro empresario'),
(3281, 'Hazard', 4, 'Hola a todos'),
(3282, 'Hazard', 5, 'Eric'),
(3318, 'EFPO', 1, 'creo que es la mejor'),
(3319, 'EFPO', 2, 'Hola'),
(3320, 'EFPO', 3, 'Hola'),
(3321, 'EFPO', 4, 'Hola'),
(3322, 'EFPO', 5, 'tengo buenos conocimientos'),
(3323, 'erickerick', 1, 'porque me gusta'),
(3324, 'erickerick', 2, 'puntualidad'),
(3325, 'erickerick', 3, 'como una persona especializada en mi campo'),
(3326, 'erickerick', 4, 'sí'),
(3327, 'erickerick', 5, 'porque creo que tengo los conocimientos necesarios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `nombre_usuario` varchar(30) NOT NULL,
  `Nombre` varchar(40) NOT NULL,
  `Apellido_p` varchar(40) NOT NULL,
  `Apellido_m` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`nombre_usuario`, `Nombre`, `Apellido_p`, `Apellido_m`) VALUES
('47', 'Rigoberto', 'Martinez', 'Mercado'),
('dani', 'lbbdm', 'ndld', 'nbllvd'),
('DRUMPADD', 'Erick Francisco', 'Patiño', 'Olvera'),
('EFPO', 'ERICK FRANCISCO', 'PATIÑO', 'OLVERA'),
('erick123', 'Erick ', 'Patiño', 'Olvera'),
('erickerick', 'Erick Francisco', 'Patiño', 'Olvera'),
('erickFR', 'grrk', 'rgrjl', 'eñghlj'),
('Hazard', 'Juan Pablo', 'Martinez', 'Yañez'),
('jde96', 'David', 'Hernández', 'González'),
('josédaniel', 'Daniel', 'Olvera', 'Patiño'),
('JP25', 'Juan', 'Mendoza', 'Martinez'),
('miguel123', 'Miguel Angel', 'Hernandez', 'Perez'),
('pacDonald', 'Juan ', 'Hernandez', 'Santes'),
('sami', 'Samantha Michelle', 'De la Cruz', 'Hernández');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administradores`
--
ALTER TABLE `administradores`
  ADD PRIMARY KEY (`id_admin`),
  ADD KEY `id_admin` (`id_admin`,`puesto`),
  ADD KEY `puesto` (`puesto`);

--
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `puesto_trabajo`
--
ALTER TABLE `puesto_trabajo`
  ADD PRIMARY KEY (`id_puesto`),
  ADD KEY `id_puesto` (`id_puesto`);

--
-- Indices de la tabla `respuesta`
--
ALTER TABLE `respuesta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nombre_usuario` (`nombre_usuario`,`id_p`),
  ADD KEY `id_p` (`id_p`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`nombre_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `respuesta`
--
ALTER TABLE `respuesta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3328;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `administradores`
--
ALTER TABLE `administradores`
  ADD CONSTRAINT `administradores_ibfk_1` FOREIGN KEY (`puesto`) REFERENCES `puesto_trabajo` (`id_puesto`);

--
-- Filtros para la tabla `respuesta`
--
ALTER TABLE `respuesta`
  ADD CONSTRAINT `respuesta_ibfk_1` FOREIGN KEY (`id_p`) REFERENCES `preguntas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `respuesta_ibfk_2` FOREIGN KEY (`nombre_usuario`) REFERENCES `usuario` (`nombre_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
