-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 11, 2026 at 09:33 AM
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
  `bus_operator` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblbus`
--

INSERT INTO `tblbus` (`bus_id`, `capacity`, `is_aircon`, `route_id`, `bus_operator`) VALUES
(1, 40, 1, 1, 'Ceres Bus Liner'),
(2, 45, 0, 1, 'Metro Shuttle'),
(3, 45, 0, 1, 'Sunrays Transit'),
(4, 40, 1, 2, 'Ceres Bus Liner'),
(5, 45, 0, 2, 'Metro Shuttle'),
(6, 45, 0, 2, 'Metro Shuttle'),
(7, 45, 0, 2, 'Sunrays Transit'),
(8, 45, 0, 2, 'Sunrays Transit'),
(9, 30, 1, 3, 'V-Hire Operators'),
(10, 40, 1, 3, 'Ceres Bus Liner'),
(11, 45, 0, 3, 'Metro Shuttle'),
(12, 45, 0, 3, 'Sunrays Transit'),
(13, 40, 1, 4, 'Ceres Bus Liner'),
(14, 45, 0, 4, 'Metro Shuttle'),
(15, 45, 0, 4, 'Sunrays Transit'),
(16, 30, 1, 5, 'V-Hire Operators'),
(17, 40, 1, 5, 'Ceres Bus Liner'),
(18, 45, 0, 5, 'Metro Shuttle'),
(19, 45, 0, 5, 'Sunrays Transit'),
(20, 30, 1, 6, 'V-Hire Operators'),
(21, 40, 1, 6, 'Ceres Bus Liner'),
(22, 45, 0, 6, 'Metro Shuttle'),
(23, 30, 1, 7, 'V-Hire Operators'),
(24, 40, 1, 7, 'Ceres Bus Liner'),
(25, 45, 0, 7, 'Sunrays Transit'),
(26, 40, 1, 8, 'Ceres Bus Liner'),
(27, 45, 0, 8, 'Metro Shuttle'),
(28, 45, 0, 8, 'Sunrays Transit'),
(29, 40, 1, 9, 'Ceres Bus Liner'),
(30, 45, 0, 9, 'Metro Shuttle'),
(31, 45, 0, 9, 'Sunrays Transit'),
(32, 30, 1, 10, 'V-Hire Operators'),
(33, 40, 1, 10, 'Ceres Bus Liner'),
(34, 45, 0, 10, 'Metro Shuttle'),
(35, 45, 0, 10, 'Sunrays Transit'),
(36, 40, 1, 11, 'Ceres Bus Liner'),
(37, 45, 0, 11, 'Metro Shuttle'),
(38, 45, 0, 11, 'Sunrays Transit'),
(39, 40, 1, 12, 'Ceres Bus Liner'),
(40, 45, 0, 12, 'Metro Shuttle'),
(41, 45, 0, 12, 'Sunrays Transit');

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
  `phone_number` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
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
(1, 'San Fernando', 0, 65, 85, 60, 42, 55),
(2, 'Carcar', 0, 95, 125, 60, 55, 75),
(3, 'Sibonga', 0, 115, 150, 90, 72, 95),
(4, 'Argao', 0, 155, 180, 120, 85, 98),
(5, 'Dalaguete', 0, 200, 255, 120, 125, 155),
(6, 'Oslob', 0, 260, 310, 120, 182, 215),
(7, 'Santander', 0, 315, 360, 120, 220, 255),
(8, 'Samboan', 0, 305, 330, 120, 190, 210),
(9, 'Badian', 0, 250, 285, 90, 158, 175),
(10, 'Moalboal', 0, 210, 230, 60, 165, 205),
(11, 'Aloguinsan', 0, 190, 225, 90, 125, 145),
(12, 'Barili', 0, 170, 205, 60, 115, 135);

-- --------------------------------------------------------

--
-- Table structure for table `tblticket`
--

CREATE TABLE `tblticket` (
  `uid` varchar(6) NOT NULL,
  `bus_id` int(11) NOT NULL
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
  MODIFY `bus_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `tblpassenger`
--
ALTER TABLE `tblpassenger`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
