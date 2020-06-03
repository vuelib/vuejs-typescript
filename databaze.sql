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
-- Table structure for table `amount_order`
--

DROP TABLE IF EXISTS `amount_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `amount_order` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `amount_id` int unsigned NOT NULL,
  `order_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `amount_order_order_id_foreign` (`order_id`),
  CONSTRAINT `amount_order_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amount_order`
--

LOCK TABLES `amount_order` WRITE;
/*!40000 ALTER TABLE `amount_order` DISABLE KEYS */;
INSERT INTO `amount_order` VALUES (25,25,3),(26,26,3),(27,27,3),(28,28,3),(29,29,3),(37,37,5),(38,38,5),(39,39,5),(40,40,5),(41,41,5),(42,42,6),(43,43,7),(44,44,8),(45,45,9),(46,46,10),(47,47,11),(48,48,12),(49,49,13),(50,50,13),(51,51,13),(52,52,13),(53,53,13),(54,54,13),(55,55,11),(56,56,9),(57,57,9),(58,58,9),(59,59,9),(60,60,9),(61,61,9),(62,62,14),(63,63,15),(64,64,16),(65,65,17),(66,66,18),(67,67,19),(68,68,20),(69,69,21),(70,70,22),(71,71,23),(72,72,24),(73,73,25),(74,74,26),(75,75,27),(76,76,28),(77,77,29),(78,78,23),(79,79,23),(80,80,23),(81,81,24),(82,82,24),(83,83,23),(84,84,30),(85,85,23),(86,86,23);
/*!40000 ALTER TABLE `amount_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `amounts`
--

DROP TABLE IF EXISTS `amounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `amounts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int unsigned NOT NULL,
  `mnozstvi` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `edit` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amounts`
--

LOCK TABLES `amounts` WRITE;
/*!40000 ALTER TABLE `amounts` DISABLE KEYS */;
INSERT INTO `amounts` VALUES (3,3,'5',0,'2020-04-23 13:14:27','2020-04-23 13:14:27'),(4,4,'5',0,'2020-04-23 13:14:27','2020-04-23 13:14:27'),(18,1,'5',0,'2020-04-23 13:18:07','2020-04-23 13:18:07'),(19,2,'5',0,'2020-04-23 13:18:07','2020-04-23 13:18:07'),(20,3,'8',0,'2020-04-23 13:18:08','2020-04-23 13:18:08'),(21,4,'5',0,'2020-04-23 13:18:08','2020-04-23 13:18:08'),(22,5,'5',0,'2020-04-23 13:18:08','2020-04-23 13:18:08'),(23,6,'5',0,'2020-04-23 13:18:08','2020-04-23 13:18:08'),(24,7,'5',0,'2020-04-23 13:18:08','2020-04-23 13:18:08'),(25,1,'5',0,'2020-04-23 13:26:06','2020-04-23 13:26:06'),(26,2,'5',0,'2020-04-23 13:26:06','2020-04-23 13:26:06'),(27,3,'5',0,'2020-04-23 13:26:06','2020-04-23 13:26:06'),(28,4,'5',0,'2020-04-23 13:26:06','2020-04-23 13:26:06'),(29,5,'5',0,'2020-04-23 13:26:06','2020-04-23 13:26:06'),(34,1,'55',0,'2020-04-23 13:27:02','2020-04-23 13:27:02'),(35,2,'5',0,'2020-04-23 13:27:02','2020-04-23 13:27:02'),(36,3,'5',0,'2020-04-23 13:27:02','2020-04-23 13:27:02'),(37,1,'11',0,'2020-04-24 15:53:05','2020-04-24 15:53:54'),(38,2,'5',0,'2020-04-24 15:53:05','2020-04-24 15:53:05'),(39,3,'5',0,'2020-04-24 15:53:05','2020-04-24 15:53:05'),(40,4,'5',0,'2020-04-24 15:53:05','2020-04-24 15:53:05'),(41,5,'5',0,'2020-04-24 15:53:05','2020-04-24 15:53:05'),(42,1,'1',0,'2020-04-26 12:47:32','2020-04-26 12:47:32'),(43,1,'5',0,'2020-04-26 12:48:53','2020-04-26 12:48:53'),(44,1,'5',0,'2020-04-26 12:49:44','2020-04-26 12:49:44'),(46,1,'5',0,'2020-04-26 12:50:56','2020-04-26 12:50:56'),(48,1,'5',0,'2020-04-26 12:51:44','2020-04-26 12:51:44'),(54,1,'622',0,'2020-04-26 12:54:31','2020-04-26 12:54:31'),(55,1,'5',0,'2020-04-26 12:55:35','2020-04-26 12:55:35'),(61,1,'5',0,'2020-04-26 14:16:24','2020-04-26 14:16:24'),(62,1,'11',0,'2020-04-26 14:16:35','2020-04-26 14:16:35'),(63,1,'5',0,'2020-04-26 14:17:32','2020-04-26 14:17:32'),(64,1,'5',0,'2020-04-26 14:17:59','2020-04-26 14:17:59'),(65,1,'7',0,'2020-04-26 14:20:00','2020-04-26 14:27:46'),(66,1,'5',0,'2020-04-26 14:27:51','2020-04-26 14:27:51'),(67,1,'5',0,'2020-04-26 14:30:26','2020-04-26 14:30:26'),(68,1,'5',0,'2020-04-26 14:30:52','2020-04-26 14:30:52'),(69,1,'5',0,'2020-04-26 14:31:00','2020-04-26 14:31:00'),(70,1,'5',0,'2020-04-26 14:54:04','2020-04-26 14:54:04'),(73,1,'5',0,'2020-04-26 15:42:48','2020-04-26 15:42:48'),(74,1,'25',0,'2020-04-26 15:43:30','2020-04-26 15:43:30'),(75,1,'5',0,'2020-04-26 15:45:22','2020-04-26 15:45:22'),(76,1,'57',0,'2020-04-26 15:45:28','2020-05-21 07:36:51'),(77,1,'558',0,'2020-04-26 15:45:35','2020-05-20 07:25:56'),(82,1,'55',0,'2020-04-30 17:53:29','2020-04-30 17:53:29'),(84,1,'11',0,'2020-04-30 17:56:33','2020-05-20 07:49:14'),(86,1,'88',0,'2020-05-20 07:51:54','2020-05-20 07:51:54'),(88,1,'5',0,'2020-05-21 09:31:45','2020-05-21 09:31:45');
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
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagePath` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `categories_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Test','/images/1587912020.jpeg','2020-04-23 11:57:28','2020-05-20 07:48:59'),(38,'testt','/images/1587922923.webp','2020-04-26 12:41:00','2020-04-26 15:42:03');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `channelpackagechannels`
--

DROP TABLE IF EXISTS `channelpackagechannels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `channelpackagechannels` (
  `package` int NOT NULL,
  `channel` varchar(100) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `multiscreen` tinyint NOT NULL DEFAULT '1',
  `ott` tinyint NOT NULL DEFAULT '1',
  `timeshift` tinyint NOT NULL DEFAULT '1',
  `timeshiftAvailable` int DEFAULT NULL,
  PRIMARY KEY (`package`,`channel`),
  KEY `I_channel` (`channel`),
  CONSTRAINT `ChannelPackageChannels_ibfk_1` FOREIGN KEY (`package`) REFERENCES `channelpackages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ChannelPackageChannels_ibfk_2` FOREIGN KEY (`channel`) REFERENCES `channels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `channelpackagechannels`
--

LOCK TABLES `channelpackagechannels` WRITE;
/*!40000 ALTER TABLE `channelpackagechannels` DISABLE KEYS */;
/*!40000 ALTER TABLE `channelpackagechannels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `channelpackages`
--

DROP TABLE IF EXISTS `channelpackages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `channelpackages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `active` tinyint NOT NULL DEFAULT '1',
  `name` varchar(150) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `type` enum('package','bundle','extern','') CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL DEFAULT 'package',
  `provider` int NOT NULL,
  `shortname` varchar(25) CHARACTER SET utf8 COLLATE utf8_czech_ci DEFAULT NULL,
  `condition` mediumtext CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `description` mediumtext CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `parent` int DEFAULT NULL,
  `public` tinyint NOT NULL DEFAULT '0',
  `forUsers` tinyint NOT NULL DEFAULT '0',
  `offering` tinyint NOT NULL DEFAULT '0',
  `reporting` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `shortname` (`shortname`),
  KEY `provider` (`provider`),
  KEY `parent` (`parent`),
  CONSTRAINT `ChannelPackages_ibfk_1` FOREIGN KEY (`parent`) REFERENCES `channelpackages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `channelpackages`
--

LOCK TABLES `channelpackages` WRITE;
/*!40000 ALTER TABLE `channelpackages` DISABLE KEYS */;
/*!40000 ALTER TABLE `channelpackages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `channels`
--

DROP TABLE IF EXISTS `channels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `channels` (
  `id` varchar(100) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `active` tinyint NOT NULL DEFAULT '1',
  `type` varchar(20) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `epgProvider` int DEFAULT NULL,
  `epgProviderId` varchar(25) CHARACTER SET utf8 COLLATE utf8_czech_ci DEFAULT NULL COMMENT 'SID v multiplexu',
  `order` int NOT NULL DEFAULT '1000',
  `testing` tinyint NOT NULL DEFAULT '0',
  `public` tinyint NOT NULL DEFAULT '1',
  `availability` varchar(15) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL DEFAULT 'cable',
  `parentLock` tinyint NOT NULL DEFAULT '0',
  `malfunction` varchar(20) CHARACTER SET utf8 COLLATE utf8_czech_ci DEFAULT NULL,
  `timeshiftDuration` int NOT NULL DEFAULT '0',
  `timeshiftAvailable` int NOT NULL DEFAULT '0',
  `timeshiftBeforeEvent` int NOT NULL DEFAULT '0',
  `timeshiftAfterEvent` int NOT NULL DEFAULT '0',
  `drm` tinyint NOT NULL DEFAULT '0',
  `audio` varchar(16) CHARACTER SET utf8 COLLATE utf8_czech_ci DEFAULT NULL,
  `message` varchar(255) CHARACTER SET utf8 COLLATE utf8_czech_ci DEFAULT NULL,
  `channelGroup` varchar(15) CHARACTER SET utf8 COLLATE utf8_czech_ci DEFAULT NULL,
  `description` varchar(500) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL DEFAULT '',
  `hd` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `I_type` (`type`),
  KEY `epgProvider` (`epgProvider`),
  KEY `channelGroup` (`channelGroup`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `channels`
--

LOCK TABLES `channels` WRITE;
/*!40000 ALTER TABLE `channels` DISABLE KEYS */;
/*!40000 ALTER TABLE `channels` ENABLE KEYS */;
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
  `nazev` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ulice` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mesto` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `psc` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `zeme` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ic` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dic` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
INSERT INTO `invoices` VALUES (3,'Vodafone Czech Republic a.s.','náměstí Junkových 2808','Praha','15500','Česká republika','25788001','CZ25788001','2020-04-23 16:30:04','2020-04-23 16:30:04'),(7,'4G consite s.r.o.','Šlikova 406','Praha','16900','Česká republika','27624218','CZ27624218','2020-04-24 15:52:35','2020-04-24 15:52:35'),(3,'Statutární město Brno','Dominikánské náměstí 196','Brno','60200','Česká republika','44992785','CZ44992785','2020-04-23 13:14:19','2020-04-23 13:14:19'),(13,'Iveta Šotolová','U Kostelíčka 1075','Česká Třebová','56002','Česká republika','61209121','0','2020-05-21 09:05:33','2020-05-21 09:05:33'),(3,'Městská část Praha 1','Vodičkova 681','Praha','11000','Česká republika','63410','CZ00063410','2020-04-23 16:27:01','2020-04-23 16:27:01'),(1,'Miroslav Šotola','Krumpach 1954','Zábřeh','78901','Česká republika','64963021','CZ6005080356','2020-04-23 12:19:19','2020-04-23 12:19:19');
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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2016_06_01_000001_create_oauth_auth_codes_table',1),(4,'2016_06_01_000002_create_oauth_access_tokens_table',1),(5,'2016_06_01_000003_create_oauth_refresh_tokens_table',1),(6,'2016_06_01_000004_create_oauth_clients_table',1),(7,'2016_06_01_000005_create_oauth_personal_access_clients_table',1),(8,'2019_08_19_000000_create_failed_jobs_table',1),(9,'2020_02_11_123944_create_products_table',1),(10,'2020_02_11_124058_create_categories_table',1),(11,'2020_02_12_082717_create_invoices_table',1),(12,'2020_02_12_082813_create_amounts_table',1),(13,'2020_02_12_082848_create_orders_table',1),(14,'2020_04_24_180501_create_websockets_statistics_entries_table',2);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
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
INSERT INTO `oauth_access_tokens` VALUES ('49b026882fe41155c63b33b492c56445173be78ee291ca629f7ab84d0974581db6f39cc50ba35e36',7,2,NULL,'[\"*\"]',0,'2020-04-26 12:04:17','2020-04-26 12:04:17','2021-04-26 14:04:17'),('93047a75b1ea1b2f9380f3759fac113c845d7cd6c3c65f6df01b8c564d499219b3a17c467c71b507',3,2,NULL,'[\"*\"]',0,'2020-04-26 15:42:41','2020-04-26 15:42:41','2021-04-26 17:42:41');
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_clients`
--

LOCK TABLES `oauth_clients` WRITE;
/*!40000 ALTER TABLE `oauth_clients` DISABLE KEYS */;
INSERT INTO `oauth_clients` VALUES (1,NULL,'Donne Personal Access Client','18dEUSLBa2nUb7v4yoKe9UcLhKqq4wBJvQSGn4Kr','http://localhost',1,0,0,'2020-04-23 12:00:30','2020-04-23 12:00:30'),(2,NULL,'Donne Password Grant Client','fVIf7QZs1AiAwKOab0UACblWJr2w7LqES7NPfTaR','http://localhost',0,1,0,'2020-04-23 12:00:30','2020-04-23 12:00:30'),(3,NULL,'Donne Personal Access Client','fTPaeYEmeLOl8bGcDyU0qDXR0xsqK5TdIXSvDcXA','http://localhost',1,0,0,'2020-04-26 09:58:37','2020-04-26 09:58:37'),(4,NULL,'Donne Password Grant Client','KNFWKcDwd5vZx8quxteg7ZKvZ1dmtMelt9gOZciU','http://localhost',0,1,0,'2020-04-26 09:58:37','2020-04-26 09:58:37');
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_personal_access_clients`
--

LOCK TABLES `oauth_personal_access_clients` WRITE;
/*!40000 ALTER TABLE `oauth_personal_access_clients` DISABLE KEYS */;
INSERT INTO `oauth_personal_access_clients` VALUES (1,1,'2020-04-23 12:00:30','2020-04-23 12:00:30'),(2,3,'2020-04-26 09:58:37','2020-04-26 09:58:37');
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
INSERT INTO `oauth_refresh_tokens` VALUES ('016b37cb7e90896bdae1748e33e35db6a0aa03eb648de2c654bbc7630f56af62798e922dd9f0181b','93047a75b1ea1b2f9380f3759fac113c845d7cd6c3c65f6df01b8c564d499219b3a17c467c71b507',0,'2021-04-26 17:42:41'),('02381236fbecca5efb3da739e6f97088b7ecef90c2683d9846bcf0dfa651ccdb0f6eac1e5f5f1b6c','e38bed71f3f5b41fc24894e38364151dc1a3bc4b4b0976472873dc72e0ef446e93d9c0247fa4b98c',0,'2021-04-23 15:04:46'),('0570e5d57e67dc9d7170c8bdf95c45bac3c929f347adce68d825a7b6748f29403554a5a497771d22','edfc26434b671297d68c456f5ddffbb1c7fcb89703a669bcc8f8a9d69c2e5d06f4164a9a379c639a',0,'2021-05-21 10:44:13'),('068905798727c29c88eeee8fda93a735998fbd0488afca137f9ed881ae4d03dfd43722f7670376e0','2ab4e0a04e0be5b2cd65ff854bcc0cac69d1a6e4838d9fdba3dd0296e5c780b49f0fcd2dee9094e1',0,'2021-04-29 19:16:06'),('077d4fdfd58d8e3389c3c3056c2b43372efca86e1491aadbd8746fea95f4cfdbb18e7569bd83c436','84600f5df82a014ebea1cf866fa704503bb87eeea05c621995f432af79773ff2bf957b279e7c5f99',0,'2021-04-24 17:23:11'),('07f78f20ed0492780b67bf81f8d548e6ea1432d1136cf1df82b093a1549ddcbe77f2a85cae4214df','5cd4955e9ea8cdd8c94e258618ca2afa101d485d7dcedd7a96992dc795b6db805ece170db47d0d15',0,'2021-04-24 17:52:58'),('098e9cb6c48046e96ca7540f3490e0a82bd41f550b2c9bce2e1116a2aafa01fe76218871de875623','9c49f5cc4566fcf6ec22ff69a48f37b6676a60f42b0802e5c2b06f8321fcf7839eea7acecc17158b',0,'2021-05-21 10:47:50'),('0b9977f2f47569664f1a11ed5478cf0f6cf13ba815299508ffd2db8209e3133c74ce63a2ef79881a','7a15b5495ce0cdf814fcd8e248c81fa4549e17f8998cc87e9253f7e74097a5a3aba4f0abc18554ea',0,'2021-05-21 10:45:13'),('0e74d270c271864bd8a5b2806cf99d5f1dbfa1c62b0367a9b3766aa331d64cad95ba25b0e568b78f','d733f8a7c07613b9af31725ca216888fbb3d62e18ea3fc4c149150fa18213650fce7fe23c9390718',0,'2021-04-23 14:38:46'),('110c0ab9a44febcd03849fea59f5e9a97c7835ced76d3e00af320cb976aaa87be1de1a91c563a4db','2665a35ebffeeb1a822c28d32d2a446544e7080ff3e56801e6a5459b7ab0be4b5b29690a9870d2b5',0,'2021-05-21 10:37:30'),('1695c4078a16a8c0439e080ca82ae2d1328bd94162a0837bb51056eecf893848372698bb3e77d104','49b026882fe41155c63b33b492c56445173be78ee291ca629f7ab84d0974581db6f39cc50ba35e36',0,'2021-04-26 14:04:17'),('1b220f30388910593bec159296d6984e8984fa6795b206e26168a87bd38f304702a07300209a084f','e33bef2529faaa5ef81c527df658a7b3ef043c7708cd5d9888d00a5ebed311c00b47f66fb42eeb5f',0,'2021-05-20 09:24:00'),('2077b6b3a4c8f5dc5bafbad4d66d2fc3e28e7e78547ce9d4c28b69e605d18427e1f08f30d45f16d9','553dbf31ab4e6853c044109c13dca9cac2bf773128accb1d77ff9149d38b330e73df1d5128e9e460',0,'2021-04-23 14:29:51'),('21ad5af0109e8552fe2acf1f291a50dc1437dcaa194e57f5ae534743bb22317a83f2837ceac05740','cc6fcaaadebfcd71d805614a28dda6d9ac0a09021c9c86d1ce0964d62467af9e1c956e060226126d',0,'2021-04-29 19:16:45'),('23f8cb9c56ecf72f0bf9a535a8c0a17ae63e444b89d09a7b6cc4afe72654218bec873f8e2ac6110c','985d4e60271d3863d7bb2b751d00eaa4c126e69204e9c3cc8ba04ca4d1505cdfd904687710fde394',0,'2021-04-26 10:54:22'),('24001e5025acf63fe1ea213fcdf454cf024eae187ecafbb09628fa3ff961b33286dd997a75b0bf8f','f0d66a118977ac61f840fbd7ed50362493d0b5ab66efb73a29a1a4bc45ee6eb582645daab1189a4b',0,'2021-04-26 10:52:46'),('26183fb28d7a6bf47592fcf7415c509c568bfc3bf9c3e2d70781f848219afc2182008bd0e371ffa7','e47e6d43128ab8688d26037a151a391e0978715884dc9a0d55c56198a2eede45977886afcb90a2d3',0,'2021-05-21 10:38:59'),('276535998875177f4a5c8674c52b69192dfb37ac36d7b15a5d56d1a54422ef945dca316ae2386116','02b2c2034199fae717d46cb4bcc442fe965b1c5a867722f33e63ced63d15388e5dc781bb102a082f',0,'2021-05-21 10:35:06'),('330d26ec48fba588d5d204e2f9eda86feb5c7ccc1021e92f443f2dbe60c49b16e9614c2dfb43bdb3','fe9447ed95349e09bf3d38eddeff7256eb33d941e71b6ed86dc389ac1f683dcdc4386a3d9dba9359',0,'2021-05-20 09:25:35'),('39b40938d0f6f536e0e00234a27277f6b6a81b216155dab0732ae0d0e4267e416369ba3f5474797e','d76c5a0dc071d3862ff33b365f42a87ba082419f1fc20d945e15e2ef83e0731bd4a86f580042259e',0,'2021-05-21 10:11:49'),('3ad87cc5659c33caaf01cabb5252a5ba4a432c7554dec870422cc9f7f2b4612d23e845446544cd1e','9cf89a2f194daa5dac862308e0c87fe0ef5cd033d05e631479a97566a6233ba232fabca907d08684',0,'2021-04-23 15:13:06'),('3bebb731fe6defb9cc134b27e1e2263f3d73504ae0f6ff25038262778bdae4bfd5fad720d59ccebe','3ea438f53630e8d2ccc5522cf83fe8f841d542b7c8b767f2af690c2bab7b73363de3e5b1b3cf395f',0,'2021-04-24 17:52:03'),('3e66ec7368c6ad08fb301b6220515c42cd1736dbc1e7ee439afabd02b6045caad432ecd5215f5587','793c91f8ab1742f3e5654a7722306c58bb3eafe873289409feedbac499b92fdd5c78d625f5deb809',0,'2021-05-20 09:31:27'),('458aa5c1e68e031e5b01cc27024f3d383cce3cf4b2b64d8afb19ca8d7cb33404509b9185a030847e','ac361146eeb925bfbb37fe7b41c232cb6621c3f59cb73288d0c55ab68646805cf0e444b25de7ab54',0,'2021-04-26 13:24:15'),('45e5d8b6347f36a28af21b0575b994f5c21c2472e9efe3523a76b3f65b922129b889478f27f746a4','dd2073edb71c5b12cf5db9c8a3ad2e1a480c0d6881a9a490a6d80345c4519696803ce8b58e2aba46',0,'2021-04-23 15:13:23'),('46474aa048e43096098e4f011d0a372c6f0c853a47463452bf942a9d924e08a3da16913528edace1','5cccf69533d12758ed7995f0cddc9ea7fe0ae003dd19a3675c6eba5327cf7c7542b3c353adec0e72',0,'2021-04-26 14:47:28'),('53447b929687e45395d48e5600678cd8b73b19cb343b8a242da5f9a5599fb3a40ce5f829cd64e08f','06bd6b6515f2cef06c3d8fb3c95c56a1871b9300968b5777028b6bc3fd29abce3094baa7ed836b1f',0,'2021-04-26 11:48:13'),('540724ee61f5e0a68fe335c966547fed1f9c32ac69b0a33d0a81baefe26cf63bdf2f5559d377abc7','526fd46cb2b9bbf2fceb9065afe10e5a7fe9b29b0ae88a7c937e8e3a17c2ad155db606a00d49aac0',0,'2021-04-23 14:27:34'),('54972ce39d5efbe01bc0ece01a7d16d310ef2cb6ada322620ac2ddc7d2afacebf50e02e1a8a08b05','3c6ea36ed5c8badeae0d6512a4cc7edea1af9a6844b92bf3a9344e5cb115ab3b38d807e66762fb2b',0,'2021-04-23 14:36:47'),('55e55dba32a49b23314bc88aaf0e0cd8bf8c4c1cf13817054bae077654526e33c5a91e786a6367dd','dfe621c4374d902b51a5643ada145e3d1e5fc7ca3dd33688dac8ed2cbe98f77fd6221c11d2bae74c',0,'2021-05-21 10:44:59'),('56a37bb89fa02f408a6e7efc6fdbbd625dd05ee7f506e25ee4dd0b3feb78f795832f43c65c997607','b21a1343bd1799a7b15fd816d9257ff20199420ba93f54ae510a82ed318cd1d8d58ef9205d342f88',0,'2021-05-21 11:46:44'),('58f04d8aefb686d389b2fd3004b776d2db7efa64521c7ca8b625a5e892e6b03a7b4ae7b66d24eff7','9f26fc24e92e47db4d4da407cd2e631027475357a2579c2ee2dd1af9ed55fa984d83b66a5a00d7ec',0,'2021-04-23 14:31:04'),('5b38beae2267ed0dab0732638450ab6144cd6316e618cc969cad965fcf2a9cb9c0242e79030f6798','7cbcbb6094ba1bf2e5dc957877d43172522cdeeda946c24ffbbc5bb902cb33276053622f214136dd',0,'2021-04-24 17:50:52'),('5c64c8dafb75446481d51f05234aa3f4f2f7a3c32f1f2bbbbf02f17f16001fa9be2e6ac52da90cdf','7820d46f552218bfc2647d7efbffe1c7dc1565a7660869e4fd81f68af4a7504bd01f67b10491ca06',0,'2021-05-20 09:27:20'),('5d3608697c8d16a418ef0b7bcad6b56f89db3455619ba8645b6cdb5b5315e72d7e11d3a116fd23fc','9cd0bea7ff3257456f4c6301c146bdceb630aa7c7bf36174783fa56da70121fdc3035e56b6f0173f',0,'2021-04-23 15:12:57'),('5f655fcd4c708f2c24dd981aba5270782b9fab98e0d5cae24daf5c6ae4f5822c28791e9cb8c00ab0','70ad9120cc61f2cf6d834989cbd63f44e7038242b1a2584418f873fd579e7f38211d6bc2fe436dcc',0,'2021-05-21 11:47:08'),('5fce04bb1d01f7532386c028a0d76df45abef49b0aaa84cd93113dc1fef58bc989c46c486ad539c7','12071c4168188f78adff02a069b7e6c589afae6190c4da34fbf4bf75afc7185b2b67c5b6d219a166',0,'2021-04-24 17:21:20'),('62de98551e6dd2e61c67e6281151f44ee5ef9a7e74d32de6529d171bea7af258b46618eb9d798c53','7b8d4262318ca5cf2e2ed3678b56700e5ce2b04a1bff2808bb3c5f31df9298015319a1a2ee70f112',0,'2021-04-23 14:35:54'),('6701d5d29fd075069a3cedf0ce454550e876ba0d7adcffa8e55c8b128f7b54a5fdd0dde39b769079','cd966d769b4f8ecef34da4e5ed8ed69a78a26aabfa37d8c863f160abf2f90b44ae54044b56b5212a',0,'2021-05-20 09:31:36'),('681bb61a6845c02d77b37baabde4571bd0767e0a2557394134f8b457e4f7322a8a2394101d4530c1','1cf0f3dbca7f93e6d099eee651677467051c02d2eeb8406853efef221c49fa6cbb1da653c2c80b4c',0,'2021-04-23 15:10:22'),('68e170d5d91196238de7afbcd67aaa084609437c3618e3dbdb99720fdb6fba31c4d8dce0acf6a64d','42312547cbac1976655bfeabe7b0e4a89f1e63572be16a3d5188aa00d57d6263d5d47da1a2035a14',0,'2021-04-23 15:10:46'),('6bfed5418a98bd65f48a839049b9d27c55ab5de1d1066ba856e07bf00298b87405379a79bc8c78de','a2fc1b52b8dbddef3ce9ebc07e2f60f38852d6b1123b62e3b0be0d2528a660e10c8ecf93ba48a08f',0,'2021-04-23 14:32:40'),('707814e92513d95d2efaae089ba1ebf3289cf060a8ed9b899035bd3824c037552ce28676c53f497f','c8021ff0fb81cb288d97c57390de615e1f6dbcdfd3e9e50fe3609279d92371b7cd0ce7ea7a67a6c3',0,'2021-05-21 09:58:33'),('75a97f16422e3fe0df28fef67e1860468601a55af1acf05be8bd71b020c70b76f689f51b90af559c','a2693222ab32e8ee39f48ed6db2d74dba273ab7c24791eba5db89c7fb4350ed8c2f47102ed68faa1',0,'2021-04-23 15:17:55'),('76d222157553da0ca1e39366c9f65f8245e63dcfce36d2587da84a5ddccbfbf991e48bb6d1045ccb','1a125857f7f145a70b5893bdf168f81e7f15baa3cf75b6afbdae784b86f0facdbaf6aa9a653e7d50',0,'2021-04-23 15:12:15'),('7704cbdfc10a5b8ff2b81db9a1a5efc61a930074bfce6c9dca5f3f28b979895aece65cbf677a761a','d2cb53d0670e8e2c1f0d5c8870e029452725dfb34fd20ae4bd64020b740a19dfbe6205be85d35f75',0,'2021-05-21 11:47:25'),('795d9c5d646d6ee517afb5f74f456e5e23e62e7ef0076277e158ccc442564300e402d4b75693f125','d64db6e16009f87c9592e6ffccb417efbe8c8f3383519b8da506a63da100a723689a410572c62582',0,'2021-04-23 15:28:43'),('7b9eabea9816560addd5260d944274ac42f815f0afee7c64462922508c9266e3e8562d69c823b47e','92c658f7452fefb0e9d85442553bbd93c6cd62d614f9bf7ffe91ecba5b0291fc6f176e54e1c21198',0,'2021-04-26 16:53:43'),('7ba6524efb61fec96aed9dc622b606a42760ae70a4e83fd8d5c3cf1afd8815acee321dcd7619d226','d1b9b1ae1e0bd136b4a45a8e0b0ee6c76af366dd53da569823211266e8abd91c6d79b302530cee8c',0,'2021-04-24 17:51:24'),('7ceff7b1a59e6f8ffdbba59e1b886f613e36e6c336bfc1c48a97ddada06a5fa9d4b0a34559b5ddc2','ca01616433c52c06125b0db23c85928db0f5685f9cd4f8e0e50ca0d4285a85bc122910fcc4875f0d',0,'2021-05-21 10:38:07'),('7d459466b4b819660a93fbe72ab3551eb0124394de4b955b33bf41c4774e128175d98822e095406a','b3cf16dc27f018198228f69fa6697151f138c2792abcc73deed1f5688aa7c9368047842740534e80',0,'2021-05-20 09:26:04'),('826cd66baf94a7c71ca40f83476ee41ef72a680c0242bcec46b3bdbda74fd47c04c92ead5e2fd4dd','b943e74cfa6fe724765ade5962b35af0ac75b810540daa744fccf01e6d14782e53818e539033f6df',0,'2021-05-20 09:28:15'),('835bc20850842f825e4ef5f9b53a30eca51a056aaa20e4b401df3ac52299255f108caa28557d66d7','84319b688980fecef5841a6bbffefc5875e36df88a2b29a32122818714ea1d8a9a9e7a894ae826a7',0,'2021-05-21 10:41:13'),('83e177503f22b8974b30966f4846033ec387a6a805273297cdfaa75de08cb20f127199d548efe721','dda720f10e31efedf5b9dd9311456f1f1d7b2b1fd648b586b59e47076cb701d0095380b16859bed9',0,'2021-05-20 09:24:26'),('83ee4aa1c58686ce871cf14d0bbf00d7d8e4b0cb147436f449ae58a7e03f416cc9a951f38a5f32d8','000f4784b420236c5640f59060f70e0e3ee60d6e5e7d32a5ce8a5553d1fd367454c74fab172df0c3',0,'2021-04-23 15:07:10'),('84bb203762a811051f562e6791061c7a42c852b110f9203c646706025cc5d768d968fa9fbab68400','438c0c22989a99db565347213de8a38eb586f9fd2e8acc8eaf14063cee248b4bf1dfafe72a009ade',0,'2021-04-23 14:26:51'),('8543166c415c96c8a202b2fe8c77cdf02d8a4f712fb3c36c3131e44217f75109d64f104028a7fd72','cbd2d26e478b152363171b76c0b814b2babaf845163bdb1587f53011f50e5a27d1b243c8cf932625',0,'2021-05-21 10:44:31'),('8f413c24612163bd8c081d3cec03d55cc63792eae13e9bb248849b5a23f60f2d09fa7141fc48642d','e1dbe7cc83a389d135d093a2999924b918cb3c5922ab6967d5c6f9241ababc0a7dab6eff2e982ff0',0,'2021-05-20 09:26:36'),('8f8993199d123a73f28e52bfff2e90c523bf3e01e949377f0f26c55a3d50061ed8518dac290dbde6','f64b033fceebba63da666271b3b5cae6cacfda94d2b71ee13bcf19d1a743c62bdf35ecfea75fff9e',0,'2021-04-30 19:44:58'),('90fa73b648b8b32e3261f3e49fc4c9c8b51cf4cdc7d596cac7352a8980f8b25ff1fc4bc8d0d82cbd','7c9281bb05af1b2057385c9b21335e37c55f9952d5315243a53d7133eca3031890a4b4a89da7bbb3',0,'2021-04-24 17:23:43'),('91edf9237bd2f26f8ca5963c0816dcfbb7be529635dfa60ee4e8b322d268ad17b1950012725ea393','f28a57bb5e5158216ec7450eb302dcfc11daa636aa716787d4fae85df8e354c7396c2af759111c5c',0,'2021-05-21 10:34:55'),('97995e8d33b8a0c175cb47b8ad14f74a1b48015836e027aab5a16512e813b496e0c5920b892e6bb6','a09e17f3c96c56bcad8c99a067ac80a36a7ed2a43359f0c3ce81b3a0401461145f3c6ee7fd9d7750',0,'2021-05-21 11:46:30'),('9adc882270f2454e905006f5d0a8e4c713c22627a445429d15eb9c18ab17c2d6ef4f1ec683459823','8eb1dd597c0c591acfd15f8912df106ac9f117726b6ec995177b3cd503dd50c834d92600e803bda0',0,'2021-04-26 13:24:28'),('9bd00f129241c6d4b329d7fa60661234adff1538edf52411fdbfdc4c4cbd9de3a10e1b5820dc8ec4','7fd19fb73c1b9ac61dd4e568e9652c4bf3e251462958079f95cfee7504332b44331a6dbf301ab479',0,'2021-05-20 09:37:16'),('a1ea97e4f8de0ba3f283a6761d95b1d8e8be2770e1baaa2687831afe4c07d62afc208fbe324cb559','628eceb4775de9b2090858a7d14496cff547e9ee5acaff19da136281c1d49ad1ac3efcfff991c9e9',0,'2021-04-24 17:51:41'),('a4d94da61c07718d7b1f36e76158c24f97e54f2fd2de6c162aa128366fd2a2932e8d8b79ac17afec','b4fb3b55c422f092b5ea635c20c92b6413a37c0aa56b140226e2e371f3bd308dacb090e359dbc13a',0,'2021-04-26 13:54:43'),('a8ae88f2403ed912eee0abfed9400ad2a47633c7c2d8a84934c9aa35d7418c9eca96ada53573b3f7','90ae3f70d10550f89b0e55d8b1490bcbb89781c79332f0f8eef1e9b3da07894646e571a181538711',0,'2021-05-21 10:35:41'),('af857cbac7d65acfb1b7d15c283faee4eeff5da1521503aa483378eb1bc5a0321a6da658a44bf05f','395560f37e93931c6fdbcb3de89a3c335ab1e36da4e2cda806048a6a60948ed0fae4a582c2d5a602',0,'2021-05-20 09:23:55'),('b39556e7a7844a8400c7a8dd4e79215b241b3c53c31c00c3d9a88bd6f865c2328b5907b18c4d9c1f','899583b67750c66b050082b327d6a9f27f5b09caeaf12cf9138631c07816d57c0c241bba24e04cd5',0,'2021-04-23 15:08:56'),('b6a7aac87f92e30161f2c17cf6f3ec3e52cfcb3be89081fffeecac9d5728f38e0824cf97e8b9257a','be60ed9ea45209f5ddc00895be0f50aa5bb3028b8d6ccd08d6c4b2a5cd34687d1d5cba2dd1b80338',0,'2021-05-21 10:35:18'),('bb190d20f3b9f6810e3f90f266f61356c87d4d58b235fd6a69ae9ff62b731194cfabc2d1a7bd6862','5675aca2ca92c5589b5d3620ab89e2933e07e5842511cc319c2536aa76507ce0df22dc9c3a010876',0,'2021-04-24 17:21:56'),('bc37799208a15c07731d17bf0e233112ffe4a66a2db9d95ac3ca2d5cca41027c378514bf5a05e62d','c5742ae8a625a2212562fa752303c04219e95ffe2c23172c206c65ff5d19c6ac60760dfdc41b3fbc',0,'2021-04-23 14:00:43'),('bd86610ad99c4e7f2e92ff1b600ad1933c4d86f11c0fe1d692082e4441ce1a517b30e63264f0e8d5','bf7ca5a1e9a5a70a5e70cc512ba5f993db39c7552243e381932166461214bdeeb1497a2cf0ec3f70',0,'2021-04-23 15:39:32'),('bffd70272d6b0db0efc6fdd756ef0d850cc9e4b0552dda3f752abf28b435d5b76fb9a80dd3868cc0','3c9fbb96f0d1338975014ab658dc214407c29c916fde87e2f19a3b586071d1e3db598cc8d4d2f5e5',0,'2021-04-26 09:16:11'),('c010460d95f9c957a88f1a9b9480d0a088230ebd6351e4d3005a3e6e660fdd54c8095939d06afa50','143526bcffb80d33e641d155ec6bc0e7f1c1636f6e9076dbec0eb53501e5d6ce6e5f21ba22c0474a',0,'2021-04-24 17:23:25'),('c1813991e87720737f8a3a077a1f640b480e4d1ad037f25d2c96bebcbd493f18e8cb76be40faf211','578877b8d6be0e09d4f41ba7925950a96f440f6ff8c6df591e3e8586b771c19e9f42e86a902820b4',0,'2021-04-23 15:08:25'),('c1bd1ad419d14d69ad35dd180619a7d67d81fab95fd6976826b0a11212c8e7216d72ebcb95515ada','cdbb4cd90f09deda964ea6892f24b29e65eccf74de53de2293ddc3fdba729bd1e6e95f8e2ae42cb1',0,'2021-05-21 09:58:17'),('c382c51494427da6db4e2b4640f7c78ac0264634a45b63f0d27ac43851e8fb531992845226bde0ab','e608402e3ba07e2ff6834be443e6fc866d6833810d8d951de59353d6e97a2db9da2616bd9248210d',0,'2021-04-23 15:07:57'),('c3f2cced8d043f78726a2642ce57515ba2e10b1ed598f00187f8ac9f4feaeaa27dd5da5f8576c527','db12525b91585e0879f47e30ba4ad3471b5229cb26613fb22af783a779edc9d2ef69d3f5410cf7e6',0,'2021-04-23 14:38:34'),('c9ee7432b0a48f74672e760226d6e538f28e1a3174e0ec0203a7a45d008e041d9f3f524db5762976','762c21c854c37c89877322035f36c6b0a3a713ec3155bfb17cc092f3ea3bcde8a225bf72e9ef9966',0,'2021-04-23 14:33:58'),('cc6f290d3d4c5c2ef3cfb2bdcda6c5e185d398c2064d6f9458dd375a98308bce9f218ad104d765a1','7f0e062ef2a975f106abdbcacecc17999c9777744463486de3a76c7c86abfc2805654f2c45bdd2b4',0,'2021-05-21 10:42:00'),('cf9d983060877d3a71b8f94c5ff6db21f7f643ef8311c9478172415a8edc2ac87f955c2b2150d042','54f6331cf0eb09dc10b4bc37b2d3d1f5b1dc1641e914c679ce99acaea62fce28c259dc3940849f8f',0,'2021-04-23 15:38:46'),('d058aa24c605dea42b9a260f3dc7fd6d26bef894f1aa88be3e6b7a6762b38acf47ed412bbeb29891','84887eb0dbab88ccb9a4a427dd03a692656cdbeab27c9ae4bc765b0180b0188ede249400b6dc665e',0,'2021-04-26 10:53:22'),('d939ab0c674d73f86f48d06162b4f436f627d89704d085b7d3716fe09eea5978ec60ce013367967c','2d913a2d4aa94c40b8708e27a83dce1905e23df5e3ecfd382f7121cf6a58bd98551b4642c9726d97',0,'2021-04-23 15:12:28'),('d94890835177dbccafa859b1c7a373bbeb8ddc261b1e1533b5509d4aae530bb5a90dbd6f19851079','9b688f1d517647affcecb0da5f0ba5e1b706515ee77bccfdf28d5b3e4ad7214cb95272957718f405',0,'2021-04-23 15:05:46'),('daef21930af668f2398599bfe67ec6c147070a64878ab9101b3b47200ae12154eff278051dfae1ee','c65cda27c6e3226d84f493a6a6490e6e4a38e6719f3c36fbb5b9fcecc872136dbef02b9bc16b3598',0,'2021-04-23 15:12:46'),('dcd1dffe4df5e7fe01a80b37b2ec8d8f0e115931693c175206d6363d57a46e181d7d18924dd935b0','f75057c4e9b8daf1e14b6e9287f38d45a4e2fe51f3f93fe7273761bea550b99fcb9c77c1a214d810',0,'2021-04-23 15:11:18'),('dd61dfc0bb5f635d511b5063820151ffc6379c0f13988b4feb054d39476df3ce40eda2daa2036b89','6f39cd7dafab14763aefd82d9c7e809757ebf0d95fd66a179ef8471bc55d0246224a970f205130b4',0,'2021-04-23 15:11:49'),('df5ec397aca450d193bf44b12b0e0ae3f7d61cabe0a21c4d252360e8c24bd8d549a28f07c334ad83','7cfd8fd7d12572269c84790fbe1b9b02c5c2b7a3bc5f851da0b7913f3c6030fe79eff5c7e962e722',0,'2021-04-23 15:13:59'),('e2bab69027e6549c6955c4480eb00cc5f344b7dee8e573ec8728fa9a03392cba56aaeee0d793cfd1','666b02764977632b242fcbdd4b4966979979f749f58f1512291c4112fd08a8f3fb51917483ce8693',0,'2021-05-21 10:48:28'),('ea9d1b67e3f2c42e6251c3965b181c3f1bb01e342906594c8ffb0944bf7ea3cc162cff43ffa9cca2','70f26a03598b3c67f32de9909b138495cc7506fde7e5540cac11ccbcf972df242dc1c488e36d07cd',0,'2021-04-24 20:07:05'),('eac21691e099c6a0fe47b23524392ba5bd18e701fcdd39293d2f6d6ea9f96d687807575c3c91a5b9','dc4184329f81225510679d813c728176ff0f334657930193fb8099c024bdc3a6b0b80d8b0441efba',0,'2021-04-24 17:23:37'),('eb914e35587d78d3feeb362a5e686f9ce0aabea4eb622d57584f07d53d5f9d0c4fd11b0fde1b0688','1a299049dfe75c8f1e09753fcabf8d7b3c794449453be7bd756203cb0f25d5eddf9de0a52b626109',0,'2021-04-24 17:51:12'),('eda4d05252c88a2a5d6b9bfc787f8f6ee571dab65d32ae5756c1a59cc26c27d7e442d2ae2279ed1d','b03fe06ef8fb52b70dcf3399dc23b4ad1eb66fdbd4ddae3dbed3b4d43e7e2fe99c7a52007590ea0e',0,'2021-04-24 17:24:14'),('f0119509c3fe1e1ce09dc4d755678c584e5d38f61491e8f9baaef06366a589a12232923b0b303e07','85bec85f1601c8b92a7d754b743732559028967552a03efe4ba7015a757b11657ed660d16eaad95f',0,'2021-04-24 17:23:50'),('f02d352483f1faeb13b84fc4bda4f54edbe8c8bfdc5311521458b356e430c48855ed7530d9b5ca7d','c6889deb7c9a37210ed8ff4f7ffb54d2fa25829960bf8152761b0223472dae35ff5f3157f716353d',0,'2021-05-20 09:37:47'),('f6cd907e44204546c8e2561a8cf6e00d4a35eace5b2b6afaaa75b0cddaa8a471e635dc3a5b332dd0','d26250fb45cf2538abe9028bfa346b77449cc0a1dd8d7e934dece897f4c07e0c97d69f688f8b9893',0,'2021-05-21 10:58:45'),('f745603b8b2b0b78fa9dc866275eb0651ee0134aa13e837a96b7c22746ea12f4d8ade1ed172b3327','cfa90c35caaafe0ff482e732b63f957a0f14f0dc3fded9eba9359fe21834ed2f2e09936ab0a90e4b',0,'2021-04-23 15:28:33'),('f836c6345f27c4c6658f1b29e852c489c0db6464474f16d75cdff7d187e18b64d6a0996d9a06062e','33f8a6ab15b6e2131f85336af8a19f332c6547ee5893e5b54813bcc2cabf2626c8edefc3983ac053',0,'2021-05-21 10:52:58'),('f9657dfc868dce3b47f0fcae0a3c497cc8e6afe2f8865533207de392bdca61f670cf5dfacfc2404e','4c3c840f929a0ff9942406dcbf54916051898aa0a2d24f13b81f7ce2588553bff2bbd232beb6e6d2',0,'2021-05-21 10:48:52');
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
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (3,3,NULL,'0','2020-04-23 13:26:06','2020-04-23 13:26:06'),(5,7,NULL,'0','2020-04-24 15:53:05','2020-04-24 15:53:05'),(6,2,NULL,'1','2020-04-26 12:47:32','2020-04-26 14:33:04'),(7,2,NULL,'0','2020-04-26 12:48:53','2020-04-26 12:48:53'),(8,2,NULL,'0','2020-04-26 12:49:44','2020-04-26 12:49:44'),(9,2,NULL,'1','2020-04-26 12:49:48','2020-04-26 14:32:58'),(10,2,NULL,'0','2020-04-26 12:50:56','2020-04-26 12:50:56'),(11,2,NULL,'1','2020-04-26 12:51:23','2020-04-26 12:55:26'),(12,2,NULL,'1','2020-04-26 12:51:44','2020-04-26 12:54:56'),(13,2,NULL,'1','2020-04-26 12:51:55','2020-04-26 12:54:40'),(14,2,NULL,'1','2020-04-26 14:16:35','2020-04-26 14:32:27'),(15,2,NULL,'1','2020-04-26 14:17:32','2020-04-26 14:32:11'),(16,2,NULL,'0','2020-04-26 14:17:59','2020-04-26 14:17:59'),(17,2,NULL,'0','2020-04-26 14:20:00','2020-04-26 14:20:00'),(18,2,NULL,'1','2020-04-26 14:27:51','2020-04-26 14:31:47'),(19,2,NULL,'0','2020-04-26 14:30:26','2020-04-26 14:30:26'),(20,2,NULL,'0','2020-04-26 14:30:52','2020-04-26 14:30:52'),(21,2,NULL,'1','2020-04-26 14:31:00','2020-04-26 14:31:04'),(22,2,NULL,'1','2020-04-26 14:54:04','2020-04-26 14:54:17'),(23,1,NULL,'1','2020-04-26 15:37:03','2020-05-20 07:51:47'),(24,2,NULL,'0','2020-04-26 15:42:20','2020-04-26 15:42:20'),(25,3,NULL,'1','2020-04-26 15:42:48','2020-04-26 15:43:55'),(26,3,NULL,'1','2020-04-26 15:43:30','2020-04-26 15:43:46'),(27,2,NULL,'0','2020-04-26 15:45:22','2020-04-26 15:45:22'),(28,2,NULL,'0','2020-04-26 15:45:28','2020-04-26 15:45:28'),(29,2,NULL,'0','2020-04-26 15:45:35','2020-04-26 15:45:35'),(30,1,NULL,'0','2020-04-30 17:56:33','2020-04-30 17:56:33');
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
INSERT INTO `password_resets` VALUES ('test@test.cz','$2y$10$mNL0KRLeciiok7cEYgNKt.H/69Th8fUaSLYZk1adXv0kIIfXZMP46','2020-05-22 04:05:58');
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
  `subcategory_id` int unsigned DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hmotnost` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,1,9080,'t','2','2020-04-23 11:57:28','2020-04-23 11:57:28');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `active` tinyint NOT NULL DEFAULT '1',
  `specification` int DEFAULT NULL,
  `user` int NOT NULL,
  `from` date DEFAULT NULL,
  `to` date DEFAULT NULL,
  `partner` int DEFAULT NULL,
  `channelPackage` int DEFAULT NULL,
  `level` int DEFAULT NULL,
  `price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `bundle` int DEFAULT NULL,
  `flag` varchar(20) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `I_user` (`user`),
  KEY `I_partner` (`partner`),
  KEY `I_channelPackage` (`channelPackage`),
  KEY `bundle` (`bundle`),
  KEY `specification` (`specification`),
  KEY `l_channelpackage_from_to` (`channelPackage`,`from`,`to`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  UNIQUE KEY `users_phone_unique` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'b1g2h3@seznam.cz','607061065',NULL,'$2y$10$3PDV4LgI6SXfM4BdeXOFROOaGDd33f4epi59Zk9PfloYFhuZYVDza',NULL,'2020-04-23 12:00:03','2020-04-23 12:00:03'),(2,'test@test.cz','123456789',NULL,'$2y$10$62b1RQ9KTxag4GGKDBzLfOXfLr67HVQ0rKm/cfPCO8QcrJ05QIIG.',NULL,'2020-04-23 13:11:45','2020-04-23 13:11:45'),(3,'reg@reg.cz','123654987',NULL,'$2y$10$bB2vezkfZIf07TtzzkgF8OeP2dDCjWJAkntWuLpzk3vLN3lUFJz52',NULL,'2020-04-23 13:13:54','2020-04-23 13:13:54'),(6,'test@seznam.cz','12345678910',NULL,'$2y$10$/rrbdlP8t46iB0OmhBW5Du/w33KEBvlAIDaP/xuduvjnvIcdVUyA6',NULL,'2020-04-24 15:21:10','2020-04-24 15:21:10'),(7,'test@testt.cz','607065065',NULL,'$2y$10$8xXTMKGRCzx6bOtsepHs/OuPp23rQoIuffQMHvLn56sxM3izVrhrC',NULL,'2020-04-24 15:21:51','2020-04-24 15:21:51'),(8,'test@testtt.cz','12345678',NULL,'$2y$10$uIXKuMZjjAt9dcIiK/up..cRmUBJhP.AwEX5dMTFreNlH0LqRW172',NULL,'2020-04-24 17:34:49','2020-04-24 17:34:49'),(9,'test@ttttest.cz','123456787',NULL,'$2y$10$E2RxYmMEPaJhAdV3Wpo49OO68yuG.0T0uYANmjsLFfgbOqJHsNcLO',NULL,'2020-04-26 06:33:21','2020-04-26 06:33:21'),(10,'seznam@seznam.cz','9584123231',NULL,'$2y$10$UfHLFgoxp4j.YA1eCuYczu2si6eyXMbSC3lW8kMeCte066QGUD2MC',NULL,'2020-05-20 07:37:04','2020-05-20 07:37:04'),(11,'b1g2h3@seznamm.cz','607061055',NULL,'$2y$10$qVj8Rxjyir4wWaGa9A.ojeYtaDjeBobhuaaIelD/Dyf0ywCKcrN2W',NULL,'2020-05-21 08:31:00','2020-05-21 08:31:00'),(12,'test@test.cz1','123456877',NULL,'$2y$10$bnTiORd4H7Rmj1GBzstICu5dd9AV2l5h/UtESg2yr26NNksHw2dnm',NULL,'2020-05-21 08:37:58','2020-05-21 08:37:58'),(13,'test@test.cz3','123456788',NULL,'$2y$10$ozdzxG1Mr7V/HBTc/wjQKuYa8C7wRXUxqFsIlguH6TvNybxyt4yK6',NULL,'2020-05-21 08:48:24','2020-05-21 10:01:29');
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
) ENGINE=InnoDB AUTO_INCREMENT=542 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `websockets_statistics_entries`
--

LOCK TABLES `websockets_statistics_entries` WRITE;
/*!40000 ALTER TABLE `websockets_statistics_entries` DISABLE KEYS */;
INSERT INTO `websockets_statistics_entries` VALUES (1,'anyid',1,1,0,'2020-04-26 06:31:42','2020-04-26 06:31:42'),(2,'anyid',0,2,1,'2020-04-26 06:32:42','2020-04-26 06:32:42'),(3,'anyid',1,3,1,'2020-04-26 06:33:42','2020-04-26 06:33:42'),(4,'anyid',0,1,1,'2020-04-26 07:15:31','2020-04-26 07:15:31'),(5,'anyid',1,4,1,'2020-04-26 07:16:30','2020-04-26 07:16:30'),(6,'anyid',0,2,1,'2020-04-26 07:17:30','2020-04-26 07:17:30'),(7,'anyid',0,2,1,'2020-04-26 07:18:30','2020-04-26 07:18:30'),(8,'anyid',0,2,1,'2020-04-26 07:19:30','2020-04-26 07:19:30'),(9,'anyid',1,0,0,'2020-04-26 07:20:47','2020-04-26 07:20:47'),(10,'anyid',1,0,0,'2020-04-26 07:22:37','2020-04-26 07:22:37'),(11,'anyid',0,2,1,'2020-04-26 07:23:37','2020-04-26 07:23:37'),(12,'anyid',0,0,1,'2020-04-26 07:24:37','2020-04-26 07:24:37'),(13,'anyid',0,0,1,'2020-04-26 07:25:37','2020-04-26 07:25:37'),(14,'anyid',0,0,1,'2020-04-26 07:26:37','2020-04-26 07:26:37'),(15,'anyid',0,0,1,'2020-04-26 07:27:37','2020-04-26 07:27:37'),(16,'anyid',0,0,1,'2020-04-26 07:28:37','2020-04-26 07:28:37'),(17,'anyid',0,0,1,'2020-04-26 07:29:37','2020-04-26 07:29:37'),(18,'anyid',0,0,1,'2020-04-26 07:30:37','2020-04-26 07:30:37'),(19,'anyid',1,1,1,'2020-04-26 07:31:38','2020-04-26 07:31:38'),(20,'anyid',1,1,1,'2020-04-26 08:24:57','2020-04-26 08:24:57'),(21,'anyid',1,2,1,'2020-04-26 08:25:57','2020-04-26 08:25:57'),(22,'anyid',0,2,1,'2020-04-26 08:26:57','2020-04-26 08:26:57'),(23,'anyid',0,1,1,'2020-04-26 08:27:57','2020-04-26 08:27:57'),(24,'anyid',0,2,1,'2020-04-26 08:28:57','2020-04-26 08:28:57'),(25,'anyid',0,2,1,'2020-04-26 08:29:57','2020-04-26 08:29:57'),(26,'anyid',0,2,1,'2020-04-26 08:30:57','2020-04-26 08:30:57'),(27,'anyid',0,3,1,'2020-04-26 08:31:57','2020-04-26 08:31:57'),(28,'anyid',1,3,2,'2020-04-26 08:32:57','2020-04-26 08:32:57'),(29,'anyid',1,2,1,'2020-04-26 08:33:57','2020-04-26 08:33:57'),(30,'anyid',1,2,1,'2020-04-26 08:34:57','2020-04-26 08:34:57'),(31,'anyid',1,2,1,'2020-04-26 08:35:57','2020-04-26 08:35:57'),(32,'anyid',1,2,1,'2020-04-26 08:36:57','2020-04-26 08:36:57'),(33,'anyid',1,2,1,'2020-04-26 08:37:57','2020-04-26 08:37:57'),(34,'anyid',1,2,1,'2020-04-26 08:38:57','2020-04-26 08:38:57'),(35,'anyid',1,2,1,'2020-04-26 08:39:57','2020-04-26 08:39:57'),(36,'anyid',1,2,2,'2020-04-26 08:40:57','2020-04-26 08:40:57'),(37,'anyid',1,3,3,'2020-04-26 08:41:57','2020-04-26 08:41:57'),(38,'anyid',1,2,1,'2020-04-26 08:42:57','2020-04-26 08:42:57'),(39,'anyid',1,3,2,'2020-04-26 08:43:57','2020-04-26 08:43:57'),(40,'anyid',1,3,2,'2020-04-26 08:44:57','2020-04-26 08:44:57'),(41,'anyid',1,1,1,'2020-04-26 08:45:57','2020-04-26 08:45:57'),(42,'anyid',1,3,2,'2020-04-26 08:46:57','2020-04-26 08:46:57'),(43,'anyid',1,2,1,'2020-04-26 08:47:57','2020-04-26 08:47:57'),(44,'anyid',1,1,2,'2020-04-26 08:48:57','2020-04-26 08:48:57'),(45,'anyid',0,1,3,'2020-04-26 08:49:57','2020-04-26 08:49:57'),(46,'anyid',0,1,3,'2020-04-26 08:50:57','2020-04-26 08:50:57'),(47,'anyid',0,0,4,'2020-04-26 08:51:57','2020-04-26 08:51:57'),(48,'anyid',0,1,4,'2020-04-26 08:52:57','2020-04-26 08:52:57'),(49,'anyid',0,2,5,'2020-04-26 08:53:57','2020-04-26 08:53:57'),(50,'anyid',0,0,5,'2020-04-26 08:54:57','2020-04-26 08:54:57'),(51,'anyid',0,1,7,'2020-04-26 08:55:57','2020-04-26 08:55:57'),(52,'anyid',0,1,3,'2020-04-26 08:56:57','2020-04-26 08:56:57'),(53,'anyid',0,2,2,'2020-04-26 08:57:57','2020-04-26 08:57:57'),(54,'anyid',0,2,2,'2020-04-26 08:58:57','2020-04-26 08:58:57'),(55,'anyid',0,2,1,'2020-04-26 08:59:57','2020-04-26 08:59:57'),(56,'anyid',0,2,1,'2020-04-26 09:00:57','2020-04-26 09:00:57'),(57,'anyid',0,2,1,'2020-04-26 09:01:57','2020-04-26 09:01:57'),(58,'anyid',0,1,2,'2020-04-26 09:02:57','2020-04-26 09:02:57'),(59,'anyid',0,2,1,'2020-04-26 09:03:57','2020-04-26 09:03:57'),(60,'anyid',0,2,1,'2020-04-26 09:04:57','2020-04-26 09:04:57'),(61,'anyid',0,1,4,'2020-04-26 09:05:57','2020-04-26 09:05:57'),(62,'anyid',0,1,2,'2020-04-26 09:06:57','2020-04-26 09:06:57'),(63,'anyid',0,2,1,'2020-04-26 09:07:57','2020-04-26 09:07:57'),(64,'anyid',0,2,1,'2020-04-26 09:08:57','2020-04-26 09:08:57'),(65,'anyid',0,2,1,'2020-04-26 09:09:57','2020-04-26 09:09:57'),(66,'anyid',0,2,1,'2020-04-26 09:10:57','2020-04-26 09:10:57'),(67,'anyid',0,2,1,'2020-04-26 09:11:57','2020-04-26 09:11:57'),(68,'anyid',0,2,1,'2020-04-26 09:12:57','2020-04-26 09:12:57'),(69,'anyid',0,2,1,'2020-04-26 09:13:57','2020-04-26 09:13:57'),(70,'anyid',0,2,1,'2020-04-26 09:14:57','2020-04-26 09:14:57'),(71,'anyid',0,2,1,'2020-04-26 09:15:57','2020-04-26 09:15:57'),(72,'anyid',0,2,1,'2020-04-26 09:16:57','2020-04-26 09:16:57'),(73,'anyid',0,2,1,'2020-04-26 09:17:57','2020-04-26 09:17:57'),(74,'anyid',0,2,1,'2020-04-26 09:18:57','2020-04-26 09:18:57'),(75,'anyid',0,2,1,'2020-04-26 09:19:57','2020-04-26 09:19:57'),(76,'anyid',1,0,0,'2020-04-26 09:41:19','2020-04-26 09:41:19'),(77,'anyid',0,0,1,'2020-04-26 09:42:18','2020-04-26 09:42:18'),(78,'anyid',1,1,1,'2020-04-26 09:43:18','2020-04-26 09:43:18'),(79,'anyid',0,1,1,'2020-04-26 09:44:19','2020-04-26 09:44:19'),(80,'anyid',0,4,1,'2020-04-26 09:45:19','2020-04-26 09:45:19'),(81,'anyid',1,1,1,'2020-04-26 09:46:18','2020-04-26 09:46:18'),(82,'anyid',1,4,0,'2020-04-26 09:48:07','2020-04-26 09:48:07'),(83,'anyid',2,3,1,'2020-04-26 09:49:07','2020-04-26 09:49:07'),(84,'anyid',1,4,1,'2020-04-26 09:50:07','2020-04-26 09:50:07'),(85,'anyid',1,3,1,'2020-04-26 09:51:07','2020-04-26 09:51:07'),(86,'anyid',1,4,1,'2020-04-26 09:52:07','2020-04-26 09:52:07'),(87,'anyid',1,5,1,'2020-04-26 09:53:07','2020-04-26 09:53:07'),(88,'anyid',2,4,1,'2020-04-26 09:54:07','2020-04-26 09:54:07'),(89,'anyid',2,4,1,'2020-04-26 09:55:07','2020-04-26 09:55:07'),(90,'anyid',2,3,1,'2020-04-26 09:56:07','2020-04-26 09:56:07'),(91,'anyid',1,0,0,'2020-04-26 11:24:03','2020-04-26 11:24:03'),(92,'anyid',0,2,1,'2020-04-26 11:25:03','2020-04-26 11:25:03'),(93,'anyid',0,4,1,'2020-04-26 11:26:03','2020-04-26 11:26:03'),(94,'anyid',2,6,1,'2020-04-26 11:27:03','2020-04-26 11:27:03'),(95,'anyid',2,4,1,'2020-04-26 11:28:03','2020-04-26 11:28:03'),(96,'anyid',2,4,1,'2020-04-26 11:29:03','2020-04-26 11:29:03'),(97,'anyid',2,4,1,'2020-04-26 11:30:03','2020-04-26 11:30:03'),(98,'anyid',2,4,1,'2020-04-26 11:31:03','2020-04-26 11:31:03'),(99,'anyid',2,4,1,'2020-04-26 11:32:03','2020-04-26 11:32:03'),(100,'anyid',2,4,1,'2020-04-26 11:33:03','2020-04-26 11:33:03'),(101,'anyid',2,4,1,'2020-04-26 11:34:03','2020-04-26 11:34:03'),(102,'anyid',2,4,1,'2020-04-26 11:35:03','2020-04-26 11:35:03'),(103,'anyid',2,4,1,'2020-04-26 11:36:03','2020-04-26 11:36:03'),(104,'anyid',2,4,1,'2020-04-26 11:37:03','2020-04-26 11:37:03'),(105,'anyid',2,4,1,'2020-04-26 11:38:03','2020-04-26 11:38:03'),(106,'anyid',2,4,1,'2020-04-26 11:39:03','2020-04-26 11:39:03'),(107,'anyid',2,3,1,'2020-04-26 11:40:03','2020-04-26 11:40:03'),(108,'anyid',2,4,1,'2020-04-26 11:41:03','2020-04-26 11:41:03'),(109,'anyid',2,4,1,'2020-04-26 11:42:03','2020-04-26 11:42:03'),(110,'anyid',2,4,1,'2020-04-26 11:43:03','2020-04-26 11:43:03'),(111,'anyid',2,3,1,'2020-04-26 11:44:03','2020-04-26 11:44:03'),(112,'anyid',2,4,1,'2020-04-26 11:45:03','2020-04-26 11:45:03'),(113,'anyid',2,4,1,'2020-04-26 11:46:03','2020-04-26 11:46:03'),(114,'anyid',2,4,1,'2020-04-26 11:47:03','2020-04-26 11:47:03'),(115,'anyid',2,5,1,'2020-04-26 11:53:21','2020-04-26 11:53:21'),(116,'anyid',2,6,1,'2020-04-26 11:54:21','2020-04-26 11:54:21'),(117,'anyid',3,7,2,'2020-04-26 11:55:21','2020-04-26 11:55:21'),(118,'anyid',3,6,1,'2020-04-26 11:56:21','2020-04-26 11:56:21'),(119,'anyid',3,6,2,'2020-04-26 11:57:21','2020-04-26 11:57:21'),(120,'anyid',3,3,2,'2020-04-26 11:58:21','2020-04-26 11:58:21'),(121,'anyid',3,6,1,'2020-04-26 11:59:21','2020-04-26 11:59:21'),(122,'anyid',3,5,3,'2020-04-26 12:00:21','2020-04-26 12:00:21'),(123,'anyid',3,6,2,'2020-04-26 12:01:21','2020-04-26 12:01:21'),(124,'anyid',3,4,4,'2020-04-26 12:02:21','2020-04-26 12:02:21'),(125,'anyid',2,4,3,'2020-04-26 12:03:21','2020-04-26 12:03:21'),(126,'anyid',2,2,3,'2020-04-26 12:04:21','2020-04-26 12:04:21'),(127,'anyid',2,2,2,'2020-04-26 12:05:21','2020-04-26 12:05:21'),(128,'anyid',2,4,1,'2020-04-26 12:06:21','2020-04-26 12:06:21'),(129,'anyid',2,4,1,'2020-04-26 12:07:21','2020-04-26 12:07:21'),(130,'anyid',2,5,1,'2020-04-26 12:08:21','2020-04-26 12:08:21'),(131,'anyid',2,3,3,'2020-04-26 12:09:21','2020-04-26 12:09:21'),(132,'anyid',2,5,2,'2020-04-26 12:10:21','2020-04-26 12:10:21'),(133,'anyid',2,2,2,'2020-04-26 12:11:21','2020-04-26 12:11:21'),(134,'anyid',2,4,2,'2020-04-26 12:12:21','2020-04-26 12:12:21'),(135,'anyid',3,11,2,'2020-04-26 12:13:58','2020-04-26 12:13:58'),(136,'anyid',2,6,1,'2020-04-26 12:14:58','2020-04-26 12:14:58'),(137,'anyid',2,5,1,'2020-04-26 12:15:58','2020-04-26 12:15:58'),(138,'anyid',1,2,1,'2020-04-26 12:16:58','2020-04-26 12:16:58'),(139,'anyid',1,2,1,'2020-04-26 12:17:58','2020-04-26 12:17:58'),(140,'anyid',2,3,1,'2020-04-26 12:18:58','2020-04-26 12:18:58'),(141,'anyid',2,10,3,'2020-04-26 12:19:58','2020-04-26 12:19:58'),(142,'anyid',2,8,2,'2020-04-26 12:20:58','2020-04-26 12:20:58'),(143,'anyid',2,6,4,'2020-04-26 12:21:58','2020-04-26 12:21:58'),(144,'anyid',2,6,2,'2020-04-26 12:22:58','2020-04-26 12:22:58'),(145,'anyid',2,7,2,'2020-04-26 12:23:58','2020-04-26 12:23:58'),(146,'anyid',2,4,1,'2020-04-26 12:24:58','2020-04-26 12:24:58'),(147,'anyid',2,14,4,'2020-04-26 12:25:58','2020-04-26 12:25:58'),(148,'anyid',2,5,5,'2020-04-26 12:26:58','2020-04-26 12:26:58'),(149,'anyid',2,0,6,'2020-04-26 12:27:58','2020-04-26 12:27:58'),(150,'anyid',2,3,1,'2020-04-26 12:38:23','2020-04-26 12:38:23'),(151,'anyid',2,7,1,'2020-04-26 12:39:23','2020-04-26 12:39:23'),(152,'anyid',2,1,6,'2020-04-26 12:40:23','2020-04-26 12:40:23'),(153,'anyid',2,0,6,'2020-04-26 12:41:23','2020-04-26 12:41:23'),(154,'anyid',2,3,1,'2020-04-26 12:42:23','2020-04-26 12:42:23'),(155,'anyid',1,4,1,'2020-04-26 12:43:23','2020-04-26 12:43:23'),(156,'anyid',1,4,1,'2020-04-26 12:44:23','2020-04-26 12:44:23'),(157,'anyid',1,4,1,'2020-04-26 12:45:23','2020-04-26 12:45:23'),(158,'anyid',1,3,1,'2020-04-26 12:46:23','2020-04-26 12:46:23'),(159,'anyid',1,4,1,'2020-04-26 12:47:23','2020-04-26 12:47:23'),(160,'anyid',2,4,2,'2020-04-26 12:48:23','2020-04-26 12:48:23'),(161,'anyid',2,4,2,'2020-04-26 12:49:23','2020-04-26 12:49:23'),(162,'anyid',2,5,1,'2020-04-26 12:50:23','2020-04-26 12:50:23'),(163,'anyid',2,5,2,'2020-04-26 12:51:23','2020-04-26 12:51:23'),(164,'anyid',2,4,4,'2020-04-26 12:52:23','2020-04-26 12:52:23'),(165,'anyid',1,3,2,'2020-04-26 12:53:23','2020-04-26 12:53:23'),(166,'anyid',1,4,4,'2020-04-26 12:54:23','2020-04-26 12:54:23'),(167,'anyid',1,3,1,'2020-04-26 12:55:23','2020-04-26 12:55:23'),(168,'anyid',1,5,2,'2020-04-26 12:56:23','2020-04-26 12:56:23'),(169,'anyid',1,4,4,'2020-04-26 12:57:23','2020-04-26 12:57:23'),(170,'anyid',1,1,0,'2020-04-26 14:11:58','2020-04-26 14:11:58'),(171,'anyid',1,6,4,'2020-04-26 14:12:57','2020-04-26 14:12:57'),(172,'anyid',1,4,1,'2020-04-26 14:13:57','2020-04-26 14:13:57'),(173,'anyid',1,4,1,'2020-04-26 14:14:57','2020-04-26 14:14:57'),(174,'anyid',1,4,1,'2020-04-26 14:15:57','2020-04-26 14:15:57'),(175,'anyid',1,3,3,'2020-04-26 14:16:57','2020-04-26 14:16:57'),(176,'anyid',1,4,2,'2020-04-26 14:17:57','2020-04-26 14:17:57'),(177,'anyid',1,3,2,'2020-04-26 14:18:57','2020-04-26 14:18:57'),(178,'anyid',1,5,1,'2020-04-26 14:19:57','2020-04-26 14:19:57'),(179,'anyid',1,4,2,'2020-04-26 14:20:57','2020-04-26 14:20:57'),(180,'anyid',1,5,1,'2020-04-26 14:21:57','2020-04-26 14:21:57'),(181,'anyid',1,5,1,'2020-04-26 14:22:57','2020-04-26 14:22:57'),(182,'anyid',1,5,1,'2020-04-26 14:23:57','2020-04-26 14:23:57'),(183,'anyid',1,4,1,'2020-04-26 14:24:57','2020-04-26 14:24:57'),(184,'anyid',1,5,1,'2020-04-26 14:25:57','2020-04-26 14:25:57'),(185,'anyid',1,4,1,'2020-04-26 14:26:57','2020-04-26 14:26:57'),(186,'anyid',1,5,2,'2020-04-26 14:27:57','2020-04-26 14:27:57'),(187,'anyid',1,4,1,'2020-04-26 14:28:57','2020-04-26 14:28:57'),(188,'anyid',1,4,1,'2020-04-26 14:29:57','2020-04-26 14:29:57'),(189,'anyid',1,4,3,'2020-04-26 14:30:57','2020-04-26 14:30:57'),(190,'anyid',1,3,2,'2020-04-26 14:31:57','2020-04-26 14:31:57'),(191,'anyid',1,4,2,'2020-04-26 14:32:57','2020-04-26 14:32:57'),(192,'anyid',2,3,1,'2020-04-26 14:54:18','2020-04-26 14:54:18'),(193,'anyid',1,4,2,'2020-04-26 14:55:18','2020-04-26 14:55:18'),(194,'anyid',1,4,1,'2020-04-26 14:56:18','2020-04-26 14:56:18'),(195,'anyid',1,4,1,'2020-04-26 14:57:18','2020-04-26 14:57:18'),(196,'anyid',1,4,1,'2020-04-26 14:58:18','2020-04-26 14:58:18'),(197,'anyid',1,4,1,'2020-04-26 14:59:18','2020-04-26 14:59:18'),(198,'anyid',1,4,1,'2020-04-26 15:00:18','2020-04-26 15:00:18'),(199,'anyid',1,4,1,'2020-04-26 15:01:18','2020-04-26 15:01:18'),(200,'anyid',1,4,1,'2020-04-26 15:02:18','2020-04-26 15:02:18'),(201,'anyid',1,4,1,'2020-04-26 15:03:18','2020-04-26 15:03:18'),(202,'anyid',1,4,1,'2020-04-26 15:04:18','2020-04-26 15:04:18'),(203,'anyid',1,4,1,'2020-04-26 15:05:18','2020-04-26 15:05:18'),(204,'anyid',1,4,1,'2020-04-26 15:06:18','2020-04-26 15:06:18'),(205,'anyid',1,4,1,'2020-04-26 15:07:18','2020-04-26 15:07:18'),(206,'anyid',1,4,1,'2020-04-26 15:08:19','2020-04-26 15:08:19'),(207,'anyid',1,4,1,'2020-04-26 15:09:18','2020-04-26 15:09:18'),(208,'anyid',1,4,1,'2020-04-26 15:10:18','2020-04-26 15:10:18'),(209,'anyid',1,4,1,'2020-04-26 15:11:18','2020-04-26 15:11:18'),(210,'anyid',1,4,1,'2020-04-26 15:12:18','2020-04-26 15:12:18'),(211,'anyid',1,4,1,'2020-04-26 15:13:18','2020-04-26 15:13:18'),(212,'anyid',1,4,1,'2020-04-26 15:14:18','2020-04-26 15:14:18'),(213,'anyid',1,4,1,'2020-04-26 15:15:18','2020-04-26 15:15:18'),(214,'anyid',1,4,1,'2020-04-26 15:16:18','2020-04-26 15:16:18'),(215,'anyid',1,4,1,'2020-04-26 15:17:18','2020-04-26 15:17:18'),(216,'anyid',1,4,1,'2020-04-26 15:18:18','2020-04-26 15:18:18'),(217,'anyid',1,4,1,'2020-04-26 15:19:18','2020-04-26 15:19:18'),(218,'anyid',1,4,1,'2020-04-26 15:20:18','2020-04-26 15:20:18'),(219,'anyid',1,4,1,'2020-04-26 15:21:18','2020-04-26 15:21:18'),(220,'anyid',1,4,1,'2020-04-26 15:22:18','2020-04-26 15:22:18'),(221,'anyid',1,4,1,'2020-04-26 15:23:18','2020-04-26 15:23:18'),(222,'anyid',1,4,1,'2020-04-26 15:24:18','2020-04-26 15:24:18'),(223,'anyid',1,4,1,'2020-04-26 15:25:18','2020-04-26 15:25:18'),(224,'anyid',1,4,1,'2020-04-26 15:26:18','2020-04-26 15:26:18'),(225,'anyid',1,4,1,'2020-04-26 15:27:18','2020-04-26 15:27:18'),(226,'anyid',1,4,1,'2020-04-26 15:28:18','2020-04-26 15:28:18'),(227,'anyid',1,4,1,'2020-04-26 15:29:18','2020-04-26 15:29:18'),(228,'anyid',1,4,1,'2020-04-26 15:30:18','2020-04-26 15:30:18'),(229,'anyid',1,4,1,'2020-04-26 15:31:18','2020-04-26 15:31:18'),(230,'anyid',1,4,1,'2020-04-26 15:32:18','2020-04-26 15:32:18'),(231,'anyid',1,4,1,'2020-04-26 15:33:18','2020-04-26 15:33:18'),(232,'anyid',1,4,1,'2020-04-26 15:34:18','2020-04-26 15:34:18'),(233,'anyid',1,4,1,'2020-04-26 15:35:18','2020-04-26 15:35:18'),(234,'anyid',1,4,1,'2020-04-26 15:36:18','2020-04-26 15:36:18'),(235,'anyid',1,4,1,'2020-04-26 15:37:18','2020-04-26 15:37:18'),(236,'anyid',1,4,1,'2020-04-26 15:38:18','2020-04-26 15:38:18'),(237,'anyid',1,4,1,'2020-04-26 15:39:18','2020-04-26 15:39:18'),(238,'anyid',1,4,1,'2020-04-26 15:40:18','2020-04-26 15:40:18'),(239,'anyid',1,4,1,'2020-04-26 15:41:18','2020-04-26 15:41:18'),(240,'anyid',1,7,3,'2020-04-26 15:42:18','2020-04-26 15:42:18'),(241,'anyid',3,5,1,'2020-04-26 15:43:18','2020-04-26 15:43:18'),(242,'anyid',2,6,2,'2020-04-26 15:44:18','2020-04-26 15:44:18'),(243,'anyid',2,7,1,'2020-04-26 15:45:18','2020-04-26 15:45:18'),(244,'anyid',2,6,1,'2020-04-26 15:46:18','2020-04-26 15:46:18'),(245,'anyid',2,7,1,'2020-04-26 15:47:18','2020-04-26 15:47:18'),(246,'anyid',2,6,1,'2020-04-26 15:48:18','2020-04-26 15:48:18'),(247,'anyid',2,6,1,'2020-04-26 15:49:18','2020-04-26 15:49:18'),(248,'anyid',2,6,1,'2020-04-26 15:50:18','2020-04-26 15:50:18'),(249,'anyid',2,6,1,'2020-04-26 15:51:18','2020-04-26 15:51:18'),(250,'anyid',2,6,1,'2020-04-26 15:52:18','2020-04-26 15:52:18'),(251,'anyid',2,6,1,'2020-04-26 15:53:18','2020-04-26 15:53:18'),(252,'anyid',2,6,1,'2020-04-26 15:54:18','2020-04-26 15:54:18'),(253,'anyid',2,6,1,'2020-04-26 15:55:18','2020-04-26 15:55:18'),(254,'anyid',2,6,1,'2020-04-26 15:56:18','2020-04-26 15:56:18'),(255,'anyid',2,7,1,'2020-04-26 18:57:13','2020-04-26 18:57:13'),(256,'anyid',2,6,1,'2020-04-27 04:31:19','2020-04-27 04:31:19'),(257,'anyid',1,3,0,'2020-04-29 16:40:18','2020-04-29 16:40:18'),(258,'anyid',1,2,1,'2020-04-29 16:41:18','2020-04-29 16:41:18'),(259,'anyid',1,2,1,'2020-04-29 16:42:18','2020-04-29 16:42:18'),(260,'anyid',1,2,1,'2020-04-29 16:43:18','2020-04-29 16:43:18'),(261,'anyid',1,3,1,'2020-04-29 16:44:18','2020-04-29 16:44:18'),(262,'anyid',1,2,1,'2020-04-29 16:45:18','2020-04-29 16:45:18'),(263,'anyid',1,2,1,'2020-04-29 16:46:19','2020-04-29 16:46:19'),(264,'anyid',1,2,1,'2020-04-29 16:47:18','2020-04-29 16:47:18'),(265,'anyid',1,2,1,'2020-04-29 16:48:18','2020-04-29 16:48:18'),(266,'anyid',1,2,1,'2020-04-29 16:49:18','2020-04-29 16:49:18'),(267,'anyid',1,2,1,'2020-04-29 16:50:18','2020-04-29 16:50:18'),(268,'anyid',1,2,1,'2020-04-29 16:51:18','2020-04-29 16:51:18'),(269,'anyid',1,1,1,'2020-04-29 16:52:18','2020-04-29 16:52:18'),(270,'anyid',1,0,1,'2020-04-29 16:53:18','2020-04-29 16:53:18'),(271,'anyid',0,2,1,'2020-04-29 16:54:18','2020-04-29 16:54:18'),(272,'anyid',0,0,1,'2020-04-29 16:55:19','2020-04-29 16:55:19'),(273,'anyid',1,2,1,'2020-04-29 16:56:19','2020-04-29 16:56:19'),(274,'anyid',1,2,1,'2020-04-29 16:57:18','2020-04-29 16:57:18'),(275,'anyid',1,4,1,'2020-04-29 16:58:19','2020-04-29 16:58:19'),(276,'anyid',1,2,1,'2020-04-29 16:59:19','2020-04-29 16:59:19'),(277,'anyid',1,3,1,'2020-04-29 17:00:19','2020-04-29 17:00:19'),(278,'anyid',1,6,1,'2020-04-29 17:01:19','2020-04-29 17:01:19'),(279,'anyid',1,3,1,'2020-04-29 17:02:19','2020-04-29 17:02:19'),(280,'anyid',1,2,1,'2020-04-29 17:03:19','2020-04-29 17:03:19'),(281,'anyid',1,8,1,'2020-04-29 17:04:19','2020-04-29 17:04:19'),(282,'anyid',2,8,1,'2020-04-29 17:05:19','2020-04-29 17:05:19'),(283,'anyid',1,5,1,'2020-04-29 17:06:19','2020-04-29 17:06:19'),(284,'anyid',1,2,1,'2020-04-29 17:07:19','2020-04-29 17:07:19'),(285,'anyid',1,2,1,'2020-04-29 17:08:19','2020-04-29 17:08:19'),(286,'anyid',1,2,1,'2020-04-29 17:09:19','2020-04-29 17:09:19'),(287,'anyid',1,5,1,'2020-04-29 17:10:19','2020-04-29 17:10:19'),(288,'anyid',1,2,1,'2020-04-29 17:11:19','2020-04-29 17:11:19'),(289,'anyid',1,3,1,'2020-04-29 17:12:19','2020-04-29 17:12:19'),(290,'anyid',1,4,1,'2020-04-29 17:13:19','2020-04-29 17:13:19'),(291,'anyid',1,2,1,'2020-04-29 17:14:19','2020-04-29 17:14:19'),(292,'anyid',2,5,1,'2020-04-29 17:15:19','2020-04-29 17:15:19'),(293,'anyid',2,5,1,'2020-04-29 17:16:19','2020-04-29 17:16:19'),(294,'anyid',2,4,1,'2020-04-29 17:17:19','2020-04-29 17:17:19'),(295,'anyid',2,3,1,'2020-04-29 17:18:19','2020-04-29 17:18:19'),(296,'anyid',1,3,0,'2020-05-20 06:58:26','2020-05-20 06:58:26'),(297,'anyid',1,4,1,'2020-05-20 06:59:26','2020-05-20 06:59:26'),(298,'anyid',1,2,1,'2020-05-20 07:00:26','2020-05-20 07:00:26'),(299,'anyid',1,2,1,'2020-05-20 07:01:26','2020-05-20 07:01:26'),(300,'anyid',0,2,1,'2020-05-20 07:02:26','2020-05-20 07:02:26'),(301,'anyid',1,3,1,'2020-05-20 07:03:26','2020-05-20 07:03:26'),(302,'anyid',1,2,1,'2020-05-20 07:04:26','2020-05-20 07:04:26'),(303,'anyid',1,2,1,'2020-05-20 07:05:26','2020-05-20 07:05:26'),(304,'anyid',1,2,1,'2020-05-20 07:06:26','2020-05-20 07:06:26'),(305,'anyid',1,2,1,'2020-05-20 07:07:26','2020-05-20 07:07:26'),(306,'anyid',1,2,1,'2020-05-20 07:08:26','2020-05-20 07:08:26'),(307,'anyid',1,2,1,'2020-05-20 07:09:26','2020-05-20 07:09:26'),(308,'anyid',1,2,1,'2020-05-20 07:10:26','2020-05-20 07:10:26'),(309,'anyid',1,2,1,'2020-05-20 07:11:26','2020-05-20 07:11:26'),(310,'anyid',1,2,1,'2020-05-20 07:12:26','2020-05-20 07:12:26'),(311,'anyid',1,1,1,'2020-05-20 07:13:26','2020-05-20 07:13:26'),(312,'anyid',0,2,1,'2020-05-20 07:14:26','2020-05-20 07:14:26'),(313,'anyid',0,2,1,'2020-05-20 07:15:26','2020-05-20 07:15:26'),(314,'anyid',0,2,1,'2020-05-20 07:16:26','2020-05-20 07:16:26'),(315,'anyid',0,1,1,'2020-05-20 07:17:26','2020-05-20 07:17:26'),(316,'anyid',0,2,1,'2020-05-20 07:18:26','2020-05-20 07:18:26'),(317,'anyid',0,2,1,'2020-05-20 07:19:26','2020-05-20 07:19:26'),(318,'anyid',0,2,1,'2020-05-20 07:20:26','2020-05-20 07:20:26'),(319,'anyid',0,2,1,'2020-05-20 07:21:26','2020-05-20 07:21:26'),(320,'anyid',0,2,1,'2020-05-20 07:22:26','2020-05-20 07:22:26'),(321,'anyid',0,2,1,'2020-05-20 07:23:26','2020-05-20 07:23:26'),(322,'anyid',0,1,1,'2020-05-20 07:24:26','2020-05-20 07:24:26'),(323,'anyid',0,3,1,'2020-05-20 07:25:26','2020-05-20 07:25:26'),(324,'anyid',1,3,1,'2020-05-20 07:26:26','2020-05-20 07:26:26'),(325,'anyid',1,1,1,'2020-05-20 07:27:26','2020-05-20 07:27:26'),(326,'anyid',1,4,1,'2020-05-20 07:28:26','2020-05-20 07:28:26'),(327,'anyid',1,2,1,'2020-05-20 07:29:26','2020-05-20 07:29:26'),(328,'anyid',0,3,1,'2020-05-20 07:30:26','2020-05-20 07:30:26'),(329,'anyid',1,4,1,'2020-05-20 07:31:26','2020-05-20 07:31:26'),(330,'anyid',1,2,1,'2020-05-20 07:32:26','2020-05-20 07:32:26'),(331,'anyid',0,1,1,'2020-05-20 07:33:26','2020-05-20 07:33:26'),(332,'anyid',0,2,1,'2020-05-20 07:34:26','2020-05-20 07:34:26'),(333,'anyid',0,2,1,'2020-05-20 07:35:26','2020-05-20 07:35:26'),(334,'anyid',0,3,1,'2020-05-20 07:36:26','2020-05-20 07:36:26'),(335,'anyid',0,2,1,'2020-05-20 07:37:26','2020-05-20 07:37:26'),(336,'anyid',0,5,1,'2020-05-20 07:38:26','2020-05-20 07:38:26'),(337,'anyid',1,1,1,'2020-05-20 07:39:26','2020-05-20 07:39:26'),(338,'anyid',1,2,1,'2020-05-20 07:40:26','2020-05-20 07:40:26'),(339,'anyid',1,2,1,'2020-05-20 07:41:26','2020-05-20 07:41:26'),(340,'anyid',1,2,1,'2020-05-20 07:42:26','2020-05-20 07:42:26'),(341,'anyid',1,2,1,'2020-05-20 07:43:26','2020-05-20 07:43:26'),(342,'anyid',1,2,1,'2020-05-20 07:44:26','2020-05-20 07:44:26'),(343,'anyid',0,0,1,'2020-05-20 07:45:26','2020-05-20 07:45:26'),(344,'anyid',0,0,1,'2020-05-20 07:46:26','2020-05-20 07:46:26'),(345,'anyid',0,0,1,'2020-05-20 07:47:26','2020-05-20 07:47:26'),(346,'anyid',0,0,1,'2020-05-20 07:48:26','2020-05-20 07:48:26'),(347,'anyid',2,5,2,'2020-05-20 07:49:26','2020-05-20 07:49:26'),(348,'anyid',2,4,1,'2020-05-20 07:50:26','2020-05-20 07:50:26'),(349,'anyid',2,4,1,'2020-05-20 07:51:26','2020-05-20 07:51:26'),(350,'anyid',2,4,3,'2020-05-20 07:52:26','2020-05-20 07:52:26'),(351,'anyid',1,2,1,'2020-05-20 07:53:26','2020-05-20 07:53:26'),(352,'anyid',1,2,1,'2020-05-20 07:54:26','2020-05-20 07:54:26'),(353,'anyid',1,2,1,'2020-05-20 07:55:26','2020-05-20 07:55:26'),(354,'anyid',1,2,1,'2020-05-20 07:56:26','2020-05-20 07:56:26'),(355,'anyid',1,1,1,'2020-05-20 07:57:26','2020-05-20 07:57:26'),(356,'anyid',1,2,1,'2020-05-20 07:58:26','2020-05-20 07:58:26'),(357,'anyid',1,3,0,'2020-05-21 07:34:57','2020-05-21 07:34:57'),(358,'anyid',1,4,1,'2020-05-21 07:35:57','2020-05-21 07:35:57'),(359,'anyid',1,2,1,'2020-05-21 07:36:57','2020-05-21 07:36:57'),(360,'anyid',1,1,1,'2020-05-21 07:37:57','2020-05-21 07:37:57'),(361,'anyid',0,5,1,'2020-05-21 07:38:57','2020-05-21 07:38:57'),(362,'anyid',1,2,1,'2020-05-21 07:39:57','2020-05-21 07:39:57'),(363,'anyid',0,1,1,'2020-05-21 07:40:57','2020-05-21 07:40:57'),(364,'anyid',0,1,1,'2020-05-21 07:41:57','2020-05-21 07:41:57'),(365,'anyid',0,2,1,'2020-05-21 07:42:57','2020-05-21 07:42:57'),(366,'anyid',0,2,1,'2020-05-21 07:43:57','2020-05-21 07:43:57'),(367,'anyid',0,1,1,'2020-05-21 07:44:57','2020-05-21 07:44:57'),(368,'anyid',0,0,1,'2020-05-21 07:45:57','2020-05-21 07:45:57'),(369,'anyid',0,2,1,'2020-05-21 07:46:57','2020-05-21 07:46:57'),(370,'anyid',0,2,1,'2020-05-21 07:47:57','2020-05-21 07:47:57'),(371,'anyid',1,2,1,'2020-05-21 07:48:57','2020-05-21 07:48:57'),(372,'anyid',0,2,1,'2020-05-21 07:49:57','2020-05-21 07:49:57'),(373,'anyid',0,4,1,'2020-05-21 07:50:57','2020-05-21 07:50:57'),(374,'anyid',0,4,1,'2020-05-21 07:51:57','2020-05-21 07:51:57'),(375,'anyid',0,4,1,'2020-05-21 07:52:57','2020-05-21 07:52:57'),(376,'anyid',0,4,1,'2020-05-21 07:53:57','2020-05-21 07:53:57'),(377,'anyid',0,3,1,'2020-05-21 07:54:57','2020-05-21 07:54:57'),(378,'anyid',0,3,1,'2020-05-21 07:55:57','2020-05-21 07:55:57'),(379,'anyid',0,3,1,'2020-05-21 07:56:57','2020-05-21 07:56:57'),(380,'anyid',0,2,1,'2020-05-21 07:57:57','2020-05-21 07:57:57'),(381,'anyid',0,2,1,'2020-05-21 07:58:57','2020-05-21 07:58:57'),(382,'anyid',0,4,1,'2020-05-21 07:59:57','2020-05-21 07:59:57'),(383,'anyid',0,4,1,'2020-05-21 08:00:57','2020-05-21 08:00:57'),(384,'anyid',1,3,1,'2020-05-21 08:01:57','2020-05-21 08:01:57'),(385,'anyid',0,3,1,'2020-05-21 08:02:57','2020-05-21 08:02:57'),(386,'anyid',0,3,1,'2020-05-21 08:03:57','2020-05-21 08:03:57'),(387,'anyid',0,4,1,'2020-05-21 08:04:57','2020-05-21 08:04:57'),(388,'anyid',1,3,1,'2020-05-21 08:05:57','2020-05-21 08:05:57'),(389,'anyid',0,4,1,'2020-05-21 08:06:57','2020-05-21 08:06:57'),(390,'anyid',0,3,1,'2020-05-21 08:07:57','2020-05-21 08:07:57'),(391,'anyid',1,2,1,'2020-05-21 08:08:57','2020-05-21 08:08:57'),(392,'anyid',0,3,1,'2020-05-21 08:09:57','2020-05-21 08:09:57'),(393,'anyid',0,3,1,'2020-05-21 08:10:57','2020-05-21 08:10:57'),(394,'anyid',0,1,1,'2020-05-21 08:11:57','2020-05-21 08:11:57'),(395,'anyid',0,5,1,'2020-05-21 08:12:57','2020-05-21 08:12:57'),(396,'anyid',1,4,1,'2020-05-21 08:13:57','2020-05-21 08:13:57'),(397,'anyid',1,4,1,'2020-05-21 08:14:57','2020-05-21 08:14:57'),(398,'anyid',1,4,1,'2020-05-21 08:15:57','2020-05-21 08:15:57'),(399,'anyid',1,4,1,'2020-05-21 08:16:57','2020-05-21 08:16:57'),(400,'anyid',1,4,1,'2020-05-21 08:17:57','2020-05-21 08:17:57'),(401,'anyid',1,4,1,'2020-05-21 08:18:57','2020-05-21 08:18:57'),(402,'anyid',1,4,1,'2020-05-21 08:19:57','2020-05-21 08:19:57'),(403,'anyid',1,4,1,'2020-05-21 08:20:57','2020-05-21 08:20:57'),(404,'anyid',1,4,1,'2020-05-21 08:21:57','2020-05-21 08:21:57'),(405,'anyid',1,4,1,'2020-05-21 08:22:57','2020-05-21 08:22:57'),(406,'anyid',0,3,1,'2020-05-21 08:23:57','2020-05-21 08:23:57'),(407,'anyid',0,3,1,'2020-05-21 08:24:57','2020-05-21 08:24:57'),(408,'anyid',0,4,1,'2020-05-21 08:25:57','2020-05-21 08:25:57'),(409,'anyid',0,4,1,'2020-05-21 08:26:57','2020-05-21 08:26:57'),(410,'anyid',0,3,1,'2020-05-21 08:27:57','2020-05-21 08:27:57'),(411,'anyid',0,3,1,'2020-05-21 08:28:57','2020-05-21 08:28:57'),(412,'anyid',0,3,1,'2020-05-21 08:29:57','2020-05-21 08:29:57'),(413,'anyid',0,4,1,'2020-05-21 08:30:57','2020-05-21 08:30:57'),(414,'anyid',0,4,1,'2020-05-21 08:31:57','2020-05-21 08:31:57'),(415,'anyid',0,3,1,'2020-05-21 08:32:57','2020-05-21 08:32:57'),(416,'anyid',0,3,1,'2020-05-21 08:33:57','2020-05-21 08:33:57'),(417,'anyid',0,4,1,'2020-05-21 08:34:58','2020-05-21 08:34:58'),(418,'anyid',0,5,1,'2020-05-21 08:35:58','2020-05-21 08:35:58'),(419,'anyid',0,4,1,'2020-05-21 08:36:58','2020-05-21 08:36:58'),(420,'anyid',0,3,1,'2020-05-21 08:37:58','2020-05-21 08:37:58'),(421,'anyid',0,3,1,'2020-05-21 08:38:58','2020-05-21 08:38:58'),(422,'anyid',0,4,1,'2020-05-21 08:39:58','2020-05-21 08:39:58'),(423,'anyid',0,4,1,'2020-05-21 08:40:58','2020-05-21 08:40:58'),(424,'anyid',0,3,1,'2020-05-21 08:41:58','2020-05-21 08:41:58'),(425,'anyid',0,3,1,'2020-05-21 08:42:58','2020-05-21 08:42:58'),(426,'anyid',0,4,1,'2020-05-21 08:43:58','2020-05-21 08:43:58'),(427,'anyid',0,5,1,'2020-05-21 08:44:58','2020-05-21 08:44:58'),(428,'anyid',1,3,1,'2020-05-21 08:45:58','2020-05-21 08:45:58'),(429,'anyid',0,3,1,'2020-05-21 08:46:58','2020-05-21 08:46:58'),(430,'anyid',0,3,1,'2020-05-21 08:47:58','2020-05-21 08:47:58'),(431,'anyid',0,5,1,'2020-05-21 08:48:58','2020-05-21 08:48:58'),(432,'anyid',1,3,1,'2020-05-21 08:49:58','2020-05-21 08:49:58'),(433,'anyid',1,2,1,'2020-05-21 08:50:58','2020-05-21 08:50:58'),(434,'anyid',1,2,1,'2020-05-21 08:51:58','2020-05-21 08:51:58'),(435,'anyid',1,1,1,'2020-05-21 08:52:58','2020-05-21 08:52:58'),(436,'anyid',0,2,1,'2020-05-21 08:53:58','2020-05-21 08:53:58'),(437,'anyid',0,1,1,'2020-05-21 08:54:58','2020-05-21 08:54:58'),(438,'anyid',0,1,1,'2020-05-21 08:55:58','2020-05-21 08:55:58'),(439,'anyid',0,2,1,'2020-05-21 08:56:58','2020-05-21 08:56:58'),(440,'anyid',0,1,1,'2020-05-21 08:57:58','2020-05-21 08:57:58'),(441,'anyid',0,2,1,'2020-05-21 08:58:58','2020-05-21 08:58:58'),(442,'anyid',0,2,1,'2020-05-21 08:59:58','2020-05-21 08:59:58'),(443,'anyid',1,1,1,'2020-05-21 09:00:58','2020-05-21 09:00:58'),(444,'anyid',0,3,1,'2020-05-21 09:01:58','2020-05-21 09:01:58'),(445,'anyid',1,2,1,'2020-05-21 09:02:58','2020-05-21 09:02:58'),(446,'anyid',1,2,1,'2020-05-21 09:03:58','2020-05-21 09:03:58'),(447,'anyid',0,1,1,'2020-05-21 09:04:58','2020-05-21 09:04:58'),(448,'anyid',0,1,2,'2020-05-21 09:05:58','2020-05-21 09:05:58'),(449,'anyid',0,2,1,'2020-05-21 09:06:58','2020-05-21 09:06:58'),(450,'anyid',0,2,1,'2020-05-21 09:07:58','2020-05-21 09:07:58'),(451,'anyid',0,2,1,'2020-05-21 09:08:58','2020-05-21 09:08:58'),(452,'anyid',0,2,1,'2020-05-21 09:09:58','2020-05-21 09:09:58'),(453,'anyid',0,2,1,'2020-05-21 09:10:58','2020-05-21 09:10:58'),(454,'anyid',0,2,1,'2020-05-21 09:11:58','2020-05-21 09:11:58'),(455,'anyid',0,2,1,'2020-05-21 09:12:58','2020-05-21 09:12:58'),(456,'anyid',0,2,1,'2020-05-21 09:13:58','2020-05-21 09:13:58'),(457,'anyid',0,2,1,'2020-05-21 09:14:58','2020-05-21 09:14:58'),(458,'anyid',0,2,1,'2020-05-21 09:15:58','2020-05-21 09:15:58'),(459,'anyid',0,2,1,'2020-05-21 09:16:58','2020-05-21 09:16:58'),(460,'anyid',0,2,1,'2020-05-21 09:17:58','2020-05-21 09:17:58'),(461,'anyid',0,2,1,'2020-05-21 09:18:58','2020-05-21 09:18:58'),(462,'anyid',0,2,1,'2020-05-21 09:19:58','2020-05-21 09:19:58'),(463,'anyid',0,2,1,'2020-05-21 09:20:58','2020-05-21 09:20:58'),(464,'anyid',0,2,1,'2020-05-21 09:21:58','2020-05-21 09:21:58'),(465,'anyid',0,2,1,'2020-05-21 09:22:58','2020-05-21 09:22:58'),(466,'anyid',0,2,1,'2020-05-21 09:23:58','2020-05-21 09:23:58'),(467,'anyid',0,2,1,'2020-05-21 09:24:58','2020-05-21 09:24:58'),(468,'anyid',0,2,1,'2020-05-21 09:25:58','2020-05-21 09:25:58'),(469,'anyid',0,2,1,'2020-05-21 09:26:58','2020-05-21 09:26:58'),(470,'anyid',0,2,1,'2020-05-21 09:27:58','2020-05-21 09:27:58'),(471,'anyid',0,2,1,'2020-05-21 09:28:58','2020-05-21 09:28:58'),(472,'anyid',0,2,1,'2020-05-21 09:29:58','2020-05-21 09:29:58'),(473,'anyid',0,2,1,'2020-05-21 09:30:58','2020-05-21 09:30:58'),(474,'anyid',0,3,2,'2020-05-21 09:31:58','2020-05-21 09:31:58'),(475,'anyid',1,2,1,'2020-05-21 09:32:58','2020-05-21 09:32:58'),(476,'anyid',1,2,1,'2020-05-21 09:33:58','2020-05-21 09:33:58'),(477,'anyid',1,5,1,'2020-05-21 09:34:58','2020-05-21 09:34:58'),(478,'anyid',1,2,1,'2020-05-21 09:35:58','2020-05-21 09:35:58'),(479,'anyid',1,3,1,'2020-05-21 09:36:58','2020-05-21 09:36:58'),(480,'anyid',1,2,1,'2020-05-21 09:37:58','2020-05-21 09:37:58'),(481,'anyid',1,1,1,'2020-05-21 09:38:58','2020-05-21 09:38:58'),(482,'anyid',0,2,1,'2020-05-21 09:39:58','2020-05-21 09:39:58'),(483,'anyid',0,1,1,'2020-05-21 09:40:58','2020-05-21 09:40:58'),(484,'anyid',0,2,1,'2020-05-21 09:41:58','2020-05-21 09:41:58'),(485,'anyid',0,2,1,'2020-05-21 09:42:58','2020-05-21 09:42:58'),(486,'anyid',0,3,1,'2020-05-21 09:43:58','2020-05-21 09:43:58'),(487,'anyid',1,2,1,'2020-05-21 09:44:58','2020-05-21 09:44:58'),(488,'anyid',1,3,1,'2020-05-21 09:45:58','2020-05-21 09:45:58'),(489,'anyid',1,1,1,'2020-05-21 09:46:58','2020-05-21 09:46:58'),(490,'anyid',0,3,1,'2020-05-21 09:47:58','2020-05-21 09:47:58'),(491,'anyid',0,2,1,'2020-05-21 09:48:58','2020-05-21 09:48:58'),(492,'anyid',0,1,1,'2020-05-21 09:49:58','2020-05-21 09:49:58'),(493,'anyid',0,2,1,'2020-05-21 09:50:58','2020-05-21 09:50:58'),(494,'anyid',0,2,1,'2020-05-21 09:51:58','2020-05-21 09:51:58'),(495,'anyid',0,2,1,'2020-05-21 09:52:58','2020-05-21 09:52:58'),(496,'anyid',0,1,1,'2020-05-21 09:53:58','2020-05-21 09:53:58'),(497,'anyid',0,2,1,'2020-05-21 09:54:58','2020-05-21 09:54:58'),(498,'anyid',0,1,1,'2020-05-21 09:55:58','2020-05-21 09:55:58'),(499,'anyid',0,2,1,'2020-05-21 09:56:58','2020-05-21 09:56:58'),(500,'anyid',0,1,1,'2020-05-21 09:57:58','2020-05-21 09:57:58'),(501,'anyid',0,2,1,'2020-05-21 09:58:58','2020-05-21 09:58:58'),(502,'anyid',0,1,1,'2020-05-21 09:59:58','2020-05-21 09:59:58'),(503,'anyid',0,1,1,'2020-05-21 10:00:58','2020-05-21 10:00:58'),(504,'anyid',0,3,1,'2020-05-21 10:01:58','2020-05-21 10:01:58'),(505,'anyid',1,2,1,'2020-05-21 10:02:58','2020-05-21 10:02:58'),(506,'anyid',1,2,1,'2020-05-21 10:03:58','2020-05-21 10:03:58'),(507,'anyid',1,2,1,'2020-05-21 10:04:58','2020-05-21 10:04:58'),(508,'anyid',1,2,1,'2020-05-21 10:05:58','2020-05-21 10:05:58'),(509,'anyid',1,2,1,'2020-05-21 10:06:58','2020-05-21 10:06:58'),(510,'anyid',1,2,1,'2020-05-21 10:07:58','2020-05-21 10:07:58'),(511,'anyid',1,2,1,'2020-05-21 10:08:58','2020-05-21 10:08:58'),(512,'anyid',1,2,1,'2020-05-21 10:09:58','2020-05-21 10:09:58'),(513,'anyid',1,2,1,'2020-05-21 10:10:58','2020-05-21 10:10:58'),(514,'anyid',1,1,1,'2020-05-21 10:11:58','2020-05-21 10:11:58'),(515,'anyid',1,2,1,'2020-05-21 10:12:58','2020-05-21 10:12:58'),(516,'anyid',1,2,1,'2020-05-21 10:13:58','2020-05-21 10:13:58'),(517,'anyid',1,2,1,'2020-05-21 10:14:58','2020-05-21 10:14:58'),(518,'anyid',1,2,1,'2020-05-21 10:15:58','2020-05-21 10:15:58'),(519,'anyid',1,2,1,'2020-05-21 10:16:58','2020-05-21 10:16:58'),(520,'anyid',1,2,1,'2020-05-21 10:17:58','2020-05-21 10:17:58'),(521,'anyid',1,2,1,'2020-05-21 10:18:58','2020-05-21 10:18:58'),(522,'anyid',1,1,1,'2020-05-21 10:19:59','2020-05-21 10:19:59'),(523,'anyid',0,0,1,'2020-05-21 10:20:58','2020-05-21 10:20:58'),(524,'anyid',0,0,1,'2020-05-21 10:21:58','2020-05-21 10:21:58'),(525,'anyid',0,0,1,'2020-05-21 10:22:58','2020-05-21 10:22:58'),(526,'anyid',0,0,1,'2020-05-21 10:23:58','2020-05-21 10:23:58'),(527,'anyid',0,0,1,'2020-05-21 10:24:58','2020-05-21 10:24:58'),(528,'anyid',0,0,1,'2020-05-21 10:25:58','2020-05-21 10:25:58'),(529,'anyid',1,0,1,'2020-05-21 10:26:59','2020-05-21 10:26:59'),(530,'anyid',0,3,1,'2020-05-21 10:27:58','2020-05-21 10:27:58'),(531,'anyid',1,2,1,'2020-05-21 10:28:59','2020-05-21 10:28:59'),(532,'anyid',1,4,1,'2020-05-21 10:29:58','2020-05-21 10:29:58'),(533,'anyid',1,3,1,'2020-05-21 10:30:58','2020-05-21 10:30:58'),(534,'anyid',1,1,1,'2020-05-21 10:31:59','2020-05-21 10:31:59'),(535,'anyid',0,2,1,'2020-05-21 10:32:59','2020-05-21 10:32:59'),(536,'anyid',0,0,1,'2020-05-21 10:33:59','2020-05-21 10:33:59'),(537,'anyid',1,0,1,'2020-05-21 10:34:59','2020-05-21 10:34:59'),(538,'anyid',0,2,1,'2020-05-21 10:35:59','2020-05-21 10:35:59'),(539,'anyid',0,2,1,'2020-05-21 10:36:59','2020-05-21 10:36:59'),(540,'anyid',0,0,1,'2020-05-21 12:22:46','2020-05-21 12:22:46'),(541,'anyid',0,5,1,'2020-05-21 12:23:45','2020-05-21 12:23:45');
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

-- Dump completed on 2020-06-03 10:31:11
