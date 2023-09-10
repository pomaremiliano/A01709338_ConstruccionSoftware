-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-09-2023 a las 03:31:35
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `peliculas`
--

--
-- Volcado de datos para la tabla `privilegios`
--

INSERT INTO `privilegios` (`id`, `nombre`) VALUES
(1, 'agregar_discos'),
(2, 'agregar_peliculas'),
(3, 'ver_peliculas'),
(4, 'ver_discos');

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`) VALUES
(1, 'usuario_registrado'),
(2, 'admin'),
(3, 'modo_insano');

--
-- Volcado de datos para la tabla `rol_privilegio`
--

INSERT INTO `rol_privilegio` (`id_rol`, `id_privilegio`, `created_at`) VALUES
(1, 3, '2023-09-09 23:53:09'),
(1, 4, '2023-09-09 23:53:09'),
(2, 1, '2023-09-09 23:53:25'),
(2, 2, '2023-09-09 23:53:25'),
(2, 3, '2023-09-09 23:54:27'),
(2, 4, '2023-09-09 23:54:27'),
(3, 1, '2023-09-09 23:54:15'),
(3, 2, '2023-09-09 23:54:15'),
(3, 3, '2023-09-09 23:53:44'),
(3, 4, '2023-09-09 23:53:44');

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `nombre`, `created_at`) VALUES
(2, 'smurfcat123', '$2a$12$kJlPb32H4xfl/VZ0T8K22.cB7LaUBbF.aePdoljERMu4DyiRXw4U2', 'Smurf Cat', '2023-09-09 21:21:27'),
(4, 'emiliano123', '$2a$12$QS2Y/NY9pJhyspCLwcUelu.cm5jmzfUBGO745JJNpY4ORMpqh.WXi', 'emiliano', '2023-09-09 23:26:18'),
(5, 'tilin50', '$2a$12$uR6.EhFD/fWdaW8DGnlm3usLJIjZjFp0XP4N3SjnTEUN93CLohDsG', 'tilin insano', '2023-09-09 23:27:07'),
(6, 'renegul088', '$2a$12$EgI.g0983d682GUHtVIJqOSzrnjcJKCVAt920lMANpUDYyLjY6gsm', 'Rene Lazcano', '2023-09-09 23:28:27');

--
-- Volcado de datos para la tabla `usuario_rol`
--

INSERT INTO `usuario_rol` (`id_usuario`, `id_rol`, `created_at`) VALUES
(2, 1, '2023-09-09 23:55:39'),
(4, 1, '2023-09-09 23:55:39'),
(5, 3, '2023-09-09 23:55:19'),
(6, 2, '2023-09-09 23:55:19');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
