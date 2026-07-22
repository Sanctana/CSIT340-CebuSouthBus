-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 22, 2026 at 05:13 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbcsbtsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblbus`
--

CREATE TABLE `tblbus` (
  `bus_id` int(11) NOT NULL,
  `capacity` int(11) NOT NULL,
  `is_aircon` tinyint(1) NOT NULL,
  `route_id` int(11) NOT NULL,
  `bus_operator` text NOT NULL,
  `departure_time` time NOT NULL DEFAULT '00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblbus`
--

INSERT INTO `tblbus` (`bus_id`, `capacity`, `is_aircon`, `route_id`, `bus_operator`, `departure_time`) VALUES
(1, 40, 0, 1, 'Ceres Bus Liner', '00:00:00'),
(2, 45, 1, 1, 'Metro Shuttle', '01:00:00'),
(3, 45, 0, 1, 'Sunrays Transit', '02:00:00'),
(4, 40, 1, 2, 'Ceres Bus Liner', '00:00:00'),
(5, 45, 0, 2, 'Metro Shuttle', '01:00:00'),
(6, 45, 1, 2, 'Metro Shuttle', '02:00:00'),
(7, 45, 0, 2, 'Sunrays Transit', '03:00:00'),
(8, 45, 1, 2, 'Sunrays Transit', '04:00:00'),
(9, 30, 0, 3, 'V-Hire Operators', '00:00:00'),
(10, 40, 1, 3, 'Ceres Bus Liner', '01:30:00'),
(11, 45, 0, 3, 'Metro Shuttle', '03:00:00'),
(12, 45, 1, 3, 'Sunrays Transit', '04:30:00'),
(13, 40, 0, 4, 'Ceres Bus Liner', '00:00:00'),
(14, 45, 1, 4, 'Metro Shuttle', '02:00:00'),
(15, 45, 0, 4, 'Sunrays Transit', '04:00:00'),
(16, 30, 1, 5, 'V-Hire Operators', '00:00:00'),
(17, 40, 0, 5, 'Ceres Bus Liner', '02:00:00'),
(18, 45, 1, 5, 'Metro Shuttle', '04:00:00'),
(19, 45, 0, 5, 'Sunrays Transit', '06:00:00'),
(20, 30, 1, 6, 'V-Hire Operators', '00:00:00'),
(21, 40, 0, 6, 'Ceres Bus Liner', '02:00:00'),
(22, 45, 1, 6, 'Metro Shuttle', '04:00:00'),
(23, 30, 0, 7, 'V-Hire Operators', '00:00:00'),
(24, 40, 1, 7, 'Ceres Bus Liner', '02:00:00'),
(25, 45, 0, 7, 'Sunrays Transit', '04:00:00'),
(26, 40, 1, 8, 'Ceres Bus Liner', '00:00:00'),
(27, 45, 0, 8, 'Metro Shuttle', '02:00:00'),
(28, 45, 1, 8, 'Sunrays Transit', '04:00:00'),
(29, 40, 0, 9, 'Ceres Bus Liner', '00:00:00'),
(30, 45, 1, 9, 'Metro Shuttle', '01:30:00'),
(31, 45, 0, 9, 'Sunrays Transit', '03:00:00'),
(32, 30, 1, 10, 'V-Hire Operators', '00:00:00'),
(33, 40, 0, 10, 'Ceres Bus Liner', '01:00:00'),
(34, 45, 1, 10, 'Metro Shuttle', '02:00:00'),
(35, 45, 0, 10, 'Sunrays Transit', '03:00:00'),
(36, 40, 1, 11, 'Ceres Bus Liner', '00:00:00'),
(37, 45, 0, 11, 'Metro Shuttle', '01:30:00'),
(38, 45, 1, 11, 'Sunrays Transit', '03:00:00'),
(39, 40, 0, 12, 'Ceres Bus Liner', '00:00:00'),
(40, 45, 1, 12, 'Metro Shuttle', '01:00:00'),
(41, 45, 0, 12, 'Sunrays Transit', '02:00:00'),
(42, 45, 1, 1, 'Sunrays Transit', '03:00:00'),
(43, 45, 0, 1, 'V-Hire Operators', '04:00:00'),
(44, 45, 1, 1, 'Ceres Bus Liner', '05:00:00'),
(45, 45, 0, 1, 'Metro Shuttle', '06:00:00'),
(46, 45, 1, 1, 'Sunrays Transit', '07:00:00'),
(47, 45, 0, 1, 'V-Hire Operators', '08:00:00'),
(48, 45, 1, 1, 'Ceres Bus Liner', '09:00:00'),
(49, 45, 0, 1, 'Metro Shuttle', '10:00:00'),
(50, 45, 1, 1, 'Sunrays Transit', '11:00:00'),
(51, 45, 0, 1, 'V-Hire Operators', '12:00:00'),
(52, 45, 1, 1, 'Ceres Bus Liner', '13:00:00'),
(53, 45, 0, 1, 'Metro Shuttle', '14:00:00'),
(54, 45, 1, 1, 'Sunrays Transit', '15:00:00'),
(55, 45, 0, 1, 'V-Hire Operators', '16:00:00'),
(56, 45, 1, 1, 'Ceres Bus Liner', '17:00:00'),
(57, 45, 0, 1, 'Metro Shuttle', '18:00:00'),
(58, 45, 1, 1, 'Sunrays Transit', '19:00:00'),
(59, 45, 0, 1, 'V-Hire Operators', '20:00:00'),
(60, 45, 1, 1, 'Ceres Bus Liner', '21:00:00'),
(61, 45, 0, 1, 'Metro Shuttle', '22:00:00'),
(62, 45, 1, 1, 'Sunrays Transit', '23:00:00'),
(63, 45, 0, 2, 'V-Hire Operators', '05:00:00'),
(64, 45, 1, 2, 'Ceres Bus Liner', '06:00:00'),
(65, 45, 0, 2, 'Metro Shuttle', '07:00:00'),
(66, 45, 1, 2, 'Sunrays Transit', '08:00:00'),
(67, 45, 0, 2, 'V-Hire Operators', '09:00:00'),
(68, 45, 1, 2, 'Ceres Bus Liner', '10:00:00'),
(69, 45, 0, 2, 'Metro Shuttle', '11:00:00'),
(70, 45, 1, 2, 'Sunrays Transit', '12:00:00'),
(71, 45, 0, 2, 'V-Hire Operators', '13:00:00'),
(72, 45, 1, 2, 'Ceres Bus Liner', '14:00:00'),
(73, 45, 0, 2, 'Metro Shuttle', '15:00:00'),
(74, 45, 1, 2, 'Sunrays Transit', '16:00:00'),
(75, 45, 0, 2, 'V-Hire Operators', '17:00:00'),
(76, 45, 1, 2, 'Ceres Bus Liner', '18:00:00'),
(77, 45, 0, 2, 'Metro Shuttle', '19:00:00'),
(78, 45, 1, 2, 'Sunrays Transit', '20:00:00'),
(79, 45, 0, 2, 'V-Hire Operators', '21:00:00'),
(80, 45, 1, 2, 'Ceres Bus Liner', '22:00:00'),
(81, 45, 0, 2, 'Metro Shuttle', '23:00:00'),
(82, 45, 1, 3, 'Sunrays Transit', '06:00:00'),
(83, 45, 0, 3, 'V-Hire Operators', '07:30:00'),
(84, 45, 1, 3, 'Ceres Bus Liner', '09:00:00'),
(85, 45, 0, 3, 'Metro Shuttle', '10:30:00'),
(86, 45, 1, 3, 'Sunrays Transit', '12:00:00'),
(87, 45, 0, 3, 'V-Hire Operators', '13:30:00'),
(88, 45, 1, 3, 'Ceres Bus Liner', '15:00:00'),
(89, 45, 0, 3, 'Metro Shuttle', '16:30:00'),
(90, 45, 1, 3, 'Sunrays Transit', '18:00:00'),
(91, 45, 0, 3, 'V-Hire Operators', '19:30:00'),
(92, 45, 1, 3, 'Ceres Bus Liner', '21:00:00'),
(93, 45, 0, 3, 'Metro Shuttle', '22:30:00'),
(94, 45, 1, 4, 'Sunrays Transit', '06:00:00'),
(95, 45, 0, 4, 'V-Hire Operators', '08:00:00'),
(96, 45, 1, 4, 'Ceres Bus Liner', '10:00:00'),
(97, 45, 0, 4, 'Metro Shuttle', '12:00:00'),
(98, 45, 1, 4, 'Sunrays Transit', '14:00:00'),
(99, 45, 0, 4, 'V-Hire Operators', '16:00:00'),
(100, 45, 1, 4, 'Ceres Bus Liner', '18:00:00'),
(101, 45, 0, 4, 'Metro Shuttle', '20:00:00'),
(102, 45, 1, 4, 'Sunrays Transit', '22:00:00'),
(103, 45, 0, 5, 'V-Hire Operators', '08:00:00'),
(104, 45, 1, 5, 'Ceres Bus Liner', '10:00:00'),
(105, 45, 0, 5, 'Metro Shuttle', '12:00:00'),
(106, 45, 1, 5, 'Sunrays Transit', '14:00:00'),
(107, 45, 0, 5, 'V-Hire Operators', '16:00:00'),
(108, 45, 1, 5, 'Ceres Bus Liner', '18:00:00'),
(109, 45, 0, 5, 'Metro Shuttle', '20:00:00'),
(110, 45, 1, 5, 'Sunrays Transit', '22:00:00'),
(111, 45, 0, 6, 'V-Hire Operators', '06:00:00'),
(112, 45, 1, 6, 'Ceres Bus Liner', '08:00:00'),
(113, 45, 0, 6, 'Metro Shuttle', '10:00:00'),
(114, 45, 1, 6, 'Sunrays Transit', '12:00:00'),
(115, 45, 0, 6, 'V-Hire Operators', '14:00:00'),
(116, 45, 1, 6, 'Ceres Bus Liner', '16:00:00'),
(117, 45, 0, 6, 'Metro Shuttle', '18:00:00'),
(118, 45, 1, 6, 'Sunrays Transit', '20:00:00'),
(119, 45, 0, 6, 'V-Hire Operators', '22:00:00'),
(120, 45, 1, 7, 'Ceres Bus Liner', '06:00:00'),
(121, 45, 0, 7, 'Metro Shuttle', '08:00:00'),
(122, 45, 1, 7, 'Sunrays Transit', '10:00:00'),
(123, 45, 0, 7, 'V-Hire Operators', '12:00:00'),
(124, 45, 1, 7, 'Ceres Bus Liner', '14:00:00'),
(125, 45, 0, 7, 'Metro Shuttle', '16:00:00'),
(126, 45, 1, 7, 'Sunrays Transit', '18:00:00'),
(127, 45, 0, 7, 'V-Hire Operators', '20:00:00'),
(128, 45, 1, 7, 'Ceres Bus Liner', '22:00:00'),
(129, 45, 0, 8, 'Metro Shuttle', '06:00:00'),
(130, 45, 1, 8, 'Sunrays Transit', '08:00:00'),
(131, 45, 0, 8, 'V-Hire Operators', '10:00:00'),
(132, 45, 1, 8, 'Ceres Bus Liner', '12:00:00'),
(133, 45, 0, 8, 'Metro Shuttle', '14:00:00'),
(134, 45, 1, 8, 'Sunrays Transit', '16:00:00'),
(135, 45, 0, 8, 'V-Hire Operators', '18:00:00'),
(136, 45, 1, 8, 'Ceres Bus Liner', '20:00:00'),
(137, 45, 0, 8, 'Metro Shuttle', '22:00:00'),
(138, 45, 1, 9, 'Sunrays Transit', '04:30:00'),
(139, 45, 0, 9, 'V-Hire Operators', '06:00:00'),
(140, 45, 1, 9, 'Ceres Bus Liner', '07:30:00'),
(141, 45, 0, 9, 'Metro Shuttle', '09:00:00'),
(142, 45, 1, 9, 'Sunrays Transit', '10:30:00'),
(143, 45, 0, 9, 'V-Hire Operators', '12:00:00'),
(144, 45, 1, 9, 'Ceres Bus Liner', '13:30:00'),
(145, 45, 0, 9, 'Metro Shuttle', '15:00:00'),
(146, 45, 1, 9, 'Sunrays Transit', '16:30:00'),
(147, 45, 0, 9, 'V-Hire Operators', '18:00:00'),
(148, 45, 1, 9, 'Ceres Bus Liner', '19:30:00'),
(149, 45, 0, 9, 'Metro Shuttle', '21:00:00'),
(150, 45, 1, 9, 'Sunrays Transit', '22:30:00'),
(151, 45, 0, 10, 'V-Hire Operators', '04:00:00'),
(152, 45, 1, 10, 'Ceres Bus Liner', '05:00:00'),
(153, 45, 0, 10, 'Metro Shuttle', '06:00:00'),
(154, 45, 1, 10, 'Sunrays Transit', '07:00:00'),
(155, 45, 0, 10, 'V-Hire Operators', '08:00:00'),
(156, 45, 1, 10, 'Ceres Bus Liner', '09:00:00'),
(157, 45, 0, 10, 'Metro Shuttle', '10:00:00'),
(158, 45, 1, 10, 'Sunrays Transit', '11:00:00'),
(159, 45, 0, 10, 'V-Hire Operators', '12:00:00'),
(160, 45, 1, 10, 'Ceres Bus Liner', '13:00:00'),
(161, 45, 0, 10, 'Metro Shuttle', '14:00:00'),
(162, 45, 1, 10, 'Sunrays Transit', '15:00:00'),
(163, 45, 0, 10, 'V-Hire Operators', '16:00:00'),
(164, 45, 1, 10, 'Ceres Bus Liner', '17:00:00'),
(165, 45, 0, 10, 'Metro Shuttle', '18:00:00'),
(166, 45, 1, 10, 'Sunrays Transit', '19:00:00'),
(167, 45, 0, 10, 'V-Hire Operators', '20:00:00'),
(168, 45, 1, 10, 'Ceres Bus Liner', '21:00:00'),
(169, 45, 0, 10, 'Metro Shuttle', '22:00:00'),
(170, 45, 1, 10, 'Sunrays Transit', '23:00:00'),
(171, 45, 0, 11, 'V-Hire Operators', '04:30:00'),
(172, 45, 1, 11, 'Ceres Bus Liner', '06:00:00'),
(173, 45, 0, 11, 'Metro Shuttle', '07:30:00'),
(174, 45, 1, 11, 'Sunrays Transit', '09:00:00'),
(175, 45, 0, 11, 'V-Hire Operators', '10:30:00'),
(176, 45, 1, 11, 'Ceres Bus Liner', '12:00:00'),
(177, 45, 0, 11, 'Metro Shuttle', '13:30:00'),
(178, 45, 1, 11, 'Sunrays Transit', '15:00:00'),
(179, 45, 0, 11, 'V-Hire Operators', '16:30:00'),
(180, 45, 1, 11, 'Ceres Bus Liner', '18:00:00'),
(181, 45, 0, 11, 'Metro Shuttle', '19:30:00'),
(182, 45, 1, 11, 'Sunrays Transit', '21:00:00'),
(183, 45, 0, 11, 'V-Hire Operators', '22:30:00'),
(184, 45, 1, 12, 'Ceres Bus Liner', '03:00:00'),
(185, 45, 0, 12, 'Metro Shuttle', '04:00:00'),
(186, 45, 1, 12, 'Sunrays Transit', '05:00:00'),
(187, 45, 0, 12, 'V-Hire Operators', '06:00:00'),
(188, 45, 1, 12, 'Ceres Bus Liner', '07:00:00'),
(189, 45, 0, 12, 'Metro Shuttle', '08:00:00'),
(190, 45, 1, 12, 'Sunrays Transit', '09:00:00'),
(191, 45, 0, 12, 'V-Hire Operators', '10:00:00'),
(192, 45, 1, 12, 'Ceres Bus Liner', '11:00:00'),
(193, 45, 0, 12, 'Metro Shuttle', '12:00:00'),
(194, 45, 1, 12, 'Sunrays Transit', '13:00:00'),
(195, 45, 0, 12, 'V-Hire Operators', '14:00:00'),
(196, 45, 1, 12, 'Ceres Bus Liner', '15:00:00'),
(197, 45, 0, 12, 'Metro Shuttle', '16:00:00'),
(198, 45, 1, 12, 'Sunrays Transit', '17:00:00'),
(199, 45, 0, 12, 'V-Hire Operators', '18:00:00'),
(200, 45, 1, 12, 'Ceres Bus Liner', '19:00:00'),
(201, 45, 0, 12, 'Metro Shuttle', '20:00:00'),
(202, 45, 1, 12, 'Sunrays Transit', '21:00:00'),
(203, 45, 0, 12, 'V-Hire Operators', '22:00:00'),
(204, 45, 1, 12, 'Ceres Bus Liner', '23:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tblpassenger`
--

CREATE TABLE `tblpassenger` (
  `ticket_uid` varchar(6) NOT NULL,
  `first_name` mediumtext NOT NULL,
  `middle_name` mediumtext DEFAULT NULL,
  `last_name` mediumtext NOT NULL,
  `suffix` tinytext DEFAULT NULL,
  `date_of_birth` date NOT NULL,
  `is_female` tinyint(1) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tblroute`
--

CREATE TABLE `tblroute` (
  `id` int(11) NOT NULL,
  `destination` text NOT NULL,
  `distance` int(11) NOT NULL,
  `min_duration` int(11) NOT NULL,
  `max_duration` int(11) NOT NULL,
  `schedule` int(11) NOT NULL,
  `min_fare` int(11) NOT NULL,
  `max_fare` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblroute`
--

INSERT INTO `tblroute` (`id`, `destination`, `distance`, `min_duration`, `max_duration`, `schedule`, `min_fare`, `max_fare`) VALUES
(1, 'San Fernando', 29, 65, 85, 60, 42, 55),
(2, 'Carcar', 40, 95, 125, 60, 55, 75),
(3, 'Sibonga', 50, 115, 150, 90, 72, 95),
(4, 'Argao', 67, 155, 180, 120, 85, 98),
(5, 'Dalaguete', 84, 200, 255, 120, 125, 155),
(6, 'Oslob', 117, 260, 310, 120, 182, 215),
(7, 'Santander', 134, 315, 360, 120, 220, 255),
(8, 'Samboan', 128, 305, 330, 120, 190, 210),
(9, 'Badian', 98, 250, 285, 90, 158, 175),
(10, 'Moalboal', 89, 210, 230, 60, 165, 205),
(11, 'Aloguinsan', 72, 190, 225, 90, 125, 145),
(12, 'Barili', 61, 170, 205, 60, 115, 135);

-- --------------------------------------------------------

--
-- Table structure for table `tblticket`
--

CREATE TABLE `tblticket` (
  `uid` varchar(6) NOT NULL,
  `bus_id` int(11) NOT NULL,
  `first_name` text NOT NULL,
  `middle_name` text DEFAULT NULL,
  `last_name` text NOT NULL,
  `email_address` text NOT NULL,
  `mobile_number` text NOT NULL,
  `payment_method` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblbus`
--
ALTER TABLE `tblbus`
  ADD PRIMARY KEY (`bus_id`),
  ADD KEY `fk_bus_route_id_route` (`route_id`);

--
-- Indexes for table `tblpassenger`
--
ALTER TABLE `tblpassenger`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_passenger_ticket_uid_ticket` (`ticket_uid`);

--
-- Indexes for table `tblroute`
--
ALTER TABLE `tblroute`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblticket`
--
ALTER TABLE `tblticket`
  ADD PRIMARY KEY (`uid`),
  ADD KEY `fk_ticket_bus_id_bus` (`bus_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblbus`
--
ALTER TABLE `tblbus`
  MODIFY `bus_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=205;

--
-- AUTO_INCREMENT for table `tblpassenger`
--
ALTER TABLE `tblpassenger`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tblroute`
--
ALTER TABLE `tblroute`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tblbus`
--
ALTER TABLE `tblbus`
  ADD CONSTRAINT `fk_bus_route_id_route` FOREIGN KEY (`route_id`) REFERENCES `tblroute` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tblpassenger`
--
ALTER TABLE `tblpassenger`
  ADD CONSTRAINT `fk_passenger_ticket_uid_ticket` FOREIGN KEY (`ticket_uid`) REFERENCES `tblticket` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tblticket`
--
ALTER TABLE `tblticket`
  ADD CONSTRAINT `fk_ticket_bus_id_bus` FOREIGN KEY (`bus_id`) REFERENCES `tblbus` (`bus_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
