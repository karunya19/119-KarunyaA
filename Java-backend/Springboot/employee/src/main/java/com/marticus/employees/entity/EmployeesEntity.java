package com.marticus.employees.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "emp_details")
@NoArgsConstructor
public class EmployeesEntity {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@Column(name="emp_id")
	int empid;
	
	@Column(name="emp_name")
	String name;
	
	@Column(name="proj_id")
	int projid;

}