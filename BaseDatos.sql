CREATE DATABASE Usuario;


CREATE TABLE Usuarios (
	Id_Person int primary key not null auto_increment,
    Name_Completo varchar (30) not null,
    Email varchar (30) not null,
    Pasword varchar (30) not null,
    Course varchar (30) not null 
    );

CREATE TABLE Cursos (
	Id_Course int primary key not null auto_increment,
    Name_Course varchar (30) not null,
    Duracion varchar (30) not null,
    Nivel varchar (30) not null
    );
 
CONSTRAINT FOREIGN KEY (Name_Course) REFERENCES (Id_Person);




    

