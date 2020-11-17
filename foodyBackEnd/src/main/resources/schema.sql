DROP SCHEMA IF EXISTS `foody`;
CREATE SCHEMA `foody`;
USE `foody`;

SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `recipes`;
CREATE TABLE `recipes`(
	`id` int(20) NOT NULL AUTO_INCREMENT,
    `name` varchar(50) DEFAULT NULL,
    `description` varchar(400) DEFAULT NULL,
    `imagepath` varchar(400) DEFAULT NULL,
    
    primary key(`id`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

drop table if exists `usersauth`;
create table `usersauth`(
	`id` int(20) not null auto_increment,
    `username` varchar(20) NOT NULL,
    `password` varchar(40) NOT NULL,
    `role` varchar(40) NOT NULL,
    
    primary key(`id`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

drop table if exists `orders`;
create table `orders`(
	`id` int(20) not null auto_increment,
    `date` date default null,
    `userid` int(20) default null,
	
    primary key(`id`),
    
    foreign key(`userid`) references `usersauth`(`id`)
    on delete no action on update no action
    
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

drop table if exists `ingredients`;
create table `ingredients`(
	`id` int(20) not null auto_increment,
    `name` varchar(50) default null,
    `amount` int(20) default null,
    `recipeid` int(20) default null,
    `orderid` int(20) default null,
    
    primary key(`id`),
    
    foreign key(`recipeid`) references `recipes`(`id`)
    on delete no action on update no action,
    foreign key(`orderid`) references `orders`(`id`)
    on delete no action on update no action
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

SET FOREIGN_KEY_CHECKS=1;

insert into `foody`.`usersauth`(`username`, `password`,`role`) values ('admin', 'admin', 'ROLE_ADMIN');
insert into `foody`.`usersauth`(`username`, `password`,`role`) values ('vivek', 'vivek', 'ROLE_USER');