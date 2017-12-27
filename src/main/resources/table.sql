/*
Navicat MySQL Data Transfer

Source Server         : yun
Source Server Version : 50638
Source Host           : 101.236.32.3:3306
Source Database       : farmdb

Target Server Type    : MYSQL
Target Server Version : 50638
File Encoding         : 65001

Date: 2017-12-27 17:12:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `filed_info`
-- ----------------------------
DROP TABLE IF EXISTS `filed_info`;
CREATE TABLE `filed_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `merchantid` int(45) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `monitorurl` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `version` int(45) DEFAULT NULL,
  `price` float DEFAULT '30',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of filed_info
-- ----------------------------
INSERT INTO `filed_info` VALUES ('1', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('2', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('3', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('4', '1', '10', 'http://monitoe.com', 'd', '2', '1', '30');
INSERT INTO `filed_info` VALUES ('5', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('6', '1', '10', 'http://monitoe.com', 'd', '1', '2', '30');
INSERT INTO `filed_info` VALUES ('7', '1', '10', 'http://monitoe.com', 'd', '1', '1', '30');
INSERT INTO `filed_info` VALUES ('8', '1', '10', 'http://monitoe.com', 'd', '1', '2', '30');
INSERT INTO `filed_info` VALUES ('9', '1', '10', 'http://monitoe.com', 'd', '1', '2', '30');
INSERT INTO `filed_info` VALUES ('10', '1', '10', 'http://monitoe.com', 'd', '1', '2', '30');
INSERT INTO `filed_info` VALUES ('11', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('12', '1', '10', 'http://monitoe.com', 'd', '2', '1', '30');
INSERT INTO `filed_info` VALUES ('13', '1', '10', 'http://monitoe.com', 'd', '1', '2', '30');
INSERT INTO `filed_info` VALUES ('14', '1', '10', 'http://monitoe.com', 'd', '2', '1', '30');
INSERT INTO `filed_info` VALUES ('15', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('16', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('17', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('18', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('19', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('20', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('21', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('22', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('23', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('24', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('25', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('26', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('27', '1', '10', 'http://monitoe.com', 'd', '1', '2', '30');
INSERT INTO `filed_info` VALUES ('28', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('29', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('30', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('31', '1', '10', 'http://monitoe.com', 'd', '1', '2', '30');
INSERT INTO `filed_info` VALUES ('32', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('33', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('34', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('35', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('36', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('37', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('38', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('39', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('40', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('41', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('42', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('43', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('44', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('45', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('46', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('47', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('48', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('49', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('50', '1', '10', 'http://monitoe.com', 'd', '1', '2', '30');
INSERT INTO `filed_info` VALUES ('51', '1', '10', 'http://monitoe.com', 'd', '1', '2', '30');
INSERT INTO `filed_info` VALUES ('52', '1', '10', 'http://monitoe.com', 'd', '1', '2', '30');
INSERT INTO `filed_info` VALUES ('53', '1', '10', 'http://monitoe.com', 'd', '1', '2', '30');
INSERT INTO `filed_info` VALUES ('54', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('55', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('56', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('57', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('58', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('59', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('60', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('61', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('62', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('63', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('64', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('65', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('66', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('67', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('68', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('69', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');
INSERT INTO `filed_info` VALUES ('70', '1', '10', 'http://monitoe.com', 'd', '0', '1', '30');

-- ----------------------------
-- Table structure for `merchant_info`
-- ----------------------------
DROP TABLE IF EXISTS `merchant_info`;
CREATE TABLE `merchant_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `provice` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `town` varchar(45) DEFAULT NULL,
  `merchant_name` varchar(45) DEFAULT NULL,
  `merchant_address` varchar(45) DEFAULT NULL,
  `merchant_phone` varchar(45) DEFAULT NULL,
  `merchant_field_size` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of merchant_info
-- ----------------------------
INSERT INTO `merchant_info` VALUES ('1', '江苏', '南通', '如皋', '商家1', '升名国际', '15861858916', '40');
INSERT INTO `merchant_info` VALUES ('2', '江苏', '南通', '启东', '商家2', '汇龙', '18817779308', '50');
INSERT INTO `merchant_info` VALUES ('3', '上海', '浦东', '南汇', '商家3', '陆家嘴', '11122211253', '100');
INSERT INTO `merchant_info` VALUES ('4', '江苏', '南通', '如皋', '商家1', '升名国际', '15861858916', '40');
INSERT INTO `merchant_info` VALUES ('5', '江苏', '南通', '启东', '商家2', '汇龙', '18817779308', '50');
INSERT INTO `merchant_info` VALUES ('6', '上海', '浦东', '南汇', '商家3', '陆家嘴', '11122211253', '100');
INSERT INTO `merchant_info` VALUES ('7', '江苏', '南通', '如皋', '商家', '升名国际', '15861858917', '45');
INSERT INTO `merchant_info` VALUES ('8', '江苏', '南通', '如皋', '商家', '升名国际', '15861858917', '45');
INSERT INTO `merchant_info` VALUES ('9', '江苏', '南通', '如皋', '商家', '升名国际', '15861858917', '45');
INSERT INTO `merchant_info` VALUES ('10', '江苏', '南通', '如皋', '商家', '升名国际', '15861858917', '45');
INSERT INTO `merchant_info` VALUES ('11', '江苏', '南通', '如皋', '商家', '升名国际', '15861858917', '45');
INSERT INTO `merchant_info` VALUES ('12', '江苏', '南通', '如皋', '商家', '升名国际', '15861858917', '45');
INSERT INTO `merchant_info` VALUES ('13', '江苏', '南通', '如皋', '商家', '升名国际', '15861858917', '45');
INSERT INTO `merchant_info` VALUES ('14', '江苏', '南通', '如皋', '商家', '升名国际', '15861858917', '45');
INSERT INTO `merchant_info` VALUES ('15', '江苏', '南通', '如皋', '商家', '升名国际', '15861858917', '45');
INSERT INTO `merchant_info` VALUES ('16', '江苏', '南通', '如皋', '商家', '升名国际', '15861858917', '45');
INSERT INTO `merchant_info` VALUES ('17', '江苏', '南通', '如皋', '商家', '升名国际', '15861858917', '45');
INSERT INTO `merchant_info` VALUES ('18', '江苏', '南通', '如皋', '商家', '升名国际', '15861858917', '45');
INSERT INTO `merchant_info` VALUES ('19', '江苏', '南通', '如皋', '商家', '升名国际', '15861858917', '45');
INSERT INTO `merchant_info` VALUES ('20', '江苏', '南通', '如皋', '商家', '升名国际', '15861858917', '45');
INSERT INTO `merchant_info` VALUES ('21', '江苏', '南通', '如皋', '商家', '升名国际', '15861858917', '45');
INSERT INTO `merchant_info` VALUES ('22', '江苏', '南通', '如皋', '商家', '升名国际', '15861858917', '45');

-- ----------------------------
-- Table structure for `user_filed_detail`
-- ----------------------------
DROP TABLE IF EXISTS `user_filed_detail`;
CREATE TABLE `user_filed_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filed_id` int(11) DEFAULT NULL,
  `user_phone` varchar(255) DEFAULT NULL,
  `term` int(11) DEFAULT NULL,
  `begin_time` datetime DEFAULT NULL,
  `oever_time` datetime DEFAULT NULL,
  `price` double DEFAULT NULL,
  `total` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_filed_detail
-- ----------------------------

-- ----------------------------
-- Table structure for `user_info`
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `user_phone` varchar(11) NOT NULL,
  `nick_name` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `user_infocol` varchar(45) DEFAULT NULL,
  `id_card` varchar(45) DEFAULT NULL,
  `user_type` varchar(45) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `login_time` datetime DEFAULT NULL,
  `des` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('15861858916', null, null, null, null, '1', '2017-12-26 13:50:09', '2017-12-27 16:28:37', null);

-- ----------------------------
-- Table structure for `valiate_code`
-- ----------------------------
DROP TABLE IF EXISTS `valiate_code`;
CREATE TABLE `valiate_code` (
  `user_phone` varchar(45) NOT NULL,
  `code` varchar(45) NOT NULL,
  `create_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`user_phone`,`code`,`create_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of valiate_code
-- ----------------------------
INSERT INTO `valiate_code` VALUES ('15861858916', '1141', '2017-12-27 10:56:07');
INSERT INTO `valiate_code` VALUES ('15861858916', '6513', '2017-12-26 13:47:10');
INSERT INTO `valiate_code` VALUES ('15861858916', '7873', '2017-12-27 16:27:16');
INSERT INTO `valiate_code` VALUES ('15861858916', '8711', '2017-12-27 16:27:59');
