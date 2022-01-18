package com.marticus.demo.controller;

import org.springframework.web.bind.annotation.RestController;

import com.marticus.demo.model.Employe;
import com.marticus.demo.model.Student;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
@RestController
@RequestMapping(path ="/hello")
public class HelloWorld {

	private List<Student> lstEmp;
	@GetMapping("/first")
	public String sayHello() 
	{
		return "Hello World";
	}
	
	
	@GetMapping("/second/{id}")
	public int sayHello1(@PathVariable int id)
	{
		
		return id;
		
	}


	
	@PostMapping(path="/firststatic")
	 public ResponseEntity<String> save(String input)
	 {
		
		 HttpHeaders header = new HttpHeaders();
	     header.add("header1", "This is my header 1");
	     header.add("header2", "This is my header 2");
	     return ResponseEntity.status(HttpStatus.CREATED).headers(header).body("Hello");
		
		
	 }
	 
	 @PostMapping(path="/object")
	 public ResponseEntity<String> save1(String input)
	 {
		 ResponseEntity<String> res1= new ResponseEntity<>("Hello",HttpStatus.OK);
		 	 
	     return res1;
		
		
	 }
	 
	 @PostMapping(path="/inline")
	 public ResponseEntity<String> save11(String input)
	 {
		 return ResponseEntity.status(HttpStatus.CREATED)
				 .header("H1", "Value 1")
				 .header("H2", "Value 2")
				 .body("Test");
		   	
		
	 }
	 
	 @PostMapping(path="/nobody")
	 public ResponseEntity<Void> save111(String input)
	 {
		 return ResponseEntity.status(HttpStatus.CREATED)
				 .header("H1", "Value 1")
				 .header("H2", "Value 2")
				 .build();
		  	
		
	 }
	 
	 
	 @PostMapping(path="/reqhdr")
	 public ResponseEntity<String> reqhdr(        
			 @RequestHeader(name = "X-COM-PERSIST", required = true) String headerPersist,
             @RequestHeader(name = "X-COM-LOCATION", required = false, defaultValue = "ASIA") String headerLocation,
             @RequestBody String str)
	 {
		 
		 
		 String returnVal="X-COM-PERSIST="+headerPersist+"X-COM-LOCATION="+headerLocation;
		 
		 return ResponseEntity.ok(returnVal);
		  	
		
	 }
	 @PostMapping(path="/getStudent")
	 public ResponseEntity<Student> getStudent(@RequestBody String input)
	 {
 		 
 		 System.out.println("input="+input);	
 		 Student st= new Student("st1","Jayanta1");
 		 
		 return ResponseEntity.status(HttpStatus.CREATED).header("X-INPUT", input)
			 .body(st);
		   	
		
	 }

	 
	 @PostMapping(path="/getStudents")
	 public ResponseEntity<List<Student>> getStudents(@RequestBody String input)
	 {
 		 
 		 List<Student> lstStu= new ArrayList<Student>();
 		 Student st= new Student("st1","Jayanta1");
 		 Student st1= new Student("st1","Moumita");
 		 Student st11= new Student("st1","Amit");
 		 lstStu.add(st);
 		 lstStu.add(st1);
 		 lstStu.add(st11);
 		 
		 return ResponseEntity.status(HttpStatus.CREATED).header("X-INPUT", input)
			 .body(lstStu);
		   	
		
	 }
	 @PostMapping(path="/processStudents")
	 public ResponseEntity<Void> processStudents(@RequestBody List<Student> studentList)
	 {
 		 for(Student stu:studentList)
 		 {
 			 System.out.println("Name="+stu.getStuName());
 			 
 		 }
 		
 		
		 
		 return ResponseEntity.status(HttpStatus.CREATED).header("X-INPUT", "Test").build();
			 
		   	
		
	 }
	 
	 @PostMapping(path="/getEmploye")
	 public ResponseEntity<Employe> getEmploye(@RequestBody String input)
	 {
 		 
 		 System.out.println("input="+input);	
 		 Employe emp= new Employe("emp1","Jayanta1");
 		 
		 return ResponseEntity.status(HttpStatus.CREATED).header("X-INPUT", input)
			 .body(emp);
		   	
		
	 }

	 
	 @PostMapping(path="/getEmployee")
	 public ResponseEntity<List<Employe>> getEmployee(@RequestBody String input)
	 {
 		 
 		 List<Employe> lstEmp= new ArrayList<Employe>();
 		Employe em1= new Employe("emp1","Jayanta1");
 		Employe em2= new Employe("emp1","Moumita");
 		Employe em3= new Employe("emp1","Amit");
 		 lstEmp.add(em1);
 		 lstEmp.add(em2);
 		 lstEmp.add(em3);
 		 
		 return ResponseEntity.status(HttpStatus.CREATED).header("X-INPUT", input)
			 .body(lstEmp);
		   	
		
	 }
	 @PostMapping(path="/processEmployee")
	 public ResponseEntity<Void> processEmployee(@RequestBody List<Employe> EmployeList)
	 {
 		 for(Employe emp:EmployeList)
 		 {
 			 System.out.println("Name="+emp.getEmpName());
 			 
 		 }
 		
 		
		 
		 return ResponseEntity.status(HttpStatus.CREATED).header("X-INPUT", "Test").build();
			 
		   	
		
	 }





}