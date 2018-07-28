CREATE TABLE task (
    id                bigint NOT NULL AUTO_INCREMENT primary key , 
    name			  varchar(255),
    description		  varchar(255),
    task_name		  varchar(255),
    status            varchar(80)
);