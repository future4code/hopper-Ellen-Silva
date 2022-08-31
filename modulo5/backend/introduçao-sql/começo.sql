create table pessoas (
id varchar(3) not null,
nome varchar(40),
email varchar(100) not null unique,

primary key(id)
);
