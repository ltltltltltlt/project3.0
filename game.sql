/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : game

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2018-04-02 21:33:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('1', '11', '11', '6512bd43d9caa6e02c990b0a82652dca');

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `level` varchar(255) DEFAULT NULL,
  `star` varchar(32) DEFAULT NULL,
  `sex` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('1', '11', '11', '6512bd43d9caa6e02c990b0a82652dca', null, null, null, null);
INSERT INTO `student` VALUES ('2', 'asf', 'adc', '818f9c45cfa30eeff277ef38bcbe9910', null, null, null, null);
INSERT INTO `student` VALUES ('3', '22', '22', 'b6d767d2f8ed5d21a44b0e5886680cb9', null, null, null, null);
INSERT INTO `student` VALUES ('4', '33', '33', '182be0c5cdcd5072bb1864cdee4d3d6e', null, null, null, null);
INSERT INTO `student` VALUES ('5', '44', '44', 'f7177163c833dff4b38fc8d2872f1ec6', null, null, null, null);
INSERT INTO `student` VALUES ('6', '55', '55', 'b53b3a3d6ab90ce0268229151c9bde11', null, null, null, null);
INSERT INTO `student` VALUES ('7', 'er', '12345678@qq.com', '25d55ad283aa400af464c76d713c07ad', 'http://localhost:8080/static/img/avatar02.png', null, '0', null);
INSERT INTO `student` VALUES ('8', 'mick', 'mick@163.com', '409e061a94a638b018132d29a24f7f24', 'http://localhost:8080/static/img/avatar10.png', '1', '0', 'male');
INSERT INTO `student` VALUES ('9', 'john', 'john@123.com', 'b5e42f49ab3acf8f6c2ccf99f604a17f', 'static/img/avatar00.png', '1', '0', 'male');
INSERT INTO `student` VALUES ('10', 'yoyoyo', 'yoyoyo@123.com', '0f2bfa99c367e833d82a24fe465d200a', 'http://localhost:8080/static/img/avatar02.png', '1', '0', 'female');

-- ----------------------------
-- Table structure for teacher
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO `teacher` VALUES ('1', '11', '11', '6512bd43d9caa6e02c990b0a82652dca');
