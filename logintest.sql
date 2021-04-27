-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 27, 2021 at 07:29 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `logintest`
--

-- --------------------------------------------------------

--
-- Table structure for table `mstlogin`
--

CREATE TABLE `mstlogin` (
  `loginid` int(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `name` varchar(150) NOT NULL,
  `password` varchar(50) NOT NULL,
  `role` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mstlogin`
--

INSERT INTO `mstlogin` (`loginid`, `email`, `name`, `password`, `role`) VALUES
(1, 'akhilsrivastava193@gmail.com', 'Akhil Srivastava', '123', 0),
(3, 'test', 'akhil', '123', 1),
(4, 'jgk', 'mjhjhk', '12', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mstlogin`
--
ALTER TABLE `mstlogin`
  ADD PRIMARY KEY (`loginid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mstlogin`
--
ALTER TABLE `mstlogin`
  MODIFY `loginid` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;
