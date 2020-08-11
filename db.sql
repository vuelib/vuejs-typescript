-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: sotolamira
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `amounts`
--
use `d247227_sotola`;
DROP TABLE IF EXISTS `amounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `amounts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int unsigned NOT NULL,
  `order_id` int unsigned NOT NULL,
  `value` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=168 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amounts`
--

LOCK TABLES `amounts` WRITE;
/*!40000 ALTER TABLE `amounts` DISABLE KEYS */;
INSERT INTO `amounts` VALUES (1,99,1,'5','2020-08-05 04:59:54','2020-08-05 04:59:54'),(2,22,1,'5','2020-08-05 04:59:54','2020-08-05 04:59:54'),(3,81,1,'5','2020-08-05 04:59:54','2020-08-05 04:59:54'),(4,42,1,'5','2020-08-05 04:59:54','2020-08-05 04:59:54'),(5,99,2,'5','2020-08-05 05:00:05','2020-08-05 05:00:05'),(6,22,2,'5','2020-08-05 05:00:05','2020-08-05 05:00:05'),(7,81,2,'5','2020-08-05 05:00:05','2020-08-05 05:00:05'),(8,42,2,'5','2020-08-05 05:00:05','2020-08-05 05:00:05'),(9,99,3,'5','2020-08-05 05:02:25','2020-08-05 05:02:25'),(10,22,3,'5','2020-08-05 05:02:25','2020-08-05 05:02:25'),(11,81,3,'5','2020-08-05 05:02:25','2020-08-05 05:02:25'),(12,42,3,'5','2020-08-05 05:02:25','2020-08-05 05:02:25'),(13,99,4,'5','2020-08-05 05:02:56','2020-08-05 05:02:56'),(14,22,4,'5','2020-08-05 05:02:56','2020-08-05 05:02:56'),(15,81,4,'5','2020-08-05 05:02:56','2020-08-05 05:02:56'),(16,42,4,'5','2020-08-05 05:02:56','2020-08-05 05:02:56'),(17,99,5,'5','2020-08-05 05:03:17','2020-08-05 05:03:17'),(18,22,5,'5','2020-08-05 05:03:17','2020-08-05 05:03:17'),(19,81,5,'5','2020-08-05 05:03:17','2020-08-05 05:03:17'),(20,42,5,'5','2020-08-05 05:03:17','2020-08-05 05:03:17'),(21,99,6,'5','2020-08-05 05:03:27','2020-08-05 05:03:27'),(22,22,6,'5','2020-08-05 05:03:27','2020-08-05 05:03:27'),(23,81,6,'5','2020-08-05 05:03:27','2020-08-05 05:03:27'),(24,42,6,'5','2020-08-05 05:03:27','2020-08-05 05:03:27'),(25,99,7,'5','2020-08-05 05:04:07','2020-08-05 05:04:07'),(26,22,7,'5','2020-08-05 05:04:07','2020-08-05 05:04:07'),(27,81,7,'5','2020-08-05 05:04:07','2020-08-05 05:04:07'),(28,42,7,'5','2020-08-05 05:04:07','2020-08-05 05:04:07'),(29,99,8,'5','2020-08-05 05:04:23','2020-08-05 05:04:23'),(30,22,8,'5','2020-08-05 05:04:23','2020-08-05 05:04:23'),(31,81,8,'5','2020-08-05 05:04:23','2020-08-05 05:04:23'),(32,42,8,'5','2020-08-05 05:04:23','2020-08-05 05:04:23'),(33,99,9,'5','2020-08-05 05:04:27','2020-08-05 05:04:27'),(34,22,9,'5','2020-08-05 05:04:27','2020-08-05 05:04:27'),(35,81,9,'5','2020-08-05 05:04:27','2020-08-05 05:04:27'),(36,42,9,'5','2020-08-05 05:04:27','2020-08-05 05:04:27'),(37,99,10,'5','2020-08-05 05:04:45','2020-08-05 05:04:45'),(38,22,10,'5','2020-08-05 05:04:45','2020-08-05 05:04:45'),(39,81,10,'5','2020-08-05 05:04:45','2020-08-05 05:04:45'),(40,99,11,'5','2020-08-05 05:09:25','2020-08-05 05:09:25'),(41,22,11,'5','2020-08-05 05:09:25','2020-08-05 05:09:25'),(42,81,11,'5','2020-08-05 05:09:25','2020-08-05 05:09:25'),(43,99,12,'5','2020-08-05 05:11:34','2020-08-05 05:11:34'),(44,22,12,'5','2020-08-05 05:11:34','2020-08-05 05:11:34'),(45,81,12,'5','2020-08-05 05:11:34','2020-08-05 05:11:34'),(46,99,13,'5','2020-08-05 05:14:06','2020-08-05 05:14:06'),(47,22,13,'5','2020-08-05 05:14:06','2020-08-05 05:14:06'),(48,81,13,'5','2020-08-05 05:14:06','2020-08-05 05:14:06'),(49,99,14,'5','2020-08-05 05:14:15','2020-08-05 05:14:15'),(50,22,14,'5','2020-08-05 05:14:15','2020-08-05 05:14:15'),(51,81,14,'5','2020-08-05 05:14:15','2020-08-05 05:14:15'),(52,99,15,'5','2020-08-05 05:14:36','2020-08-05 05:14:36'),(53,22,15,'5','2020-08-05 05:14:36','2020-08-05 05:14:36'),(54,81,15,'5','2020-08-05 05:14:36','2020-08-05 05:14:36'),(55,42,15,'5','2020-08-05 05:14:36','2020-08-05 05:14:36'),(56,99,16,'5','2020-08-05 05:15:10','2020-08-05 05:15:10'),(57,22,16,'5','2020-08-05 05:15:10','2020-08-05 05:15:10'),(58,81,16,'5','2020-08-05 05:15:10','2020-08-05 05:15:10'),(59,42,16,'5','2020-08-05 05:15:10','2020-08-05 05:15:10'),(60,86,16,'5','2020-08-05 05:15:10','2020-08-05 05:15:10'),(61,99,17,'5','2020-08-05 05:15:39','2020-08-05 05:15:39'),(62,22,17,'5','2020-08-05 05:15:39','2020-08-05 05:15:39'),(63,81,17,'5','2020-08-05 05:15:39','2020-08-05 05:15:39'),(64,42,17,'5','2020-08-05 05:15:39','2020-08-05 05:15:39'),(65,99,18,'5','2020-08-05 05:15:58','2020-08-05 05:15:58'),(66,22,18,'5','2020-08-05 05:15:58','2020-08-05 05:15:58'),(67,81,18,'5','2020-08-05 05:15:58','2020-08-05 05:15:58'),(68,42,18,'5','2020-08-05 05:15:58','2020-08-05 05:15:58'),(69,99,19,'5','2020-08-05 05:16:06','2020-08-05 05:16:06'),(70,22,19,'5','2020-08-05 05:16:06','2020-08-05 05:16:06'),(71,81,19,'5','2020-08-05 05:16:06','2020-08-05 05:16:06'),(72,42,19,'5','2020-08-05 05:16:06','2020-08-05 05:16:06'),(73,99,20,'5','2020-08-05 05:16:44','2020-08-05 05:16:44'),(74,81,20,'5','2020-08-05 05:16:44','2020-08-05 05:16:44'),(75,42,20,'5','2020-08-05 05:16:44','2020-08-05 05:16:44'),(76,99,21,'5','2020-08-05 05:16:55','2020-08-05 05:16:55'),(77,81,21,'5','2020-08-05 05:16:55','2020-08-05 05:16:55'),(78,42,21,'5','2020-08-05 05:16:55','2020-08-05 05:16:55'),(79,22,22,'5','2020-08-05 05:17:34','2020-08-05 05:17:34'),(80,81,22,'5','2020-08-05 05:17:34','2020-08-05 05:17:34'),(81,42,22,'5','2020-08-05 05:17:34','2020-08-05 05:17:34'),(82,86,22,'5','2020-08-05 05:17:34','2020-08-05 05:17:34'),(83,99,23,'5','2020-08-05 05:19:09','2020-08-05 05:19:09'),(84,22,23,'5','2020-08-05 05:19:09','2020-08-05 05:19:09'),(85,81,23,'5','2020-08-05 05:19:09','2020-08-05 05:19:09'),(86,42,23,'5','2020-08-05 05:19:09','2020-08-05 05:19:09'),(87,86,23,'5','2020-08-05 05:19:09','2020-08-05 05:19:09'),(88,99,24,'5','2020-08-05 05:19:19','2020-08-05 05:19:19'),(89,22,24,'5','2020-08-05 05:19:19','2020-08-05 05:19:19'),(90,81,24,'5','2020-08-05 05:19:19','2020-08-05 05:19:19'),(91,99,25,'6','2020-08-05 05:19:52','2020-08-05 05:19:52'),(92,22,25,'6','2020-08-05 05:19:52','2020-08-05 05:19:52'),(93,81,25,'6','2020-08-05 05:19:52','2020-08-05 05:19:52'),(94,99,26,'5','2020-08-05 05:20:12','2020-08-05 05:20:12'),(95,22,26,'5','2020-08-05 05:20:12','2020-08-05 05:20:12'),(96,81,26,'5','2020-08-05 05:20:12','2020-08-05 05:20:12'),(97,42,26,'5','2020-08-05 05:20:12','2020-08-05 05:20:12'),(98,99,27,'5','2020-08-05 05:20:49','2020-08-05 05:20:49'),(99,22,27,'5','2020-08-05 05:20:49','2020-08-05 05:20:49'),(100,81,27,'5','2020-08-05 05:20:49','2020-08-05 05:20:49'),(101,42,27,'5','2020-08-05 05:20:49','2020-08-05 05:20:49'),(102,99,28,'5','2020-08-05 05:21:10','2020-08-05 05:21:10'),(103,22,28,'5','2020-08-05 05:21:10','2020-08-05 05:21:10'),(104,81,28,'5','2020-08-05 05:21:10','2020-08-05 05:21:10'),(105,42,28,'5','2020-08-05 05:21:10','2020-08-05 05:21:10'),(106,99,29,'5','2020-08-05 05:21:35','2020-08-05 05:21:35'),(107,22,29,'5','2020-08-05 05:21:35','2020-08-05 05:21:35'),(108,81,29,'5','2020-08-05 05:21:35','2020-08-05 05:21:35'),(109,42,29,'5','2020-08-05 05:21:35','2020-08-05 05:21:35'),(110,99,30,'5','2020-08-05 05:21:37','2020-08-05 05:21:37'),(111,22,30,'5','2020-08-05 05:21:37','2020-08-05 05:21:37'),(112,81,30,'5','2020-08-05 05:21:37','2020-08-05 05:21:37'),(113,42,30,'5','2020-08-05 05:21:37','2020-08-05 05:21:37'),(114,99,31,'5','2020-08-05 05:21:40','2020-08-05 05:21:40'),(115,22,31,'5','2020-08-05 05:21:40','2020-08-05 05:21:40'),(116,81,31,'5','2020-08-05 05:21:40','2020-08-05 05:21:40'),(117,42,31,'5','2020-08-05 05:21:40','2020-08-05 05:21:40'),(118,99,32,'5','2020-08-05 05:21:42','2020-08-05 05:21:42'),(119,22,32,'5','2020-08-05 05:21:42','2020-08-05 05:21:42'),(120,81,32,'5','2020-08-05 05:21:42','2020-08-05 05:21:42'),(121,42,32,'5','2020-08-05 05:21:42','2020-08-05 05:21:42'),(122,99,33,'5','2020-08-05 05:21:44','2020-08-05 05:21:44'),(123,22,33,'5','2020-08-05 05:21:44','2020-08-05 05:21:44'),(124,81,33,'5','2020-08-05 05:21:44','2020-08-05 05:21:44'),(125,42,33,'5','2020-08-05 05:21:44','2020-08-05 05:21:44'),(126,99,34,'5','2020-08-05 05:21:47','2020-08-05 05:21:47'),(127,22,34,'5','2020-08-05 05:21:47','2020-08-05 05:21:47'),(128,81,34,'5','2020-08-05 05:21:47','2020-08-05 05:21:47'),(129,42,34,'5','2020-08-05 05:21:47','2020-08-05 05:21:47'),(130,99,35,'5','2020-08-05 05:21:51','2020-08-05 05:21:51'),(131,22,35,'5','2020-08-05 05:21:51','2020-08-05 05:21:51'),(132,81,35,'5','2020-08-05 05:21:51','2020-08-05 05:21:51'),(133,42,35,'5','2020-08-05 05:21:51','2020-08-05 05:21:51'),(134,99,36,'5','2020-08-05 05:26:29','2020-08-05 05:26:29'),(135,22,36,'5','2020-08-05 05:26:29','2020-08-05 05:26:29'),(136,81,36,'5','2020-08-05 05:26:29','2020-08-05 05:26:29'),(137,99,37,'5','2020-08-05 05:26:45','2020-08-05 05:26:45'),(138,22,37,'5','2020-08-05 05:26:45','2020-08-05 05:26:45'),(139,81,37,'5','2020-08-05 05:26:45','2020-08-05 05:26:45'),(140,42,37,'5','2020-08-05 05:26:45','2020-08-05 05:26:45'),(141,99,38,'5','2020-08-05 05:26:52','2020-08-05 05:26:52'),(142,22,38,'5','2020-08-05 05:26:52','2020-08-05 05:26:52'),(143,81,38,'5','2020-08-05 05:26:52','2020-08-05 05:26:52'),(144,42,38,'5','2020-08-05 05:26:52','2020-08-05 05:26:52'),(145,99,39,'5','2020-08-05 05:26:54','2020-08-05 05:26:54'),(146,22,39,'5','2020-08-05 05:26:54','2020-08-05 05:26:54'),(147,81,39,'5','2020-08-05 05:26:54','2020-08-05 05:26:54'),(148,42,39,'5','2020-08-05 05:26:54','2020-08-05 05:26:54'),(149,99,40,'50','2020-08-05 05:29:23','2020-08-05 05:55:37'),(150,22,40,'50','2020-08-05 05:29:23','2020-08-05 05:55:37'),(151,81,40,'50','2020-08-05 05:29:23','2020-08-05 05:55:37'),(152,42,40,'50','2020-08-05 05:29:23','2020-08-05 05:55:37'),(153,99,41,'500','2020-08-05 05:58:35','2020-08-05 05:58:48'),(154,22,41,'10','2020-08-05 05:58:35','2020-08-05 05:58:55'),(155,81,41,'10','2020-08-05 05:58:35','2020-08-05 05:58:55'),(156,42,41,'10','2020-08-05 05:58:35','2020-08-05 05:58:55'),(157,66,41,'10','2020-08-05 05:58:48','2020-08-05 05:59:06'),(158,99,42,'5','2020-08-05 06:02:54','2020-08-05 06:02:54'),(159,22,42,'5','2020-08-05 06:02:54','2020-08-05 06:02:54'),(160,81,42,'5','2020-08-05 06:02:54','2020-08-05 06:02:54'),(161,42,42,'5','2020-08-05 06:02:54','2020-08-05 06:02:54'),(162,99,43,'5','2020-08-05 06:06:05','2020-08-05 06:06:05'),(163,22,43,'5','2020-08-05 06:06:05','2020-08-05 06:06:05'),(164,81,43,'5','2020-08-05 06:06:05','2020-08-05 06:06:05'),(165,99,44,'5','2020-08-05 06:09:56','2020-08-05 06:09:56'),(166,22,44,'5','2020-08-05 06:09:56','2020-08-05 06:09:56'),(167,81,44,'5','2020-08-05 06:09:56','2020-08-05 06:09:56');
/*!40000 ALTER TABLE `amounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagePath` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `categories_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Prof. Durward Smitham Jr.',NULL,'2020-08-04 14:30:51','2020-08-04 14:30:51'),(2,'Zena Bernhard',NULL,'2020-08-04 14:30:51','2020-08-04 14:30:51'),(3,'Linnea Upton',NULL,'2020-08-04 14:30:51','2020-08-04 14:30:51'),(4,'Mrs. Cassidy Rolfson',NULL,'2020-08-04 14:30:51','2020-08-04 14:30:51'),(5,'Dr. Kristoffer Ritchie DDS',NULL,'2020-08-04 14:30:51','2020-08-04 14:30:51'),(6,'Mr. Ted Grady DDS',NULL,'2020-08-04 14:30:51','2020-08-04 14:30:51'),(7,'Erik Schuppe V',NULL,'2020-08-04 14:30:51','2020-08-04 14:30:51'),(8,'Luciano O\'Keefe',NULL,'2020-08-04 14:30:51','2020-08-04 14:30:51'),(9,'Nigel Spencer',NULL,'2020-08-04 14:30:51','2020-08-04 14:30:51'),(10,'Aubree Stamm',NULL,'2020-08-04 14:30:51','2020-08-04 14:30:51');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoices`
--

DROP TABLE IF EXISTS `invoices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoices` (
  `user_id` bigint unsigned NOT NULL,
  `nazev` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ulice` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mesto` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `psc` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `zeme` enum('Česká republika','Slovensko') COLLATE utf8mb4_unicode_ci NOT NULL,
  `ic` varchar(9) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dic` varchar(13) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  UNIQUE KEY `invoices_ic_unique` (`ic`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoices`
--

LOCK TABLES `invoices` WRITE;
/*!40000 ALTER TABLE `invoices` DISABLE KEYS */;
INSERT INTO `invoices` VALUES (3,'MUDr. Kristina Horáková s.r.o.','Rybná 716','Praha','11000','Česká republika','01710435',NULL,'2020-08-04 14:40:36','2020-08-04 14:40:36'),(6,'Markéta Šotolová','39','Chlumany','38422','Česká republika','02617811',NULL,'2020-08-05 05:26:17','2020-08-05 05:26:17'),(1,'MVDr. Šotola s.r.o.','Havlíčkova 3041','Kroměříž','76701','Česká republika','27758338','CZ27758338','2020-08-04 14:38:11','2020-08-04 14:38:11'),(4,'Iveta Šotolová','U Kostelíčka 1075','Česká Třebová','56002','Česká republika','61209121',NULL,'2020-08-05 05:22:26','2020-08-05 05:22:26'),(5,'Miroslav Šotola','Krumpach 1954','Zábřeh','78901','Česká republika','64963021','CZ6005080356','2020-08-05 05:22:58','2020-08-05 05:22:58');
/*!40000 ALTER TABLE `invoices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2016_06_01_000001_create_oauth_auth_codes_table',1),(4,'2016_06_01_000002_create_oauth_access_tokens_table',1),(5,'2016_06_01_000003_create_oauth_refresh_tokens_table',1),(6,'2016_06_01_000004_create_oauth_clients_table',1),(7,'2016_06_01_000005_create_oauth_personal_access_clients_table',1),(8,'2019_08_19_000000_create_failed_jobs_table',1),(9,'2020_02_11_123944_create_products_table',1),(10,'2020_02_11_124058_create_categories_table',1),(11,'2020_02_12_082717_create_invoices_table',1),(12,'2020_02_12_082813_create_amounts_table',1),(13,'2020_02_12_082848_create_orders_table',1),(14,'2020_04_24_180501_create_websockets_statistics_entries_table',1),(15,'2020_07_16_063637_create_notifications_table',1),(16,'2020_07_16_063849_create_roles_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_id` bigint unsigned NOT NULL,
  `data` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `notifications_notifiable_type_notifiable_id_index` (`notifiable_type`,`notifiable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_access_tokens`
--

DROP TABLE IF EXISTS `oauth_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `client_id` bigint unsigned NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_access_tokens`
--

LOCK TABLES `oauth_access_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_auth_codes`
--

DROP TABLE IF EXISTS `oauth_auth_codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `client_id` bigint unsigned NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_auth_codes_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_auth_codes`
--

LOCK TABLES `oauth_auth_codes` WRITE;
/*!40000 ALTER TABLE `oauth_auth_codes` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_auth_codes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_clients`
--

DROP TABLE IF EXISTS `oauth_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_clients` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_clients`
--

LOCK TABLES `oauth_clients` WRITE;
/*!40000 ALTER TABLE `oauth_clients` DISABLE KEYS */;
INSERT INTO `oauth_clients` VALUES (1,NULL,'OBJSYSTEM Personal Access Client','WYqGY3Xr7LagDS5IGKgQAudAoWqDXv8p9cIL8hpm','http://localhost',1,0,0,'2020-08-04 14:30:57','2020-08-04 14:30:57'),(2,NULL,'OBJSYSTEM Password Grant Client','O62X0AMCrG6MmUY5OQOpsCbBKm1TC9ydOjyg00mL','http://localhost',0,1,0,'2020-08-04 14:30:57','2020-08-04 14:30:57');
/*!40000 ALTER TABLE `oauth_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_personal_access_clients`
--

DROP TABLE IF EXISTS `oauth_personal_access_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `client_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_personal_access_clients`
--

LOCK TABLES `oauth_personal_access_clients` WRITE;
/*!40000 ALTER TABLE `oauth_personal_access_clients` DISABLE KEYS */;
INSERT INTO `oauth_personal_access_clients` VALUES (1,1,'2020-08-04 14:30:57','2020-08-04 14:30:57');
/*!40000 ALTER TABLE `oauth_personal_access_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_refresh_tokens`
--

DROP TABLE IF EXISTS `oauth_refresh_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_refresh_tokens`
--

LOCK TABLES `oauth_refresh_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_refresh_tokens` DISABLE KEYS */;
INSERT INTO `oauth_refresh_tokens` VALUES ('1bfb9ec6943b1bbcbaeb5118af8ef9db354051ed7d747d793d76991390a223a79847dea7174adcfb','2d44c4999bdfbd85cac82253fdb6a270baf27d5171c75b3bfb376a89194b0028465f9f93fd417c65',0,'2021-08-05 08:05:33'),('d538a6a41d0b26a608c1445c948787f20253e3012ef5bd209c8e38db6316bd447ffad77516f0a573','8c6fc2593544f188e469280705baa9f156a4076282fbad9efca84aaf1ca387e6cbccb97182d7cf86',0,'2021-08-04 16:31:31');
/*!40000 ALTER TABLE `oauth_refresh_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,3,NULL,1,'2020-08-05 04:59:54','2020-08-05 05:00:03'),(2,1,NULL,0,'2020-08-05 05:00:05','2020-08-05 05:00:05'),(3,3,NULL,0,'2020-08-05 05:02:25','2020-08-05 05:02:25'),(4,3,NULL,0,'2020-08-05 05:02:56','2020-08-05 05:02:56'),(5,3,NULL,1,'2020-08-05 05:03:17','2020-08-05 05:04:04'),(6,3,NULL,0,'2020-08-05 05:03:27','2020-08-05 05:03:27'),(7,3,NULL,1,'2020-08-05 05:04:06','2020-08-05 05:04:21'),(8,3,NULL,1,'2020-08-05 05:04:23','2020-08-05 05:04:26'),(9,3,NULL,0,'2020-08-05 05:04:27','2020-08-05 05:04:27'),(10,3,NULL,0,'2020-08-05 05:04:45','2020-08-05 05:04:45'),(11,3,NULL,0,'2020-08-05 05:09:25','2020-08-05 05:09:25'),(12,3,NULL,0,'2020-08-05 05:11:34','2020-08-05 05:11:34'),(13,3,NULL,0,'2020-08-05 05:14:06','2020-08-05 05:14:06'),(14,3,NULL,0,'2020-08-05 05:14:15','2020-08-05 05:14:15'),(15,3,NULL,0,'2020-08-05 05:14:36','2020-08-05 05:14:36'),(16,3,NULL,0,'2020-08-05 05:15:10','2020-08-05 05:15:10'),(17,3,NULL,0,'2020-08-05 05:15:39','2020-08-05 05:15:39'),(18,3,NULL,0,'2020-08-05 05:15:58','2020-08-05 05:15:58'),(19,3,NULL,0,'2020-08-05 05:16:06','2020-08-05 05:16:06'),(20,3,NULL,0,'2020-08-05 05:16:44','2020-08-05 05:16:44'),(21,3,NULL,0,'2020-08-05 05:16:55','2020-08-05 05:16:55'),(22,3,NULL,0,'2020-08-05 05:17:34','2020-08-05 05:17:34'),(23,3,NULL,0,'2020-08-05 05:19:09','2020-08-05 05:19:09'),(24,3,NULL,0,'2020-08-05 05:19:19','2020-08-05 05:19:19'),(25,3,NULL,0,'2020-08-05 05:19:52','2020-08-05 05:19:52'),(26,3,NULL,0,'2020-08-05 05:20:12','2020-08-05 05:20:12'),(27,3,NULL,1,'2020-08-05 05:20:49','2020-08-05 05:21:34'),(28,3,NULL,0,'2020-08-05 05:21:10','2020-08-05 05:21:10'),(29,3,NULL,1,'2020-08-05 05:21:35','2020-08-05 05:21:36'),(30,3,NULL,1,'2020-08-05 05:21:37','2020-08-05 05:21:39'),(31,3,NULL,1,'2020-08-05 05:21:40','2020-08-05 05:21:41'),(32,3,NULL,1,'2020-08-05 05:21:42','2020-08-05 05:21:43'),(33,3,NULL,1,'2020-08-05 05:21:44','2020-08-05 05:21:46'),(34,3,NULL,1,'2020-08-05 05:21:47','2020-08-05 05:21:49'),(35,3,NULL,0,'2020-08-05 05:21:51','2020-08-05 05:21:51'),(36,6,NULL,0,'2020-08-05 05:26:29','2020-08-05 05:26:29'),(37,6,NULL,1,'2020-08-05 05:26:45','2020-08-05 05:26:51'),(43,6,NULL,1,'2020-08-05 06:06:05','2020-08-05 06:06:13'),(44,4,NULL,0,'2020-08-05 06:09:56','2020-08-05 06:09:56');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `category_id` int unsigned NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hmotnost` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,1,'Hank Price','79','2020-08-04 14:30:51','2020-08-04 14:30:51'),(2,2,'Jackson Towne','3479965','2020-08-04 14:30:51','2020-08-04 14:30:51'),(3,2,'Chasity Shields','42687','2020-08-04 14:30:52','2020-08-04 14:30:52'),(4,9,'Ms. Meta Padberg','415475','2020-08-04 14:30:52','2020-08-04 14:30:52'),(5,6,'King Collier','88819248','2020-08-04 14:30:52','2020-08-04 14:30:52'),(6,3,'Emilie Johnston DVM','19787067','2020-08-04 14:30:52','2020-08-04 14:30:52'),(7,7,'Gilberto Wolf','7594058','2020-08-04 14:30:52','2020-08-04 14:30:52'),(8,0,'Llewellyn Hackett I','85','2020-08-04 14:30:52','2020-08-04 14:30:52'),(9,3,'Merlin Hahn','6587003','2020-08-04 14:30:52','2020-08-04 14:30:52'),(10,6,'Elian Reinger','48930123','2020-08-04 14:30:52','2020-08-04 14:30:52'),(11,8,'Prof. Kamron Jenkins II','2','2020-08-04 14:30:52','2020-08-04 14:30:52'),(12,0,'Nicolette Larson','1810479','2020-08-04 14:30:52','2020-08-04 14:30:52'),(13,1,'Miguel Pfeffer','74407','2020-08-04 14:30:52','2020-08-04 14:30:52'),(14,6,'Juvenal Greenholt','8','2020-08-04 14:30:52','2020-08-04 14:30:52'),(15,1,'Gail Cormier','7237504','2020-08-04 14:30:52','2020-08-04 14:30:52'),(16,3,'Dr. Haylie O\'Conner','2','2020-08-04 14:30:52','2020-08-04 14:30:52'),(17,6,'Martine Spinka DVM','59','2020-08-04 14:30:52','2020-08-04 14:30:52'),(18,2,'Mertie McKenzie','529848','2020-08-04 14:30:52','2020-08-04 14:30:52'),(19,1,'Nash Barrows','7498','2020-08-04 14:30:52','2020-08-04 14:30:52'),(20,1,'Ralph Farrell','78716','2020-08-04 14:30:52','2020-08-04 14:30:52'),(21,9,'Sherwood Roob','6409173','2020-08-04 14:30:52','2020-08-04 14:30:52'),(22,3,'Alta Balistreri','4492','2020-08-04 14:30:52','2020-08-04 14:30:52'),(23,3,'Prof. Megane Boehm Jr.','329633','2020-08-04 14:30:52','2020-08-04 14:30:52'),(24,3,'Magnus Ziemann','9930','2020-08-04 14:30:52','2020-08-04 14:30:52'),(25,0,'Prof. Garret Swaniawski III','25585477','2020-08-04 14:30:52','2020-08-04 14:30:52'),(26,1,'Eliza Welch','141007','2020-08-04 14:30:52','2020-08-04 14:30:52'),(27,5,'Herta Cassin','305551433','2020-08-04 14:30:52','2020-08-04 14:30:52'),(28,1,'Nona Dietrich','7803746','2020-08-04 14:30:52','2020-08-04 14:30:52'),(29,5,'Maye Kessler PhD','503','2020-08-04 14:30:52','2020-08-04 14:30:52'),(30,2,'Prof. Nikolas O\'Kon','23316','2020-08-04 14:30:52','2020-08-04 14:30:52'),(31,9,'Dr. Elvera Tromp','3592','2020-08-04 14:30:52','2020-08-04 14:30:52'),(32,3,'Miss Luisa Carroll','706558297','2020-08-04 14:30:52','2020-08-04 14:30:52'),(33,8,'Philip Roob','490','2020-08-04 14:30:52','2020-08-04 14:30:52'),(34,10,'Mr. Khalid Davis Sr.','344677','2020-08-04 14:30:52','2020-08-04 14:30:52'),(35,3,'Josianne Kreiger Jr.','46098853','2020-08-04 14:30:52','2020-08-04 14:30:52'),(36,10,'Nelda Price','61119','2020-08-04 14:30:52','2020-08-04 14:30:52'),(37,1,'Timmothy Weissnat','354590972','2020-08-04 14:30:52','2020-08-04 14:30:52'),(38,6,'Maxime Bashirian','55127563','2020-08-04 14:30:52','2020-08-04 14:30:52'),(39,7,'Velva Mohr','0','2020-08-04 14:30:52','2020-08-04 14:30:52'),(40,2,'Unique Quigley DVM','81250','2020-08-04 14:30:52','2020-08-04 14:30:52'),(41,10,'Ms. Hailie Tremblay','7','2020-08-04 14:30:52','2020-08-04 14:30:52'),(42,8,'Antonietta Schuppe','2','2020-08-04 14:30:52','2020-08-04 14:30:52'),(43,0,'Prof. Benton Beahan','9','2020-08-04 14:30:52','2020-08-04 14:30:52'),(44,9,'Dortha Lakin','799','2020-08-04 14:30:52','2020-08-04 14:30:52'),(45,6,'Keshaun Haag','63088004','2020-08-04 14:30:52','2020-08-04 14:30:52'),(46,10,'Yasmeen Nolan','55','2020-08-04 14:30:52','2020-08-04 14:30:52'),(47,7,'Demarco Wisoky','57465211','2020-08-04 14:30:52','2020-08-04 14:30:52'),(48,0,'Muhammad Dickens','1931','2020-08-04 14:30:52','2020-08-04 14:30:52'),(49,1,'Glen Murray','885584705','2020-08-04 14:30:52','2020-08-04 14:30:52'),(50,2,'Tamia Bosco','90990369','2020-08-04 14:30:52','2020-08-04 14:30:52'),(51,7,'Matt Lakin','407','2020-08-04 14:30:52','2020-08-04 14:30:52'),(52,6,'Russ Auer','75','2020-08-04 14:30:52','2020-08-04 14:30:52'),(53,4,'Bernita Dickinson','4','2020-08-04 14:30:52','2020-08-04 14:30:52'),(54,6,'Marilou Bernhard','31','2020-08-04 14:30:52','2020-08-04 14:30:52'),(55,10,'Cristal Morissette','8','2020-08-04 14:30:52','2020-08-04 14:30:52'),(56,6,'Webster Stroman','702','2020-08-04 14:30:52','2020-08-04 14:30:52'),(57,1,'Selena Jacobson','45','2020-08-04 14:30:52','2020-08-04 14:30:52'),(58,8,'Marcia Wisozk','66874988','2020-08-04 14:30:52','2020-08-04 14:30:52'),(59,7,'Vincent Hoeger','8409','2020-08-04 14:30:52','2020-08-04 14:30:52'),(60,9,'Reba Hodkiewicz','69645','2020-08-04 14:30:52','2020-08-04 14:30:52'),(61,10,'Dr. Germaine Kuphal IV','9106','2020-08-04 14:30:52','2020-08-04 14:30:52'),(62,7,'Kaylie Cremin Sr.','44481661','2020-08-04 14:30:52','2020-08-04 14:30:52'),(63,5,'Woodrow Metz','68570981','2020-08-04 14:30:52','2020-08-04 14:30:52'),(64,7,'Elta Koss','61','2020-08-04 14:30:52','2020-08-04 14:30:52'),(65,3,'Miss Lonie Roberts','44','2020-08-04 14:30:52','2020-08-04 14:30:52'),(66,8,'Audreanne Jast','89006','2020-08-04 14:30:52','2020-08-04 14:30:52'),(67,8,'Bailey Ryan','7744','2020-08-04 14:30:52','2020-08-04 14:30:52'),(68,10,'Korey Mante MD','902044135','2020-08-04 14:30:52','2020-08-04 14:30:52'),(69,2,'Karlee Ledner','996196741','2020-08-04 14:30:52','2020-08-04 14:30:52'),(70,2,'Ryder Tillman','2','2020-08-04 14:30:52','2020-08-04 14:30:52'),(71,5,'Dovie Emmerich','2726','2020-08-04 14:30:52','2020-08-04 14:30:52'),(72,4,'Mrs. Juliet Rogahn','821','2020-08-04 14:30:52','2020-08-04 14:30:52'),(73,6,'Marianne Rosenbaum','30108','2020-08-04 14:30:52','2020-08-04 14:30:52'),(74,2,'Bud Schinner','4754390','2020-08-04 14:30:52','2020-08-04 14:30:52'),(75,3,'Ned Gleichner DVM','5501','2020-08-04 14:30:52','2020-08-04 14:30:52'),(76,7,'Christ Gislason I','6','2020-08-04 14:30:52','2020-08-04 14:30:52'),(77,10,'Prof. Tobin Cruickshank','13427811','2020-08-04 14:30:52','2020-08-04 14:30:52'),(78,7,'Eleonore Macejkovic','23','2020-08-04 14:30:52','2020-08-04 14:30:52'),(79,3,'Prof. Jasper Ratke','34','2020-08-04 14:30:52','2020-08-04 14:30:52'),(80,10,'Dr. Frances Gerlach DVM','537094103','2020-08-04 14:30:52','2020-08-04 14:30:52'),(81,0,'Amya Padberg PhD','445650','2020-08-04 14:30:52','2020-08-04 14:30:52'),(82,2,'Prof. Cassie Frami II','6156837','2020-08-04 14:30:52','2020-08-04 14:30:52'),(83,10,'Grady Simonis V','29946253','2020-08-04 14:30:52','2020-08-04 14:30:52'),(84,2,'Jace Fay','5075226','2020-08-04 14:30:52','2020-08-04 14:30:52'),(85,8,'Kathryne Feeney','80','2020-08-04 14:30:52','2020-08-04 14:30:52'),(86,4,'Audie Wehner','99484','2020-08-04 14:30:52','2020-08-04 14:30:52'),(87,0,'Delmer Blick','767429561','2020-08-04 14:30:52','2020-08-04 14:30:52'),(88,0,'Letha Osinski','25684177','2020-08-04 14:30:52','2020-08-04 14:30:52'),(89,0,'Milton Ruecker','52','2020-08-04 14:30:52','2020-08-04 14:30:52'),(90,9,'Lisandro Stracke','428412662','2020-08-04 14:30:52','2020-08-04 14:30:52'),(91,7,'Lavon Ankunding II','32966','2020-08-04 14:30:52','2020-08-04 14:30:52'),(92,4,'Loy Marvin','73601441','2020-08-04 14:30:52','2020-08-04 14:30:52'),(93,2,'Dr. Hazle Beahan IV','5','2020-08-04 14:30:52','2020-08-04 14:30:52'),(94,2,'Dr. Donny Kunze III','14','2020-08-04 14:30:52','2020-08-04 14:30:52'),(95,0,'Mr. Willy Jast II','36884','2020-08-04 14:30:52','2020-08-04 14:30:52'),(96,2,'Cora Bauch','862841453','2020-08-04 14:30:52','2020-08-04 14:30:52'),(97,0,'Jasmin Hegmann','3495','2020-08-04 14:30:52','2020-08-04 14:30:52'),(98,7,'Emerald Crooks','3930','2020-08-04 14:30:52','2020-08-04 14:30:52'),(99,1,'Ali Kirlin MD','4','2020-08-04 14:30:52','2020-08-04 14:30:52'),(100,9,'Benton Raynor','71','2020-08-04 14:30:52','2020-08-04 14:30:52');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(66) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'developer','2020-08-04 14:30:51','2020-08-04 14:30:51'),(2,'admin','2020-08-04 14:30:51','2020-08-04 14:30:51'),(3,'author','2020-08-04 14:30:51','2020-08-04 14:30:51'),(4,'user','2020-08-04 14:30:51','2020-08-04 14:30:51');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `role_id` int DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  UNIQUE KEY `users_phone_unique` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,1,'kudlickatomas95@gmail.com','607061065','2020-08-04 14:30:51','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','4hLaQ1Vg88','2020-08-04 14:30:51','2020-08-04 14:30:51'),(2,2,'owner@owner.com','600500500','2020-08-04 14:30:51','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','NdvHb6FGfC','2020-08-04 14:30:51','2020-08-04 14:30:51'),(3,NULL,'hunter84@example.com','+1 (329) 589-1346','2020-08-04 14:30:51','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','bHyHyWAQti','2020-08-04 14:30:51','2020-08-04 14:30:51'),(4,NULL,'madonna.moore@example.net','440-945-7356 x856','2020-08-04 14:30:51','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','3Qni5uAUVR','2020-08-04 14:30:51','2020-08-04 14:30:51'),(5,NULL,'faustino.homenick@example.org','568-313-5241 x501','2020-08-04 14:30:51','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','tsMEfbLPiS','2020-08-04 14:30:51','2020-08-04 14:30:51'),(6,NULL,'ngreen@example.org','339-706-5648','2020-08-04 14:30:51','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','OwNHaoCIBe','2020-08-04 14:30:51','2020-08-04 14:30:51'),(7,NULL,'wgleichner@example.com','1-772-298-6833 x821','2020-08-04 14:30:51','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','f5Ka5NbBPi','2020-08-04 14:30:51','2020-08-04 14:30:51'),(8,NULL,'sanford.beryl@example.com','201-950-3817','2020-08-04 14:30:51','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','42jRKlNUoj','2020-08-04 14:30:51','2020-08-04 14:30:51'),(9,NULL,'jewell76@example.com','1-256-410-7209 x67105','2020-08-04 14:30:51','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','lYc2FjxH9s','2020-08-04 14:30:51','2020-08-04 14:30:51'),(10,NULL,'bkassulke@example.com','791-640-1087 x882','2020-08-04 14:30:51','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','eEEP8Ar9BM','2020-08-04 14:30:51','2020-08-04 14:30:51'),(11,NULL,'sanford.camylle@example.com','1-441-830-6542','2020-08-04 14:30:51','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','q7jLiMF75U','2020-08-04 14:30:51','2020-08-04 14:30:51'),(12,NULL,'keegan34@example.net','(919) 309-8041 x24456','2020-08-04 14:30:51','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','FnlNRCPtvt','2020-08-04 14:30:51','2020-08-04 14:30:51');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `websockets_statistics_entries`
--

DROP TABLE IF EXISTS `websockets_statistics_entries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `websockets_statistics_entries` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `app_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `peak_connection_count` int NOT NULL,
  `websocket_message_count` int NOT NULL,
  `api_message_count` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `websockets_statistics_entries`
--

LOCK TABLES `websockets_statistics_entries` WRITE;
/*!40000 ALTER TABLE `websockets_statistics_entries` DISABLE KEYS */;
/*!40000 ALTER TABLE `websockets_statistics_entries` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-05 11:02:10
