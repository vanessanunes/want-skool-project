

create table student (
	student_id serial primary key,
	name varchar(225) not null,
	cpf varchar(11) unique,
	birthdate date not null,
	payment_method varchar(15) not null
);


create table enrollment(
	enrollment_id serial primary key,
	amount int check(amount > 0) not null,
	installments int check(installments > 1) not null,
	due_date int check(due_date > 1 and due_date < 31) not null,
	student_id int,
	foreign key (student_id) references student(student_id)
);


create table bill(
	amount int check(amount > 0) not null,
	due_date date not null,
	status varchar(10) not null,
	enrollment_id int,
	foreign key(enrollment_id) references enrollment(enrollment_id)
);

INSERT INTO public.student (name,cpf,birthdate,payment_method) VALUES
	 ('Vanessa','123456677','1992-03-22','credit');
