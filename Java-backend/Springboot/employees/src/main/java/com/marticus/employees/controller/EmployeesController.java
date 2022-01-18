package com.marticus.employees.controller;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.marticus.employees.entity.EmployeesEntity;
import com.marticus.employees.service.EmployeesService;



//import com.marticus.customer.entity.CustomerEntity;
//import com.marticus.customer.entity.RestData;
//import com.marticus.customer.service.CustomerService;
//import com.marticus.customer.utility.JwtToken;

//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@RequestMapping("/employees")
public class EmployeesController {
	
	@Autowired
	EmployeesService employeesService;
	
	@Autowired
	RestTemplate template;

	@GetMapping("/")
	public ResponseEntity<List<EmployeesEntity>>getAll()
	{
		List<EmployeesEntity> empList= employeesService.findAllEmployees();
		return ResponseEntity.ok(empList);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<EmployeesEntity>getEmployees(@PathVariable("id") int id)
	{
		EmployeesEntity employeesEntity= employeesService.findEmployeesById(id);
		return ResponseEntity.ok(employeesEntity);
	}
	
//	@GetMapping("/{emp_id}")
//	public ResponseEntity<EmployeesEntity>getEmployees(@PathVariable("emp_id") int emp_id)
//	{
//		EmployeesEntity employeesEntity= employeesService.findEmployeesById(emp_id);
//		return ResponseEntity.ok(employeesEntity);
//	}
}
