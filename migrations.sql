CREATE TABLE task (
    id                bigint NOT NULL AUTO_INCREMENT primary key , 
    name			  varchar(255),
    description		  varchar(255),
    task_name		  varchar(255),
    status            varchar(80)
);

INSERT INTO task( VALUES (1, 'name', 'description', 'task_name', 'Completed');
