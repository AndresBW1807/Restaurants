-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: pae
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `campuses`
--

DROP TABLE IF EXISTS `campuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `campuses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `instituteId` int NOT NULL,
  `municipalitiesId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_campus_institutes1_idx` (`instituteId`),
  KEY `fk_campus_municipalities1_idx` (`municipalitiesId`),
  CONSTRAINT `fk_campus_institutes1` FOREIGN KEY (`instituteId`) REFERENCES `institutes` (`id`),
  CONSTRAINT `fk_campus_municipalities1` FOREIGN KEY (`municipalitiesId`) REFERENCES `municipalities` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campuses`
--

LOCK TABLES `campuses` WRITE;
/*!40000 ALTER TABLE `campuses` DISABLE KEYS */;
INSERT INTO `campuses` VALUES (1,'Sede Central',NULL,NULL,1,118),(2,'Sede Bucarica',NULL,NULL,1,118);
/*!40000 ALTER TABLE `campuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `campushascourses`
--

DROP TABLE IF EXISTS `campushascourses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `campushascourses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `campusId` int DEFAULT NULL,
  `courseId` int DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_campus_has_courses_courses1_idx` (`courseId`),
  KEY `fk_campus_has_courses_campus1_idx` (`campusId`),
  CONSTRAINT `fk_campus_has_courses_campus1` FOREIGN KEY (`campusId`) REFERENCES `campuses` (`id`),
  CONSTRAINT `fk_campus_has_courses_courses1` FOREIGN KEY (`courseId`) REFERENCES `courses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campushascourses`
--

LOCK TABLES `campushascourses` WRITE;
/*!40000 ALTER TABLE `campushascourses` DISABLE KEYS */;
INSERT INTO `campushascourses` VALUES (1,1,1,NULL,NULL),(2,2,2,NULL,NULL),(3,2,3,NULL,NULL),(4,2,4,NULL,NULL);
/*!40000 ALTER TABLE `campushascourses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `checklists`
--

DROP TABLE IF EXISTS `checklists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `checklists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `assistance` tinyint NOT NULL,
  `date` date NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `serviceId` int NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_list_checks_services1_idx` (`serviceId`),
  KEY `fk_list_checks_users1_idx` (`userId`),
  CONSTRAINT `fk_list_checks_services1` FOREIGN KEY (`serviceId`) REFERENCES `services` (`id`),
  CONSTRAINT `fk_list_checks_users1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `checklists`
--

LOCK TABLES `checklists` WRITE;
/*!40000 ALTER TABLE `checklists` DISABLE KEYS */;
INSERT INTO `checklists` VALUES (53,1,'2023-07-08','2023-07-08 23:42:39','2023-07-08 23:42:39',3,1),(54,1,'2023-07-08','2023-07-08 23:42:40','2023-07-08 23:42:40',3,12),(55,1,'2023-07-08','2023-07-08 23:42:40','2023-07-08 23:42:40',3,13),(56,1,'2023-07-08','2023-07-08 23:42:41','2023-07-08 23:42:41',3,14);
/*!40000 ALTER TABLE `checklists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contracs`
--

DROP TABLE IF EXISTS `contracs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contracs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company` varchar(45) NOT NULL,
  `validity` tinyint(1) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `campusId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_contracs_campus1_idx` (`campusId`),
  CONSTRAINT `fk_contracs_campus1` FOREIGN KEY (`campusId`) REFERENCES `campuses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contracs`
--

LOCK TABLES `contracs` WRITE;
/*!40000 ALTER TABLE `contracs` DISABLE KEYS */;
INSERT INTO `contracs` VALUES (1,'Comapan',0,NULL,NULL,1),(2,'Campollo',1,NULL,NULL,1);
/*!40000 ALTER TABLE `contracs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contracshasservices`
--

DROP TABLE IF EXISTS `contracshasservices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contracshasservices` (
  `id` int NOT NULL AUTO_INCREMENT,
  `contracId` int NOT NULL,
  `serviceId` int NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_contracs_has_services_services1_idx` (`serviceId`),
  KEY `fk_contracs_has_services_contracs1_idx` (`contracId`),
  CONSTRAINT `fk_contracs_has_services_contracs1` FOREIGN KEY (`contracId`) REFERENCES `contracs` (`id`),
  CONSTRAINT `fk_contracs_has_services_services1` FOREIGN KEY (`serviceId`) REFERENCES `services` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contracshasservices`
--

LOCK TABLES `contracshasservices` WRITE;
/*!40000 ALTER TABLE `contracshasservices` DISABLE KEYS */;
INSERT INTO `contracshasservices` VALUES (1,2,1,NULL,NULL),(2,2,2,NULL,NULL),(3,2,3,NULL,NULL);
/*!40000 ALTER TABLE `contracshasservices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nomenclature` varchar(45) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'Ingenieria Mecanica',NULL,NULL),(2,'Ingenieria de Sistemas',NULL,NULL),(3,'Ingenieria Electronica',NULL,NULL),(4,'Ingenieria Quimica',NULL,NULL);
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (5,'ANTIOQUIA',NULL,NULL),(8,'ATLÁNTICO',NULL,NULL),(11,'BOGOTÁ, D.C.',NULL,NULL),(13,'BOLÍVAR',NULL,NULL),(15,'BOYACÁ',NULL,NULL),(17,'CALDAS',NULL,NULL),(18,'CAQUETÁ',NULL,NULL),(19,'CAUCA',NULL,NULL),(20,'CESAR',NULL,NULL),(23,'CÓRDOBA',NULL,NULL),(25,'CUNDINAMARCA',NULL,NULL),(27,'CHOCÓ',NULL,NULL),(41,'HUILA',NULL,NULL),(44,'LA GUAJIRA',NULL,NULL),(47,'MAGDALENA',NULL,NULL),(50,'META',NULL,NULL),(52,'NARIÑO',NULL,NULL),(54,'NORTE DE SANTANDER',NULL,NULL),(63,'QUINDIO',NULL,NULL),(66,'RISARALDA',NULL,NULL),(68,'SANTANDER',NULL,NULL),(70,'SUCRE',NULL,NULL),(73,'TOLIMA',NULL,NULL),(76,'VALLE DEL CAUCA',NULL,NULL),(81,'ARAUCA',NULL,NULL),(85,'CASANARE',NULL,NULL),(86,'PUTUMAYO',NULL,NULL),(88,'ARCHIPIÉLAGO DE SAN ANDRÉS',NULL,NULL),(91,'AMAZONAS',NULL,NULL),(94,'GUAINÍA',NULL,NULL),(95,'GUAVIARE',NULL,NULL),(97,'VAUPÉS',NULL,NULL),(99,'VICHADA',NULL,NULL);
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `institutes`
--

DROP TABLE IF EXISTS `institutes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `institutes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `institutes`
--

LOCK TABLES `institutes` WRITE;
/*!40000 ALTER TABLE `institutes` DISABLE KEYS */;
INSERT INTO `institutes` VALUES (1,'Universida Industrial de Santander','uis@uis.edu.co','3213455445',NULL,NULL);
/*!40000 ALTER TABLE `institutes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menus`
--

DROP TABLE IF EXISTS `menus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menus` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameMenu` varchar(45) NOT NULL,
  `iconMenu` varchar(45) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menus`
--

LOCK TABLES `menus` WRITE;
/*!40000 ALTER TABLE `menus` DISABLE KEYS */;
INSERT INTO `menus` VALUES (1,'Gestionar Usuarios','pi pi-user',NULL,NULL),(2,'Lista de Asistencia','pi pi-align-justify',NULL,NULL);
/*!40000 ALTER TABLE `menus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menus_has_roles`
--

DROP TABLE IF EXISTS `menus_has_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menus_has_roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `menuId` int NOT NULL,
  `roleId` int NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_menus_has_roles_roles1_idx` (`roleId`),
  KEY `fk_menus_has_roles_menus1_idx` (`menuId`),
  CONSTRAINT `fk_menus_has_roles_menus1` FOREIGN KEY (`menuId`) REFERENCES `menus` (`id`),
  CONSTRAINT `fk_menus_has_roles_roles1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menus_has_roles`
--

LOCK TABLES `menus_has_roles` WRITE;
/*!40000 ALTER TABLE `menus_has_roles` DISABLE KEYS */;
INSERT INTO `menus_has_roles` VALUES (1,1,1,NULL,NULL),(2,2,1,NULL,NULL);
/*!40000 ALTER TABLE `menus_has_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `municipalities`
--

DROP TABLE IF EXISTS `municipalities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `municipalities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `departmentId` int NOT NULL,
  `state` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cities_departments1_idx` (`departmentId`),
  CONSTRAINT `fk_cities_departments1` FOREIGN KEY (`departmentId`) REFERENCES `departments` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `municipalities`
--

LOCK TABLES `municipalities` WRITE;
/*!40000 ALTER TABLE `municipalities` DISABLE KEYS */;
INSERT INTO `municipalities` VALUES (1,'Abriaquí',NULL,NULL,5,'1'),(2,'Acacías',NULL,NULL,50,'1'),(3,'Acandí',NULL,NULL,27,'1'),(4,'Acevedo',NULL,NULL,41,'1'),(5,'Achí',NULL,NULL,13,'1'),(6,'Agrado',NULL,NULL,41,'1'),(7,'Agua de Dios',NULL,NULL,25,'1'),(8,'Aguachica',NULL,NULL,20,'1'),(9,'Aguada',NULL,NULL,68,'1'),(10,'Aguadas',NULL,NULL,17,'1'),(11,'Aguazul',NULL,NULL,85,'1'),(12,'Agustín Codazzi',NULL,NULL,20,'1'),(13,'Aipe',NULL,NULL,41,'1'),(14,'Albania',NULL,NULL,18,'1'),(15,'Albania',NULL,NULL,44,'1'),(16,'Albania',NULL,NULL,68,'1'),(17,'Albán',NULL,NULL,25,'1'),(18,'Albán (San José)',NULL,NULL,52,'1'),(19,'Alcalá',NULL,NULL,76,'1'),(20,'Alejandria',NULL,NULL,5,'1'),(21,'Algarrobo',NULL,NULL,47,'1'),(22,'Algeciras',NULL,NULL,41,'1'),(23,'Almaguer',NULL,NULL,19,'1'),(24,'Almeida',NULL,NULL,15,'1'),(25,'Alpujarra',NULL,NULL,73,'1'),(26,'Altamira',NULL,NULL,41,'1'),(27,'Alto Baudó (Pie de Pato)',NULL,NULL,27,'1'),(28,'Altos del Rosario',NULL,NULL,13,'1'),(29,'Alvarado',NULL,NULL,73,'1'),(30,'Amagá',NULL,NULL,5,'1'),(31,'Amalfi',NULL,NULL,5,'1'),(32,'Ambalema',NULL,NULL,73,'1'),(33,'Anapoima',NULL,NULL,25,'1'),(34,'Ancuya',NULL,NULL,52,'1'),(35,'Andalucía',NULL,NULL,76,'1'),(36,'Andes',NULL,NULL,5,'1'),(37,'Angelópolis',NULL,NULL,5,'1'),(38,'Angostura',NULL,NULL,5,'1'),(39,'Anolaima',NULL,NULL,25,'1'),(40,'Anorí',NULL,NULL,5,'1'),(41,'Anserma',NULL,NULL,17,'1'),(42,'Ansermanuevo',NULL,NULL,76,'1'),(43,'Anzoátegui',NULL,NULL,73,'1'),(44,'Anzá',NULL,NULL,5,'1'),(45,'Apartadó',NULL,NULL,5,'1'),(46,'Apulo',NULL,NULL,25,'1'),(47,'Apía',NULL,NULL,66,'1'),(48,'Aquitania',NULL,NULL,15,'1'),(49,'Aracataca',NULL,NULL,47,'1'),(50,'Aranzazu',NULL,NULL,17,'1'),(51,'Aratoca',NULL,NULL,68,'1'),(52,'Arauca',NULL,NULL,81,'1'),(53,'Arauquita',NULL,NULL,81,'1'),(54,'Arbeláez',NULL,NULL,25,'1'),(55,'Arboleda (Berruecos)',NULL,NULL,52,'1'),(56,'Arboledas',NULL,NULL,54,'1'),(57,'Arboletes',NULL,NULL,5,'1'),(58,'Arcabuco',NULL,NULL,15,'1'),(59,'Arenal',NULL,NULL,13,'1'),(60,'Argelia',NULL,NULL,5,'1'),(61,'Argelia',NULL,NULL,19,'1'),(62,'Argelia',NULL,NULL,76,'1'),(63,'Ariguaní (El Difícil)',NULL,NULL,47,'1'),(64,'Arjona',NULL,NULL,13,'1'),(65,'Armenia',NULL,NULL,5,'1'),(66,'Armenia',NULL,NULL,63,'1'),(67,'Armero (Guayabal)',NULL,NULL,73,'1'),(68,'Arroyohondo',NULL,NULL,13,'1'),(69,'Astrea',NULL,NULL,20,'1'),(70,'Ataco',NULL,NULL,73,'1'),(71,'Atrato (Yuto)',NULL,NULL,27,'1'),(72,'Ayapel',NULL,NULL,23,'1'),(73,'Bagadó',NULL,NULL,27,'1'),(74,'Bahía Solano (Mútis)',NULL,NULL,27,'1'),(75,'Bajo Baudó (Pizarro)',NULL,NULL,27,'1'),(76,'Balboa',NULL,NULL,19,'1'),(77,'Balboa',NULL,NULL,66,'1'),(78,'Baranoa',NULL,NULL,8,'1'),(79,'Baraya',NULL,NULL,41,'1'),(80,'Barbacoas',NULL,NULL,52,'1'),(81,'Barbosa',NULL,NULL,5,'1'),(82,'Barbosa',NULL,NULL,68,'1'),(83,'Barichara',NULL,NULL,68,'1'),(84,'Barranca de Upía',NULL,NULL,50,'1'),(85,'Barrancabermeja',NULL,NULL,68,'1'),(86,'Barrancas',NULL,NULL,44,'1'),(87,'Barranco de Loba',NULL,NULL,13,'1'),(88,'Barranquilla',NULL,NULL,8,'1'),(89,'Becerríl',NULL,NULL,20,'1'),(90,'Belalcázar',NULL,NULL,17,'1'),(91,'Bello',NULL,NULL,5,'1'),(92,'Belmira',NULL,NULL,5,'1'),(93,'Beltrán',NULL,NULL,25,'1'),(94,'Belén',NULL,NULL,15,'1'),(95,'Belén',NULL,NULL,52,'1'),(96,'Belén de Bajirá',NULL,NULL,27,'1'),(97,'Belén de Umbría',NULL,NULL,66,'1'),(98,'Belén de los Andaquíes',NULL,NULL,18,'1'),(99,'Berbeo',NULL,NULL,15,'1'),(100,'Betania',NULL,NULL,5,'1'),(101,'Beteitiva',NULL,NULL,15,'1'),(102,'Betulia',NULL,NULL,5,'1'),(103,'Betulia',NULL,NULL,68,'1'),(104,'Bituima',NULL,NULL,25,'1'),(105,'Boavita',NULL,NULL,15,'1'),(106,'Bochalema',NULL,NULL,54,'1'),(107,'Bogotá D.C.',NULL,NULL,11,'1'),(108,'Bojacá',NULL,NULL,25,'1'),(109,'Bojayá (Bellavista)',NULL,NULL,27,'1'),(110,'Bolívar',NULL,NULL,5,'1'),(111,'Bolívar',NULL,NULL,19,'1'),(112,'Bolívar',NULL,NULL,68,'1'),(113,'Bolívar',NULL,NULL,76,'1'),(114,'Bosconia',NULL,NULL,20,'1'),(115,'Boyacá',NULL,NULL,15,'1'),(116,'Briceño',NULL,NULL,5,'1'),(117,'Briceño',NULL,NULL,15,'1'),(118,'Bucaramanga',NULL,NULL,68,'1'),(119,'Bucarasica',NULL,NULL,54,'1'),(120,'Buenaventura',NULL,NULL,76,'1'),(121,'Buenavista',NULL,NULL,15,'1'),(122,'Buenavista',NULL,NULL,23,'1'),(123,'Buenavista',NULL,NULL,63,'1'),(124,'Buenavista',NULL,NULL,70,'1'),(125,'Buenos Aires',NULL,NULL,19,'1'),(126,'Buesaco',NULL,NULL,52,'1'),(127,'Buga',NULL,NULL,76,'1'),(128,'Bugalagrande',NULL,NULL,76,'1'),(129,'Burítica',NULL,NULL,5,'1'),(130,'Busbanza',NULL,NULL,15,'1'),(131,'Cabrera',NULL,NULL,25,'1'),(132,'Cabrera',NULL,NULL,68,'1'),(133,'Cabuyaro',NULL,NULL,50,'1'),(134,'Cachipay',NULL,NULL,25,'1'),(135,'Caicedo',NULL,NULL,5,'1'),(136,'Caicedonia',NULL,NULL,76,'1'),(137,'Caimito',NULL,NULL,70,'1'),(138,'Cajamarca',NULL,NULL,73,'1'),(139,'Cajibío',NULL,NULL,19,'1'),(140,'Cajicá',NULL,NULL,25,'1'),(141,'Calamar',NULL,NULL,13,'1'),(142,'Calamar',NULL,NULL,95,'1'),(143,'Calarcá',NULL,NULL,63,'1'),(144,'Caldas',NULL,NULL,5,'1'),(145,'Caldas',NULL,NULL,15,'1'),(146,'Caldono',NULL,NULL,19,'1'),(147,'California',NULL,NULL,68,'1'),(148,'Calima (Darién)',NULL,NULL,76,'1'),(149,'Caloto',NULL,NULL,19,'1'),(150,'Calí',NULL,NULL,76,'1'),(151,'Campamento',NULL,NULL,5,'1'),(152,'Campo de la Cruz',NULL,NULL,8,'1'),(153,'Campoalegre',NULL,NULL,41,'1'),(154,'Campohermoso',NULL,NULL,15,'1'),(155,'Canalete',NULL,NULL,23,'1'),(156,'Candelaria',NULL,NULL,8,'1'),(157,'Candelaria',NULL,NULL,76,'1'),(158,'Cantagallo',NULL,NULL,13,'1'),(159,'Cantón de San Pablo',NULL,NULL,27,'1'),(160,'Caparrapí',NULL,NULL,25,'1'),(161,'Capitanejo',NULL,NULL,68,'1'),(162,'Caracolí',NULL,NULL,5,'1'),(163,'Caramanta',NULL,NULL,5,'1'),(164,'Carcasí',NULL,NULL,68,'1'),(165,'Carepa',NULL,NULL,5,'1'),(166,'Carmen de Apicalá',NULL,NULL,73,'1'),(167,'Carmen de Carupa',NULL,NULL,25,'1'),(168,'Carmen de Viboral',NULL,NULL,5,'1'),(169,'Carmen del Darién (CURBARADÓ)',NULL,NULL,27,'1'),(170,'Carolina',NULL,NULL,5,'1'),(171,'Cartagena',NULL,NULL,13,'1'),(172,'Cartagena del Chairá',NULL,NULL,18,'1'),(173,'Cartago',NULL,NULL,76,'1'),(174,'Carurú',NULL,NULL,97,'1'),(175,'Casabianca',NULL,NULL,73,'1'),(176,'Castilla la Nueva',NULL,NULL,50,'1'),(177,'Caucasia',NULL,NULL,5,'1'),(178,'Cañasgordas',NULL,NULL,5,'1'),(179,'Cepita',NULL,NULL,68,'1'),(180,'Cereté',NULL,NULL,23,'1'),(181,'Cerinza',NULL,NULL,15,'1'),(182,'Cerrito',NULL,NULL,68,'1'),(183,'Cerro San Antonio',NULL,NULL,47,'1'),(184,'Chachaguí',NULL,NULL,52,'1'),(185,'Chaguaní',NULL,NULL,25,'1'),(186,'Chalán',NULL,NULL,70,'1'),(187,'Chaparral',NULL,NULL,73,'1'),(188,'Charalá',NULL,NULL,68,'1'),(189,'Charta',NULL,NULL,68,'1'),(190,'Chigorodó',NULL,NULL,5,'1'),(191,'Chima',NULL,NULL,68,'1'),(192,'Chimichagua',NULL,NULL,20,'1'),(193,'Chimá',NULL,NULL,23,'1'),(194,'Chinavita',NULL,NULL,15,'1'),(195,'Chinchiná',NULL,NULL,17,'1'),(196,'Chinácota',NULL,NULL,54,'1'),(197,'Chinú',NULL,NULL,23,'1'),(198,'Chipaque',NULL,NULL,25,'1'),(199,'Chipatá',NULL,NULL,68,'1'),(200,'Chiquinquirá',NULL,NULL,15,'1'),(201,'Chiriguaná',NULL,NULL,20,'1'),(202,'Chiscas',NULL,NULL,15,'1'),(203,'Chita',NULL,NULL,15,'1'),(204,'Chitagá',NULL,NULL,54,'1'),(205,'Chitaraque',NULL,NULL,15,'1'),(206,'Chivatá',NULL,NULL,15,'1'),(207,'Chivolo',NULL,NULL,47,'1'),(208,'Choachí',NULL,NULL,25,'1'),(209,'Chocontá',NULL,NULL,25,'1'),(210,'Chámeza',NULL,NULL,85,'1'),(211,'Chía',NULL,NULL,25,'1'),(212,'Chíquiza',NULL,NULL,15,'1'),(213,'Chívor',NULL,NULL,15,'1'),(214,'Cicuco',NULL,NULL,13,'1'),(215,'Cimitarra',NULL,NULL,68,'1'),(216,'Circasia',NULL,NULL,63,'1'),(217,'Cisneros',NULL,NULL,5,'1'),(218,'Ciénaga',NULL,NULL,15,'1'),(219,'Ciénaga',NULL,NULL,47,'1'),(220,'Ciénaga de Oro',NULL,NULL,23,'1'),(221,'Clemencia',NULL,NULL,13,'1'),(222,'Cocorná',NULL,NULL,5,'1'),(223,'Coello',NULL,NULL,73,'1'),(224,'Cogua',NULL,NULL,25,'1'),(225,'Colombia',NULL,NULL,41,'1'),(226,'Colosó (Ricaurte)',NULL,NULL,70,'1'),(227,'Colón',NULL,NULL,86,'1'),(228,'Colón (Génova)',NULL,NULL,52,'1'),(229,'Concepción',NULL,NULL,5,'1'),(230,'Concepción',NULL,NULL,68,'1'),(231,'Concordia',NULL,NULL,5,'1'),(232,'Concordia',NULL,NULL,47,'1'),(233,'Condoto',NULL,NULL,27,'1'),(234,'Confines',NULL,NULL,68,'1'),(235,'Consaca',NULL,NULL,52,'1'),(236,'Contadero',NULL,NULL,52,'1'),(237,'Contratación',NULL,NULL,68,'1'),(238,'Convención',NULL,NULL,54,'1'),(239,'Copacabana',NULL,NULL,5,'1'),(240,'Coper',NULL,NULL,15,'1'),(241,'Cordobá',NULL,NULL,63,'1'),(242,'Corinto',NULL,NULL,19,'1'),(243,'Coromoro',NULL,NULL,68,'1'),(244,'Corozal',NULL,NULL,70,'1'),(245,'Corrales',NULL,NULL,15,'1'),(246,'Cota',NULL,NULL,25,'1'),(247,'Cotorra',NULL,NULL,23,'1'),(248,'Covarachía',NULL,NULL,15,'1'),(249,'Coveñas',NULL,NULL,70,'1'),(250,'Coyaima',NULL,NULL,73,'1'),(251,'Cravo Norte',NULL,NULL,81,'1'),(252,'Cuaspud (Carlosama)',NULL,NULL,52,'1'),(253,'Cubarral',NULL,NULL,50,'1'),(254,'Cubará',NULL,NULL,15,'1'),(255,'Cucaita',NULL,NULL,15,'1'),(256,'Cucunubá',NULL,NULL,25,'1'),(257,'Cucutilla',NULL,NULL,54,'1'),(258,'Cuitiva',NULL,NULL,15,'1'),(259,'Cumaral',NULL,NULL,50,'1'),(260,'Cumaribo',NULL,NULL,99,'1'),(261,'Cumbal',NULL,NULL,52,'1'),(262,'Cumbitara',NULL,NULL,52,'1'),(263,'Cunday',NULL,NULL,73,'1'),(264,'Curillo',NULL,NULL,18,'1'),(265,'Curití',NULL,NULL,68,'1'),(266,'Curumaní',NULL,NULL,20,'1'),(267,'Cáceres',NULL,NULL,5,'1'),(268,'Cáchira',NULL,NULL,54,'1'),(269,'Cácota',NULL,NULL,54,'1'),(270,'Cáqueza',NULL,NULL,25,'1'),(271,'Cértegui',NULL,NULL,27,'1'),(272,'Cómbita',NULL,NULL,15,'1'),(273,'Córdoba',NULL,NULL,13,'1'),(274,'Córdoba',NULL,NULL,52,'1'),(275,'Cúcuta',NULL,NULL,54,'1'),(276,'Dabeiba',NULL,NULL,5,'1'),(277,'Dagua',NULL,NULL,76,'1'),(278,'Dibulla',NULL,NULL,44,'1'),(279,'Distracción',NULL,NULL,44,'1'),(280,'Dolores',NULL,NULL,73,'1'),(281,'Don Matías',NULL,NULL,5,'1'),(282,'Dos Quebradas',NULL,NULL,66,'1'),(283,'Duitama',NULL,NULL,15,'1'),(284,'Durania',NULL,NULL,54,'1'),(285,'Ebéjico',NULL,NULL,5,'1'),(286,'El Bagre',NULL,NULL,5,'1'),(287,'El Banco',NULL,NULL,47,'1'),(288,'El Cairo',NULL,NULL,76,'1'),(289,'El Calvario',NULL,NULL,50,'1'),(290,'El Carmen',NULL,NULL,54,'1'),(291,'El Carmen',NULL,NULL,68,'1'),(292,'El Carmen de Atrato',NULL,NULL,27,'1'),(293,'El Carmen de Bolívar',NULL,NULL,13,'1'),(294,'El Castillo',NULL,NULL,50,'1'),(295,'El Cerrito',NULL,NULL,76,'1'),(296,'El Charco',NULL,NULL,52,'1'),(297,'El Cocuy',NULL,NULL,15,'1'),(298,'El Colegio',NULL,NULL,25,'1'),(299,'El Copey',NULL,NULL,20,'1'),(300,'El Doncello',NULL,NULL,18,'1'),(301,'El Dorado',NULL,NULL,50,'1'),(302,'El Dovio',NULL,NULL,76,'1'),(303,'El Espino',NULL,NULL,15,'1'),(304,'El Guacamayo',NULL,NULL,68,'1'),(305,'El Guamo',NULL,NULL,13,'1'),(306,'El Molino',NULL,NULL,44,'1'),(307,'El Paso',NULL,NULL,20,'1'),(308,'El Paujil',NULL,NULL,18,'1'),(309,'El Peñol',NULL,NULL,52,'1'),(310,'El Peñon',NULL,NULL,13,'1'),(311,'El Peñon',NULL,NULL,68,'1'),(312,'El Peñón',NULL,NULL,25,'1'),(313,'El Piñon',NULL,NULL,47,'1'),(314,'El Playón',NULL,NULL,68,'1'),(315,'El Retorno',NULL,NULL,95,'1'),(316,'El Retén',NULL,NULL,47,'1'),(317,'El Roble',NULL,NULL,70,'1'),(318,'El Rosal',NULL,NULL,25,'1'),(319,'El Rosario',NULL,NULL,52,'1'),(320,'El Tablón de Gómez',NULL,NULL,52,'1'),(321,'El Tambo',NULL,NULL,19,'1'),(322,'El Tambo',NULL,NULL,52,'1'),(323,'El Tarra',NULL,NULL,54,'1'),(324,'El Zulia',NULL,NULL,54,'1'),(325,'El Águila',NULL,NULL,76,'1'),(326,'Elías',NULL,NULL,41,'1'),(327,'Encino',NULL,NULL,68,'1'),(328,'Enciso',NULL,NULL,68,'1'),(329,'Entrerríos',NULL,NULL,5,'1'),(330,'Envigado',NULL,NULL,5,'1'),(331,'Espinal',NULL,NULL,73,'1'),(332,'Facatativá',NULL,NULL,25,'1'),(333,'Falan',NULL,NULL,73,'1'),(334,'Filadelfia',NULL,NULL,17,'1'),(335,'Filandia',NULL,NULL,63,'1'),(336,'Firavitoba',NULL,NULL,15,'1'),(337,'Flandes',NULL,NULL,73,'1'),(338,'Florencia',NULL,NULL,18,'1'),(339,'Florencia',NULL,NULL,19,'1'),(340,'Floresta',NULL,NULL,15,'1'),(341,'Florida',NULL,NULL,76,'1'),(342,'Floridablanca',NULL,NULL,68,'1'),(343,'Florián',NULL,NULL,68,'1'),(344,'Fonseca',NULL,NULL,44,'1'),(345,'Fortúl',NULL,NULL,81,'1'),(346,'Fosca',NULL,NULL,25,'1'),(347,'Francisco Pizarro',NULL,NULL,52,'1'),(348,'Fredonia',NULL,NULL,5,'1'),(349,'Fresno',NULL,NULL,73,'1'),(350,'Frontino',NULL,NULL,5,'1'),(351,'Fuente de Oro',NULL,NULL,50,'1'),(352,'Fundación',NULL,NULL,47,'1'),(353,'Funes',NULL,NULL,52,'1'),(354,'Funza',NULL,NULL,25,'1'),(355,'Fusagasugá',NULL,NULL,25,'1'),(356,'Fómeque',NULL,NULL,25,'1'),(357,'Fúquene',NULL,NULL,25,'1'),(358,'Gachalá',NULL,NULL,25,'1'),(359,'Gachancipá',NULL,NULL,25,'1'),(360,'Gachantivá',NULL,NULL,15,'1'),(361,'Gachetá',NULL,NULL,25,'1'),(362,'Galapa',NULL,NULL,8,'1'),(363,'Galeras (Nueva Granada)',NULL,NULL,70,'1'),(364,'Galán',NULL,NULL,68,'1'),(365,'Gama',NULL,NULL,25,'1'),(366,'Gamarra',NULL,NULL,20,'1'),(367,'Garagoa',NULL,NULL,15,'1'),(368,'Garzón',NULL,NULL,41,'1'),(369,'Gigante',NULL,NULL,41,'1'),(370,'Ginebra',NULL,NULL,76,'1'),(371,'Giraldo',NULL,NULL,5,'1'),(372,'Girardot',NULL,NULL,25,'1'),(373,'Girardota',NULL,NULL,5,'1'),(374,'Girón',NULL,NULL,68,'1'),(375,'Gonzalez',NULL,NULL,20,'1'),(376,'Gramalote',NULL,NULL,54,'1'),(377,'Granada',NULL,NULL,5,'1'),(378,'Granada',NULL,NULL,25,'1'),(379,'Granada',NULL,NULL,50,'1'),(380,'Guaca',NULL,NULL,68,'1'),(381,'Guacamayas',NULL,NULL,15,'1'),(382,'Guacarí',NULL,NULL,76,'1'),(383,'Guachavés',NULL,NULL,52,'1'),(384,'Guachené',NULL,NULL,19,'1'),(385,'Guachetá',NULL,NULL,25,'1'),(386,'Guachucal',NULL,NULL,52,'1'),(387,'Guadalupe',NULL,NULL,5,'1'),(388,'Guadalupe',NULL,NULL,41,'1'),(389,'Guadalupe',NULL,NULL,68,'1'),(390,'Guaduas',NULL,NULL,25,'1'),(391,'Guaitarilla',NULL,NULL,52,'1'),(392,'Gualmatán',NULL,NULL,52,'1'),(393,'Guamal',NULL,NULL,47,'1'),(394,'Guamal',NULL,NULL,50,'1'),(395,'Guamo',NULL,NULL,73,'1'),(396,'Guapota',NULL,NULL,68,'1'),(397,'Guapí',NULL,NULL,19,'1'),(398,'Guaranda',NULL,NULL,70,'1'),(399,'Guarne',NULL,NULL,5,'1'),(400,'Guasca',NULL,NULL,25,'1'),(401,'Guatapé',NULL,NULL,5,'1'),(402,'Guataquí',NULL,NULL,25,'1'),(403,'Guatavita',NULL,NULL,25,'1'),(404,'Guateque',NULL,NULL,15,'1'),(405,'Guavatá',NULL,NULL,68,'1'),(406,'Guayabal de Siquima',NULL,NULL,25,'1'),(407,'Guayabetal',NULL,NULL,25,'1'),(408,'Guayatá',NULL,NULL,15,'1'),(409,'Guepsa',NULL,NULL,68,'1'),(410,'Guicán',NULL,NULL,15,'1'),(411,'Gutiérrez',NULL,NULL,25,'1'),(412,'Guática',NULL,NULL,66,'1'),(413,'Gámbita',NULL,NULL,68,'1'),(414,'Gámeza',NULL,NULL,15,'1'),(415,'Génova',NULL,NULL,63,'1'),(416,'Gómez Plata',NULL,NULL,5,'1'),(417,'Hacarí',NULL,NULL,54,'1'),(418,'Hatillo de Loba',NULL,NULL,13,'1'),(419,'Hato',NULL,NULL,68,'1'),(420,'Hato Corozal',NULL,NULL,85,'1'),(421,'Hatonuevo',NULL,NULL,44,'1'),(422,'Heliconia',NULL,NULL,5,'1'),(423,'Herrán',NULL,NULL,54,'1'),(424,'Herveo',NULL,NULL,73,'1'),(425,'Hispania',NULL,NULL,5,'1'),(426,'Hobo',NULL,NULL,41,'1'),(427,'Honda',NULL,NULL,73,'1'),(428,'Ibagué',NULL,NULL,73,'1'),(429,'Icononzo',NULL,NULL,73,'1'),(430,'Iles',NULL,NULL,52,'1'),(431,'Imúes',NULL,NULL,52,'1'),(432,'Inzá',NULL,NULL,19,'1'),(433,'Inírida',NULL,NULL,94,'1'),(434,'Ipiales',NULL,NULL,52,'1'),(435,'Isnos',NULL,NULL,41,'1'),(436,'Istmina',NULL,NULL,27,'1'),(437,'Itagüí',NULL,NULL,5,'1'),(438,'Ituango',NULL,NULL,5,'1'),(439,'Izá',NULL,NULL,15,'1'),(440,'Jambaló',NULL,NULL,19,'1'),(441,'Jamundí',NULL,NULL,76,'1'),(442,'Jardín',NULL,NULL,5,'1'),(443,'Jenesano',NULL,NULL,15,'1'),(444,'Jericó',NULL,NULL,5,'1'),(445,'Jericó',NULL,NULL,15,'1'),(446,'Jerusalén',NULL,NULL,25,'1'),(447,'Jesús María',NULL,NULL,68,'1'),(448,'Jordán',NULL,NULL,68,'1'),(449,'Juan de Acosta',NULL,NULL,8,'1'),(450,'Junín',NULL,NULL,25,'1'),(451,'Juradó',NULL,NULL,27,'1'),(452,'La Apartada y La Frontera',NULL,NULL,23,'1'),(453,'La Argentina',NULL,NULL,41,'1'),(454,'La Belleza',NULL,NULL,68,'1'),(455,'La Calera',NULL,NULL,25,'1'),(456,'La Capilla',NULL,NULL,15,'1'),(457,'La Ceja',NULL,NULL,5,'1'),(458,'La Celia',NULL,NULL,66,'1'),(459,'La Cruz',NULL,NULL,52,'1'),(460,'La Cumbre',NULL,NULL,76,'1'),(461,'La Dorada',NULL,NULL,17,'1'),(462,'La Esperanza',NULL,NULL,54,'1'),(463,'La Estrella',NULL,NULL,5,'1'),(464,'La Florida',NULL,NULL,52,'1'),(465,'La Gloria',NULL,NULL,20,'1'),(466,'La Jagua de Ibirico',NULL,NULL,20,'1'),(467,'La Jagua del Pilar',NULL,NULL,44,'1'),(468,'La Llanada',NULL,NULL,52,'1'),(469,'La Macarena',NULL,NULL,50,'1'),(470,'La Merced',NULL,NULL,17,'1'),(471,'La Mesa',NULL,NULL,25,'1'),(472,'La Montañita',NULL,NULL,18,'1'),(473,'La Palma',NULL,NULL,25,'1'),(474,'La Paz',NULL,NULL,68,'1'),(475,'La Paz (Robles)',NULL,NULL,20,'1'),(476,'La Peña',NULL,NULL,25,'1'),(477,'La Pintada',NULL,NULL,5,'1'),(478,'La Plata',NULL,NULL,41,'1'),(479,'La Playa',NULL,NULL,54,'1'),(480,'La Primavera',NULL,NULL,99,'1'),(481,'La Salina',NULL,NULL,85,'1'),(482,'La Sierra',NULL,NULL,19,'1'),(483,'La Tebaida',NULL,NULL,63,'1'),(484,'La Tola',NULL,NULL,52,'1'),(485,'La Unión',NULL,NULL,5,'1'),(486,'La Unión',NULL,NULL,52,'1'),(487,'La Unión',NULL,NULL,70,'1'),(488,'La Unión',NULL,NULL,76,'1'),(489,'La Uvita',NULL,NULL,15,'1'),(490,'La Vega',NULL,NULL,19,'1'),(491,'La Vega',NULL,NULL,25,'1'),(492,'La Victoria',NULL,NULL,15,'1'),(493,'La Victoria',NULL,NULL,17,'1'),(494,'La Victoria',NULL,NULL,76,'1'),(495,'La Virginia',NULL,NULL,66,'1'),(496,'Labateca',NULL,NULL,54,'1'),(497,'Labranzagrande',NULL,NULL,15,'1'),(498,'Landázuri',NULL,NULL,68,'1'),(499,'Lebrija',NULL,NULL,68,'1'),(500,'Leiva',NULL,NULL,52,'1'),(501,'Lejanías',NULL,NULL,50,'1'),(502,'Lenguazaque',NULL,NULL,25,'1'),(503,'Leticia',NULL,NULL,91,'1'),(504,'Liborina',NULL,NULL,5,'1'),(505,'Linares',NULL,NULL,52,'1'),(506,'Lloró',NULL,NULL,27,'1'),(507,'Lorica',NULL,NULL,23,'1'),(508,'Los Córdobas',NULL,NULL,23,'1'),(509,'Los Palmitos',NULL,NULL,70,'1'),(510,'Los Patios',NULL,NULL,54,'1'),(511,'Los Santos',NULL,NULL,68,'1'),(512,'Lourdes',NULL,NULL,54,'1'),(513,'Luruaco',NULL,NULL,8,'1'),(514,'Lérida',NULL,NULL,73,'1'),(515,'Líbano',NULL,NULL,73,'1'),(516,'López (Micay)',NULL,NULL,19,'1'),(517,'Macanal',NULL,NULL,15,'1'),(518,'Macaravita',NULL,NULL,68,'1'),(519,'Maceo',NULL,NULL,5,'1'),(520,'Machetá',NULL,NULL,25,'1'),(521,'Madrid',NULL,NULL,25,'1'),(522,'Magangué',NULL,NULL,13,'1'),(523,'Magüi (Payán)',NULL,NULL,52,'1'),(524,'Mahates',NULL,NULL,13,'1'),(525,'Maicao',NULL,NULL,44,'1'),(526,'Majagual',NULL,NULL,70,'1'),(527,'Malambo',NULL,NULL,8,'1'),(528,'Mallama (Piedrancha)',NULL,NULL,52,'1'),(529,'Manatí',NULL,NULL,8,'1'),(530,'Manaure',NULL,NULL,44,'1'),(531,'Manaure Balcón del Cesar',NULL,NULL,20,'1'),(532,'Manizales',NULL,NULL,17,'1'),(533,'Manta',NULL,NULL,25,'1'),(534,'Manzanares',NULL,NULL,17,'1'),(535,'Maní',NULL,NULL,85,'1'),(536,'Mapiripan',NULL,NULL,50,'1'),(537,'Margarita',NULL,NULL,13,'1'),(538,'Marinilla',NULL,NULL,5,'1'),(539,'Maripí',NULL,NULL,15,'1'),(540,'Mariquita',NULL,NULL,73,'1'),(541,'Marmato',NULL,NULL,17,'1'),(542,'Marquetalia',NULL,NULL,17,'1'),(543,'Marsella',NULL,NULL,66,'1'),(544,'Marulanda',NULL,NULL,17,'1'),(545,'María la Baja',NULL,NULL,13,'1'),(546,'Matanza',NULL,NULL,68,'1'),(547,'Medellín',NULL,NULL,5,'1'),(548,'Medina',NULL,NULL,25,'1'),(549,'Medio Atrato',NULL,NULL,27,'1'),(550,'Medio Baudó',NULL,NULL,27,'1'),(551,'Medio San Juan (ANDAGOYA)',NULL,NULL,27,'1'),(552,'Melgar',NULL,NULL,73,'1'),(553,'Mercaderes',NULL,NULL,19,'1'),(554,'Mesetas',NULL,NULL,50,'1'),(555,'Milán',NULL,NULL,18,'1'),(556,'Miraflores',NULL,NULL,15,'1'),(557,'Miraflores',NULL,NULL,95,'1'),(558,'Miranda',NULL,NULL,19,'1'),(559,'Mistrató',NULL,NULL,66,'1'),(560,'Mitú',NULL,NULL,97,'1'),(561,'Mocoa',NULL,NULL,86,'1'),(562,'Mogotes',NULL,NULL,68,'1'),(563,'Molagavita',NULL,NULL,68,'1'),(564,'Momil',NULL,NULL,23,'1'),(565,'Mompós',NULL,NULL,13,'1'),(566,'Mongua',NULL,NULL,15,'1'),(567,'Monguí',NULL,NULL,15,'1'),(568,'Moniquirá',NULL,NULL,15,'1'),(569,'Montebello',NULL,NULL,5,'1'),(570,'Montecristo',NULL,NULL,13,'1'),(571,'Montelíbano',NULL,NULL,23,'1'),(572,'Montenegro',NULL,NULL,63,'1'),(573,'Monteria',NULL,NULL,23,'1'),(574,'Monterrey',NULL,NULL,85,'1'),(575,'Morales',NULL,NULL,13,'1'),(576,'Morales',NULL,NULL,19,'1'),(577,'Morelia',NULL,NULL,18,'1'),(578,'Morroa',NULL,NULL,70,'1'),(579,'Mosquera',NULL,NULL,25,'1'),(580,'Mosquera',NULL,NULL,52,'1'),(581,'Motavita',NULL,NULL,15,'1'),(582,'Moñitos',NULL,NULL,23,'1'),(583,'Murillo',NULL,NULL,73,'1'),(584,'Murindó',NULL,NULL,5,'1'),(585,'Mutatá',NULL,NULL,5,'1'),(586,'Mutiscua',NULL,NULL,54,'1'),(587,'Muzo',NULL,NULL,15,'1'),(588,'Málaga',NULL,NULL,68,'1'),(589,'Nariño',NULL,NULL,5,'1'),(590,'Nariño',NULL,NULL,25,'1'),(591,'Nariño',NULL,NULL,52,'1'),(592,'Natagaima',NULL,NULL,73,'1'),(593,'Nechí',NULL,NULL,5,'1'),(594,'Necoclí',NULL,NULL,5,'1'),(595,'Neira',NULL,NULL,17,'1'),(596,'Neiva',NULL,NULL,41,'1'),(597,'Nemocón',NULL,NULL,25,'1'),(598,'Nilo',NULL,NULL,25,'1'),(599,'Nimaima',NULL,NULL,25,'1'),(600,'Nobsa',NULL,NULL,15,'1'),(601,'Nocaima',NULL,NULL,25,'1'),(602,'Norcasia',NULL,NULL,17,'1'),(603,'Norosí',NULL,NULL,13,'1'),(604,'Novita',NULL,NULL,27,'1'),(605,'Nueva Granada',NULL,NULL,47,'1'),(606,'Nuevo Colón',NULL,NULL,15,'1'),(607,'Nunchía',NULL,NULL,85,'1'),(608,'Nuquí',NULL,NULL,27,'1'),(609,'Nátaga',NULL,NULL,41,'1'),(610,'Obando',NULL,NULL,76,'1'),(611,'Ocamonte',NULL,NULL,68,'1'),(612,'Ocaña',NULL,NULL,54,'1'),(613,'Oiba',NULL,NULL,68,'1'),(614,'Oicatá',NULL,NULL,15,'1'),(615,'Olaya',NULL,NULL,5,'1'),(616,'Olaya Herrera',NULL,NULL,52,'1'),(617,'Onzaga',NULL,NULL,68,'1'),(618,'Oporapa',NULL,NULL,41,'1'),(619,'Orito',NULL,NULL,86,'1'),(620,'Orocué',NULL,NULL,85,'1'),(621,'Ortega',NULL,NULL,73,'1'),(622,'Ospina',NULL,NULL,52,'1'),(623,'Otanche',NULL,NULL,15,'1'),(624,'Ovejas',NULL,NULL,70,'1'),(625,'Pachavita',NULL,NULL,15,'1'),(626,'Pacho',NULL,NULL,25,'1'),(627,'Padilla',NULL,NULL,19,'1'),(628,'Paicol',NULL,NULL,41,'1'),(629,'Pailitas',NULL,NULL,20,'1'),(630,'Paime',NULL,NULL,25,'1'),(631,'Paipa',NULL,NULL,15,'1'),(632,'Pajarito',NULL,NULL,15,'1'),(633,'Palermo',NULL,NULL,41,'1'),(634,'Palestina',NULL,NULL,17,'1'),(635,'Palestina',NULL,NULL,41,'1'),(636,'Palmar',NULL,NULL,68,'1'),(637,'Palmar de Varela',NULL,NULL,8,'1'),(638,'Palmas del Socorro',NULL,NULL,68,'1'),(639,'Palmira',NULL,NULL,76,'1'),(640,'Palmito',NULL,NULL,70,'1'),(641,'Palocabildo',NULL,NULL,73,'1'),(642,'Pamplona',NULL,NULL,54,'1'),(643,'Pamplonita',NULL,NULL,54,'1'),(644,'Pandi',NULL,NULL,25,'1'),(645,'Panqueba',NULL,NULL,15,'1'),(646,'Paratebueno',NULL,NULL,25,'1'),(647,'Pasca',NULL,NULL,25,'1'),(648,'Patía (El Bordo)',NULL,NULL,19,'1'),(649,'Pauna',NULL,NULL,15,'1'),(650,'Paya',NULL,NULL,15,'1'),(651,'Paz de Ariporo',NULL,NULL,85,'1'),(652,'Paz de Río',NULL,NULL,15,'1'),(653,'Pedraza',NULL,NULL,47,'1'),(654,'Pelaya',NULL,NULL,20,'1'),(655,'Pensilvania',NULL,NULL,17,'1'),(656,'Peque',NULL,NULL,5,'1'),(657,'Pereira',NULL,NULL,66,'1'),(658,'Pesca',NULL,NULL,15,'1'),(659,'Peñol',NULL,NULL,5,'1'),(660,'Piamonte',NULL,NULL,19,'1'),(661,'Pie de Cuesta',NULL,NULL,68,'1'),(662,'Piedras',NULL,NULL,73,'1'),(663,'Piendamó',NULL,NULL,19,'1'),(664,'Pijao',NULL,NULL,63,'1'),(665,'Pijiño',NULL,NULL,47,'1'),(666,'Pinchote',NULL,NULL,68,'1'),(667,'Pinillos',NULL,NULL,13,'1'),(668,'Piojo',NULL,NULL,8,'1'),(669,'Pisva',NULL,NULL,15,'1'),(670,'Pital',NULL,NULL,41,'1'),(671,'Pitalito',NULL,NULL,41,'1'),(672,'Pivijay',NULL,NULL,47,'1'),(673,'Planadas',NULL,NULL,73,'1'),(674,'Planeta Rica',NULL,NULL,23,'1'),(675,'Plato',NULL,NULL,47,'1'),(676,'Policarpa',NULL,NULL,52,'1'),(677,'Polonuevo',NULL,NULL,8,'1'),(678,'Ponedera',NULL,NULL,8,'1'),(679,'Popayán',NULL,NULL,19,'1'),(680,'Pore',NULL,NULL,85,'1'),(681,'Potosí',NULL,NULL,52,'1'),(682,'Pradera',NULL,NULL,76,'1'),(683,'Prado',NULL,NULL,73,'1'),(684,'Providencia',NULL,NULL,52,'1'),(685,'Providencia',NULL,NULL,88,'1'),(686,'Pueblo Bello',NULL,NULL,20,'1'),(687,'Pueblo Nuevo',NULL,NULL,23,'1'),(688,'Pueblo Rico',NULL,NULL,66,'1'),(689,'Pueblorrico',NULL,NULL,5,'1'),(690,'Puebloviejo',NULL,NULL,47,'1'),(691,'Puente Nacional',NULL,NULL,68,'1'),(692,'Puerres',NULL,NULL,52,'1'),(693,'Puerto Asís',NULL,NULL,86,'1'),(694,'Puerto Berrío',NULL,NULL,5,'1'),(695,'Puerto Boyacá',NULL,NULL,15,'1'),(696,'Puerto Caicedo',NULL,NULL,86,'1'),(697,'Puerto Carreño',NULL,NULL,99,'1'),(698,'Puerto Colombia',NULL,NULL,8,'1'),(699,'Puerto Concordia',NULL,NULL,50,'1'),(700,'Puerto Escondido',NULL,NULL,23,'1'),(701,'Puerto Gaitán',NULL,NULL,50,'1'),(702,'Puerto Guzmán',NULL,NULL,86,'1'),(703,'Puerto Leguízamo',NULL,NULL,86,'1'),(704,'Puerto Libertador',NULL,NULL,23,'1'),(705,'Puerto Lleras',NULL,NULL,50,'1'),(706,'Puerto López',NULL,NULL,50,'1'),(707,'Puerto Nare',NULL,NULL,5,'1'),(708,'Puerto Nariño',NULL,NULL,91,'1'),(709,'Puerto Parra',NULL,NULL,68,'1'),(710,'Puerto Rico',NULL,NULL,18,'1'),(711,'Puerto Rico',NULL,NULL,50,'1'),(712,'Puerto Rondón',NULL,NULL,81,'1'),(713,'Puerto Salgar',NULL,NULL,25,'1'),(714,'Puerto Santander',NULL,NULL,54,'1'),(715,'Puerto Tejada',NULL,NULL,19,'1'),(716,'Puerto Triunfo',NULL,NULL,5,'1'),(717,'Puerto Wilches',NULL,NULL,68,'1'),(718,'Pulí',NULL,NULL,25,'1'),(719,'Pupiales',NULL,NULL,52,'1'),(720,'Puracé (Coconuco)',NULL,NULL,19,'1'),(721,'Purificación',NULL,NULL,73,'1'),(722,'Purísima',NULL,NULL,23,'1'),(723,'Pácora',NULL,NULL,17,'1'),(724,'Páez',NULL,NULL,15,'1'),(725,'Páez (Belalcazar)',NULL,NULL,19,'1'),(726,'Páramo',NULL,NULL,68,'1'),(727,'Quebradanegra',NULL,NULL,25,'1'),(728,'Quetame',NULL,NULL,25,'1'),(729,'Quibdó',NULL,NULL,27,'1'),(730,'Quimbaya',NULL,NULL,63,'1'),(731,'Quinchía',NULL,NULL,66,'1'),(732,'Quipama',NULL,NULL,15,'1'),(733,'Quipile',NULL,NULL,25,'1'),(734,'Ragonvalia',NULL,NULL,54,'1'),(735,'Ramiriquí',NULL,NULL,15,'1'),(736,'Recetor',NULL,NULL,85,'1'),(737,'Regidor',NULL,NULL,13,'1'),(738,'Remedios',NULL,NULL,5,'1'),(739,'Remolino',NULL,NULL,47,'1'),(740,'Repelón',NULL,NULL,8,'1'),(741,'Restrepo',NULL,NULL,50,'1'),(742,'Restrepo',NULL,NULL,76,'1'),(743,'Retiro',NULL,NULL,5,'1'),(744,'Ricaurte',NULL,NULL,25,'1'),(745,'Ricaurte',NULL,NULL,52,'1'),(746,'Rio Negro',NULL,NULL,68,'1'),(747,'Rioblanco',NULL,NULL,73,'1'),(748,'Riofrío',NULL,NULL,76,'1'),(749,'Riohacha',NULL,NULL,44,'1'),(750,'Risaralda',NULL,NULL,17,'1'),(751,'Rivera',NULL,NULL,41,'1'),(752,'Roberto Payán (San José)',NULL,NULL,52,'1'),(753,'Roldanillo',NULL,NULL,76,'1'),(754,'Roncesvalles',NULL,NULL,73,'1'),(755,'Rondón',NULL,NULL,15,'1'),(756,'Rosas',NULL,NULL,19,'1'),(757,'Rovira',NULL,NULL,73,'1'),(758,'Ráquira',NULL,NULL,15,'1'),(759,'Río Iró',NULL,NULL,27,'1'),(760,'Río Quito',NULL,NULL,27,'1'),(761,'Río Sucio',NULL,NULL,17,'1'),(762,'Río Viejo',NULL,NULL,13,'1'),(763,'Río de oro',NULL,NULL,20,'1'),(764,'Ríonegro',NULL,NULL,5,'1'),(765,'Ríosucio',NULL,NULL,27,'1'),(766,'Sabana de Torres',NULL,NULL,68,'1'),(767,'Sabanagrande',NULL,NULL,8,'1'),(768,'Sabanalarga',NULL,NULL,5,'1'),(769,'Sabanalarga',NULL,NULL,8,'1'),(770,'Sabanalarga',NULL,NULL,85,'1'),(771,'Sabanas de San Angel (SAN ANGEL)',NULL,NULL,47,'1'),(772,'Sabaneta',NULL,NULL,5,'1'),(773,'Saboyá',NULL,NULL,15,'1'),(774,'Sahagún',NULL,NULL,23,'1'),(775,'Saladoblanco',NULL,NULL,41,'1'),(776,'Salamina',NULL,NULL,17,'1'),(777,'Salamina',NULL,NULL,47,'1'),(778,'Salazar',NULL,NULL,54,'1'),(779,'Saldaña',NULL,NULL,73,'1'),(780,'Salento',NULL,NULL,63,'1'),(781,'Salgar',NULL,NULL,5,'1'),(782,'Samacá',NULL,NULL,15,'1'),(783,'Samaniego',NULL,NULL,52,'1'),(784,'Samaná',NULL,NULL,17,'1'),(785,'Sampués',NULL,NULL,70,'1'),(786,'San Agustín',NULL,NULL,41,'1'),(787,'San Alberto',NULL,NULL,20,'1'),(788,'San Andrés',NULL,NULL,68,'1'),(789,'San Andrés Sotavento',NULL,NULL,23,'1'),(790,'San Andrés de Cuerquía',NULL,NULL,5,'1'),(791,'San Antero',NULL,NULL,23,'1'),(792,'San Antonio',NULL,NULL,73,'1'),(793,'San Antonio de Tequendama',NULL,NULL,25,'1'),(794,'San Benito',NULL,NULL,68,'1'),(795,'San Benito Abad',NULL,NULL,70,'1'),(796,'San Bernardo',NULL,NULL,25,'1'),(797,'San Bernardo',NULL,NULL,52,'1'),(798,'San Bernardo del Viento',NULL,NULL,23,'1'),(799,'San Calixto',NULL,NULL,54,'1'),(800,'San Carlos',NULL,NULL,5,'1'),(801,'San Carlos',NULL,NULL,23,'1'),(802,'San Carlos de Guaroa',NULL,NULL,50,'1'),(803,'San Cayetano',NULL,NULL,25,'1'),(804,'San Cayetano',NULL,NULL,54,'1'),(805,'San Cristobal',NULL,NULL,13,'1'),(806,'San Diego',NULL,NULL,20,'1'),(807,'San Eduardo',NULL,NULL,15,'1'),(808,'San Estanislao',NULL,NULL,13,'1'),(809,'San Fernando',NULL,NULL,13,'1'),(810,'San Francisco',NULL,NULL,5,'1'),(811,'San Francisco',NULL,NULL,25,'1'),(812,'San Francisco',NULL,NULL,86,'1'),(813,'San Gíl',NULL,NULL,68,'1'),(814,'San Jacinto',NULL,NULL,13,'1'),(815,'San Jacinto del Cauca',NULL,NULL,13,'1'),(816,'San Jerónimo',NULL,NULL,5,'1'),(817,'San Joaquín',NULL,NULL,68,'1'),(818,'San José',NULL,NULL,17,'1'),(819,'San José de Miranda',NULL,NULL,68,'1'),(820,'San José de Montaña',NULL,NULL,5,'1'),(821,'San José de Pare',NULL,NULL,15,'1'),(822,'San José de Uré',NULL,NULL,23,'1'),(823,'San José del Fragua',NULL,NULL,18,'1'),(824,'San José del Guaviare',NULL,NULL,95,'1'),(825,'San José del Palmar',NULL,NULL,27,'1'),(826,'San Juan de Arama',NULL,NULL,50,'1'),(827,'San Juan de Betulia',NULL,NULL,70,'1'),(828,'San Juan de Nepomuceno',NULL,NULL,13,'1'),(829,'San Juan de Pasto',NULL,NULL,52,'1'),(830,'San Juan de Río Seco',NULL,NULL,25,'1'),(831,'San Juan de Urabá',NULL,NULL,5,'1'),(832,'San Juan del Cesar',NULL,NULL,44,'1'),(833,'San Juanito',NULL,NULL,50,'1'),(834,'San Lorenzo',NULL,NULL,52,'1'),(835,'San Luis',NULL,NULL,73,'1'),(836,'San Luís',NULL,NULL,5,'1'),(837,'San Luís de Gaceno',NULL,NULL,15,'1'),(838,'San Luís de Palenque',NULL,NULL,85,'1'),(839,'San Marcos',NULL,NULL,70,'1'),(840,'San Martín',NULL,NULL,20,'1'),(841,'San Martín',NULL,NULL,50,'1'),(842,'San Martín de Loba',NULL,NULL,13,'1'),(843,'San Mateo',NULL,NULL,15,'1'),(844,'San Miguel',NULL,NULL,68,'1'),(845,'San Miguel',NULL,NULL,86,'1'),(846,'San Miguel de Sema',NULL,NULL,15,'1'),(847,'San Onofre',NULL,NULL,70,'1'),(848,'San Pablo',NULL,NULL,13,'1'),(849,'San Pablo',NULL,NULL,52,'1'),(850,'San Pablo de Borbur',NULL,NULL,15,'1'),(851,'San Pedro',NULL,NULL,5,'1'),(852,'San Pedro',NULL,NULL,70,'1'),(853,'San Pedro',NULL,NULL,76,'1'),(854,'San Pedro de Cartago',NULL,NULL,52,'1'),(855,'San Pedro de Urabá',NULL,NULL,5,'1'),(856,'San Pelayo',NULL,NULL,23,'1'),(857,'San Rafael',NULL,NULL,5,'1'),(858,'San Roque',NULL,NULL,5,'1'),(859,'San Sebastián',NULL,NULL,19,'1'),(860,'San Sebastián de Buenavista',NULL,NULL,47,'1'),(861,'San Vicente',NULL,NULL,5,'1'),(862,'San Vicente del Caguán',NULL,NULL,18,'1'),(863,'San Vicente del Chucurí',NULL,NULL,68,'1'),(864,'San Zenón',NULL,NULL,47,'1'),(865,'Sandoná',NULL,NULL,52,'1'),(866,'Santa Ana',NULL,NULL,47,'1'),(867,'Santa Bárbara',NULL,NULL,5,'1'),(868,'Santa Bárbara',NULL,NULL,68,'1'),(869,'Santa Bárbara (Iscuandé)',NULL,NULL,52,'1'),(870,'Santa Bárbara de Pinto',NULL,NULL,47,'1'),(871,'Santa Catalina',NULL,NULL,13,'1'),(872,'Santa Fé de Antioquia',NULL,NULL,5,'1'),(873,'Santa Genoveva de Docorodó',NULL,NULL,27,'1'),(874,'Santa Helena del Opón',NULL,NULL,68,'1'),(875,'Santa Isabel',NULL,NULL,73,'1'),(876,'Santa Lucía',NULL,NULL,8,'1'),(877,'Santa Marta',NULL,NULL,47,'1'),(878,'Santa María',NULL,NULL,15,'1'),(879,'Santa María',NULL,NULL,41,'1'),(880,'Santa Rosa',NULL,NULL,13,'1'),(881,'Santa Rosa',NULL,NULL,19,'1'),(882,'Santa Rosa de Cabal',NULL,NULL,66,'1'),(883,'Santa Rosa de Osos',NULL,NULL,5,'1'),(884,'Santa Rosa de Viterbo',NULL,NULL,15,'1'),(885,'Santa Rosa del Sur',NULL,NULL,13,'1'),(886,'Santa Rosalía',NULL,NULL,99,'1'),(887,'Santa Sofía',NULL,NULL,15,'1'),(888,'Santana',NULL,NULL,15,'1'),(889,'Santander de Quilichao',NULL,NULL,19,'1'),(890,'Santiago',NULL,NULL,54,'1'),(891,'Santiago',NULL,NULL,86,'1'),(892,'Santo Domingo',NULL,NULL,5,'1'),(893,'Santo Tomás',NULL,NULL,8,'1'),(894,'Santuario',NULL,NULL,5,'1'),(895,'Santuario',NULL,NULL,66,'1'),(896,'Sapuyes',NULL,NULL,52,'1'),(897,'Saravena',NULL,NULL,81,'1'),(898,'Sardinata',NULL,NULL,54,'1'),(899,'Sasaima',NULL,NULL,25,'1'),(900,'Sativanorte',NULL,NULL,15,'1'),(901,'Sativasur',NULL,NULL,15,'1'),(902,'Segovia',NULL,NULL,5,'1'),(903,'Sesquilé',NULL,NULL,25,'1'),(904,'Sevilla',NULL,NULL,76,'1'),(905,'Siachoque',NULL,NULL,15,'1'),(906,'Sibaté',NULL,NULL,25,'1'),(907,'Sibundoy',NULL,NULL,86,'1'),(908,'Silos',NULL,NULL,54,'1'),(909,'Silvania',NULL,NULL,25,'1'),(910,'Silvia',NULL,NULL,19,'1'),(911,'Simacota',NULL,NULL,68,'1'),(912,'Simijaca',NULL,NULL,25,'1'),(913,'Simití',NULL,NULL,13,'1'),(914,'Sincelejo',NULL,NULL,70,'1'),(915,'Sincé',NULL,NULL,70,'1'),(916,'Sipí',NULL,NULL,27,'1'),(917,'Sitionuevo',NULL,NULL,47,'1'),(918,'Soacha',NULL,NULL,25,'1'),(919,'Soatá',NULL,NULL,15,'1'),(920,'Socha',NULL,NULL,15,'1'),(921,'Socorro',NULL,NULL,68,'1'),(922,'Socotá',NULL,NULL,15,'1'),(923,'Sogamoso',NULL,NULL,15,'1'),(924,'Solano',NULL,NULL,18,'1'),(925,'Soledad',NULL,NULL,8,'1'),(926,'Solita',NULL,NULL,18,'1'),(927,'Somondoco',NULL,NULL,15,'1'),(928,'Sonsón',NULL,NULL,5,'1'),(929,'Sopetrán',NULL,NULL,5,'1'),(930,'Soplaviento',NULL,NULL,13,'1'),(931,'Sopó',NULL,NULL,25,'1'),(932,'Sora',NULL,NULL,15,'1'),(933,'Soracá',NULL,NULL,15,'1'),(934,'Sotaquirá',NULL,NULL,15,'1'),(935,'Sotara (Paispamba)',NULL,NULL,19,'1'),(936,'Sotomayor (Los Andes)',NULL,NULL,52,'1'),(937,'Suaita',NULL,NULL,68,'1'),(938,'Suan',NULL,NULL,8,'1'),(939,'Suaza',NULL,NULL,41,'1'),(940,'Subachoque',NULL,NULL,25,'1'),(941,'Sucre',NULL,NULL,19,'1'),(942,'Sucre',NULL,NULL,68,'1'),(943,'Sucre',NULL,NULL,70,'1'),(944,'Suesca',NULL,NULL,25,'1'),(945,'Supatá',NULL,NULL,25,'1'),(946,'Supía',NULL,NULL,17,'1'),(947,'Suratá',NULL,NULL,68,'1'),(948,'Susa',NULL,NULL,25,'1'),(949,'Susacón',NULL,NULL,15,'1'),(950,'Sutamarchán',NULL,NULL,15,'1'),(951,'Sutatausa',NULL,NULL,25,'1'),(952,'Sutatenza',NULL,NULL,15,'1'),(953,'Suárez',NULL,NULL,19,'1'),(954,'Suárez',NULL,NULL,73,'1'),(955,'Sácama',NULL,NULL,85,'1'),(956,'Sáchica',NULL,NULL,15,'1'),(957,'Tabio',NULL,NULL,25,'1'),(958,'Tadó',NULL,NULL,27,'1'),(959,'Talaigua Nuevo',NULL,NULL,13,'1'),(960,'Tamalameque',NULL,NULL,20,'1'),(961,'Tame',NULL,NULL,81,'1'),(962,'Taminango',NULL,NULL,52,'1'),(963,'Tangua',NULL,NULL,52,'1'),(964,'Taraira',NULL,NULL,97,'1'),(965,'Tarazá',NULL,NULL,5,'1'),(966,'Tarqui',NULL,NULL,41,'1'),(967,'Tarso',NULL,NULL,5,'1'),(968,'Tasco',NULL,NULL,15,'1'),(969,'Tauramena',NULL,NULL,85,'1'),(970,'Tausa',NULL,NULL,25,'1'),(971,'Tello',NULL,NULL,41,'1'),(972,'Tena',NULL,NULL,25,'1'),(973,'Tenerife',NULL,NULL,47,'1'),(974,'Tenjo',NULL,NULL,25,'1'),(975,'Tenza',NULL,NULL,15,'1'),(976,'Teorama',NULL,NULL,54,'1'),(977,'Teruel',NULL,NULL,41,'1'),(978,'Tesalia',NULL,NULL,41,'1'),(979,'Tibacuy',NULL,NULL,25,'1'),(980,'Tibaná',NULL,NULL,15,'1'),(981,'Tibasosa',NULL,NULL,15,'1'),(982,'Tibirita',NULL,NULL,25,'1'),(983,'Tibú',NULL,NULL,54,'1'),(984,'Tierralta',NULL,NULL,23,'1'),(985,'Timaná',NULL,NULL,41,'1'),(986,'Timbiquí',NULL,NULL,19,'1'),(987,'Timbío',NULL,NULL,19,'1'),(988,'Tinjacá',NULL,NULL,15,'1'),(989,'Tipacoque',NULL,NULL,15,'1'),(990,'Tiquisio (Puerto Rico)',NULL,NULL,13,'1'),(991,'Titiribí',NULL,NULL,5,'1'),(992,'Toca',NULL,NULL,15,'1'),(993,'Tocaima',NULL,NULL,25,'1'),(994,'Tocancipá',NULL,NULL,25,'1'),(995,'Toguí',NULL,NULL,15,'1'),(996,'Toledo',NULL,NULL,5,'1'),(997,'Toledo',NULL,NULL,54,'1'),(998,'Tolú',NULL,NULL,70,'1'),(999,'Tolú Viejo',NULL,NULL,70,'1'),(1000,'Tona',NULL,NULL,68,'1'),(1001,'Topagá',NULL,NULL,15,'1'),(1002,'Topaipí',NULL,NULL,25,'1'),(1003,'Toribío',NULL,NULL,19,'1'),(1004,'Toro',NULL,NULL,76,'1'),(1005,'Tota',NULL,NULL,15,'1'),(1006,'Totoró',NULL,NULL,19,'1'),(1007,'Trinidad',NULL,NULL,85,'1'),(1008,'Trujillo',NULL,NULL,76,'1'),(1009,'Tubará',NULL,NULL,8,'1'),(1010,'Tuchín',NULL,NULL,23,'1'),(1011,'Tulúa',NULL,NULL,76,'1'),(1012,'Tumaco',NULL,NULL,52,'1'),(1013,'Tunja',NULL,NULL,15,'1'),(1014,'Tunungua',NULL,NULL,15,'1'),(1015,'Turbaco',NULL,NULL,13,'1'),(1016,'Turbaná',NULL,NULL,13,'1'),(1017,'Turbo',NULL,NULL,5,'1'),(1018,'Turmequé',NULL,NULL,15,'1'),(1019,'Tuta',NULL,NULL,15,'1'),(1020,'Tutasá',NULL,NULL,15,'1'),(1021,'Támara',NULL,NULL,85,'1'),(1022,'Támesis',NULL,NULL,5,'1'),(1023,'Túquerres',NULL,NULL,52,'1'),(1024,'Ubalá',NULL,NULL,25,'1'),(1025,'Ubaque',NULL,NULL,25,'1'),(1026,'Ubaté',NULL,NULL,25,'1'),(1027,'Ulloa',NULL,NULL,76,'1'),(1028,'Une',NULL,NULL,25,'1'),(1029,'Unguía',NULL,NULL,27,'1'),(1030,'Unión Panamericana (ÁNIMAS)',NULL,NULL,27,'1'),(1031,'Uramita',NULL,NULL,5,'1'),(1032,'Uribe',NULL,NULL,50,'1'),(1033,'Uribia',NULL,NULL,44,'1'),(1034,'Urrao',NULL,NULL,5,'1'),(1035,'Urumita',NULL,NULL,44,'1'),(1036,'Usiacuri',NULL,NULL,8,'1'),(1037,'Valdivia',NULL,NULL,5,'1'),(1038,'Valencia',NULL,NULL,23,'1'),(1039,'Valle de San José',NULL,NULL,68,'1'),(1040,'Valle de San Juan',NULL,NULL,73,'1'),(1041,'Valle del Guamuez',NULL,NULL,86,'1'),(1042,'Valledupar',NULL,NULL,20,'1'),(1043,'Valparaiso',NULL,NULL,5,'1'),(1044,'Valparaiso',NULL,NULL,18,'1'),(1045,'Vegachí',NULL,NULL,5,'1'),(1046,'Venadillo',NULL,NULL,73,'1'),(1047,'Venecia',NULL,NULL,5,'1'),(1048,'Venecia (Ospina Pérez)',NULL,NULL,25,'1'),(1049,'Ventaquemada',NULL,NULL,15,'1'),(1050,'Vergara',NULL,NULL,25,'1'),(1051,'Versalles',NULL,NULL,76,'1'),(1052,'Vetas',NULL,NULL,68,'1'),(1053,'Viani',NULL,NULL,25,'1'),(1054,'Vigía del Fuerte',NULL,NULL,5,'1'),(1055,'Vijes',NULL,NULL,76,'1'),(1056,'Villa Caro',NULL,NULL,54,'1'),(1057,'Villa Rica',NULL,NULL,19,'1'),(1058,'Villa de Leiva',NULL,NULL,15,'1'),(1059,'Villa del Rosario',NULL,NULL,54,'1'),(1060,'Villagarzón',NULL,NULL,86,'1'),(1061,'Villagómez',NULL,NULL,25,'1'),(1062,'Villahermosa',NULL,NULL,73,'1'),(1063,'Villamaría',NULL,NULL,17,'1'),(1064,'Villanueva',NULL,NULL,13,'1'),(1065,'Villanueva',NULL,NULL,44,'1'),(1066,'Villanueva',NULL,NULL,68,'1'),(1067,'Villanueva',NULL,NULL,85,'1'),(1068,'Villapinzón',NULL,NULL,25,'1'),(1069,'Villarrica',NULL,NULL,73,'1'),(1070,'Villavicencio',NULL,NULL,50,'1'),(1071,'Villavieja',NULL,NULL,41,'1'),(1072,'Villeta',NULL,NULL,25,'1'),(1073,'Viotá',NULL,NULL,25,'1'),(1074,'Viracachá',NULL,NULL,15,'1'),(1075,'Vista Hermosa',NULL,NULL,50,'1'),(1076,'Viterbo',NULL,NULL,17,'1'),(1077,'Vélez',NULL,NULL,68,'1'),(1078,'Yacopí',NULL,NULL,25,'1'),(1079,'Yacuanquer',NULL,NULL,52,'1'),(1080,'Yaguará',NULL,NULL,41,'1'),(1081,'Yalí',NULL,NULL,5,'1'),(1082,'Yarumal',NULL,NULL,5,'1'),(1083,'Yolombó',NULL,NULL,5,'1'),(1084,'Yondó (Casabe)',NULL,NULL,5,'1'),(1085,'Yopal',NULL,NULL,85,'1'),(1086,'Yotoco',NULL,NULL,76,'1'),(1087,'Yumbo',NULL,NULL,76,'1'),(1088,'Zambrano',NULL,NULL,13,'1'),(1089,'Zapatoca',NULL,NULL,68,'1'),(1090,'Zapayán (PUNTA DE PIEDRAS)',NULL,NULL,47,'1'),(1091,'Zaragoza',NULL,NULL,5,'1'),(1092,'Zarzal',NULL,NULL,76,'1'),(1093,'Zetaquirá',NULL,NULL,15,'1'),(1094,'Zipacón',NULL,NULL,25,'1'),(1095,'Zipaquirá',NULL,NULL,25,'1'),(1096,'Zona Bananera (PRADO - SEVILLA)',NULL,NULL,47,'1'),(1097,'Ábrego',NULL,NULL,54,'1'),(1098,'Íquira',NULL,NULL,41,'1'),(1099,'Úmbita',NULL,NULL,15,'1'),(1100,'Útica',NULL,NULL,25,'1');
/*!40000 ALTER TABLE `municipalities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameRol` varchar(45) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Administrador',NULL,NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data` varchar(45) NOT NULL,
  `date` date NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `typeServiceId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_services_type_services1_idx` (`typeServiceId`),
  CONSTRAINT `fk_services_type_services1` FOREIGN KEY (`typeServiceId`) REFERENCES `typeservices` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'100Gr Proteina, 20Azucar','2023-06-19',NULL,NULL,NULL,1),(2,'300Gr Pretina, 100Gr Harina','2023-06-19',NULL,NULL,NULL,2),(3,'500Gr Proteina, 0 Harinas','2023-06-19',NULL,NULL,NULL,3);
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_menus`
--

DROP TABLE IF EXISTS `sub_menus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_menus` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameSubMenu` varchar(45) DEFAULT NULL,
  `pathSubMenu` varchar(45) DEFAULT NULL,
  `menuId` int NOT NULL,
  `createdAT` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_sub_menus_menus1_idx` (`menuId`),
  CONSTRAINT `fk_sub_menus_menus1` FOREIGN KEY (`menuId`) REFERENCES `menus` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_menus`
--

LOCK TABLES `sub_menus` WRITE;
/*!40000 ALTER TABLE `sub_menus` DISABLE KEYS */;
INSERT INTO `sub_menus` VALUES (1,'Crear Usuario','/userCreate',1,NULL,NULL),(2,'Gestionar Asistencia','/checkList',2,NULL,NULL);
/*!40000 ALTER TABLE `sub_menus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `typeservices`
--

DROP TABLE IF EXISTS `typeservices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `typeservices` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Type` varchar(45) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `typeservices`
--

LOCK TABLES `typeservices` WRITE;
/*!40000 ALTER TABLE `typeservices` DISABLE KEYS */;
INSERT INTO `typeservices` VALUES (1,'Desayuno',NULL,NULL),(2,'Almuerzo',NULL,NULL),(3,'Comida',NULL,NULL),(4,'Refrigerio',NULL,NULL);
/*!40000 ALTER TABLE `typeservices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameUser` varchar(45) NOT NULL,
  `lastNameUser` varchar(45) NOT NULL,
  `idNumber` varchar(20) DEFAULT NULL,
  `typeId` varchar(45) NOT NULL,
  `user` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `RolId` int NOT NULL,
  `campushascourses_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_UNIQUE` (`user`),
  KEY `fk_users_roles1_idx` (`RolId`),
  KEY `fk_users_campushascourses1_idx` (`campushascourses_id`),
  CONSTRAINT `fk_users_campushascourses1` FOREIGN KEY (`campushascourses_id`) REFERENCES `campushascourses` (`id`),
  CONSTRAINT `fk_users_roles1` FOREIGN KEY (`RolId`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Andres','Barajas','1007249454','CC','Test1','$2a$10$YlE7.xUQ7XuBz1HCzvg3GeHMX.ctzhVu2Kj0cr.An3/1fZHHwhspG',NULL,NULL,1,1),(12,'Andrés Felipe','Barajas Wellman','1007249454','C.C','test2','$2a$10$PWxp.ruLR3W8h0GFCkfpburhyztoAiyIHSE36Vdzl9g58YIHvSt/W','2023-05-29 19:23:01','2023-05-29 19:23:01',1,1),(13,'Asdas','Sdasd Asda','1007249454','C.C','test3','$2a$10$UbPcm3.lH659eOu3YZd5c.//EtXQhL2mwOCstYbZ/beXb2lECjCHy','2023-05-29 19:23:56','2023-05-29 19:23:56',1,1),(14,'Andrés Felipe','Barajas Wellman','1007249454','C.C','test12','$2a$10$KHtDPpNZ/78n642VzAEeNerAGwTuYdyXXisgkXx2at5IONKbzPJcu','2023-05-29 19:24:33','2023-05-29 19:24:33',1,1),(19,'Andrés Felipe','Barajas Wellman','1007249454','C.C','test123','$2a$10$qoUt9N5oks.oMh.fTZF4xe1oRD8chwYKkedcqivBeCzNfX3.zGHh6','2023-05-29 19:29:04','2023-05-29 19:29:04',1,2),(21,'Andrés Felipe','Barajas Wellman','1007249454','C.C','Test1312312','$2a$10$qciYhYANwJbpR7WpGZQCqepS2k5wcLKdXd56XeyfEi6831JhEJWJa','2023-05-29 19:30:52','2023-05-29 19:30:52',1,2),(25,'Andrés Felipe','Barajas Wellman','1007249454','C.C','test132','$2a$10$wj9Sqed78syT9PwdK/se5OzkNTtGRdHR9i/JesDBWxrxf/qBOAc5q','2023-05-29 19:33:46','2023-05-29 19:33:46',1,2),(27,'Andrés felipe','Sistema Barajas wellman','213123123123','C.C','test1WQE','$2a$10$bnhy1ZDO8LeNoMKElf0clekyg0FcG6JaDtrO.7bLfJ3l4FOffkCn2','2023-07-08 23:09:03','2023-07-08 23:09:03',1,2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'pae'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-08 19:19:21
