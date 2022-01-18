package com.marticus.customer.controller;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.marticus.customer.entity.CustomerEntity;
import com.marticus.customer.service.CustomerService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;



@RestController
@RequestMapping("/customer")
public class CustomerController {
	
	@Autowired
	CustomerService customerService;
	
	@PostMapping("/")
	public ResponseEntity<Void>saveCustomer(@RequestBody CustomerEntity customerEntity)
	{
		
		customerService.saveCustomer(customerEntity);
		return ResponseEntity.status(HttpStatus.CREATED).header("Records", "Created").build();
	}

	@GetMapping("/{id}")
	public ResponseEntity<CustomerEntity> getCustomerById(@PathVariable("id") int id)
	{
		CustomerEntity customerEntity = customerService.findCustomerById(id);
		return ResponseEntity.ok(customerEntity);
	}
	
	
	@GetMapping("/")
	public ResponseEntity<List<CustomerEntity>> getCustomerAll()
	{
		List<CustomerEntity> customerEntity1= customerService.findAllCustomers();
		return ResponseEntity.ok(customerEntity1);
	}
	
	@DeleteMapping("/{id}")
	
		public ResponseEntity<String> deleteCustomerById(@PathVariable("id") Long id){
		String body="Record deleted Successfully";
		Boolean delStatus=customerService.deleteCustomerById(id);
		if(!delStatus)
		{
			body ="coud not delete the record";
			
		}
			return ResponseEntity.ok().body(body);
	}
	

	@PutMapping("/")
	public ResponseEntity<CustomerEntity> update(@RequestBody CustomerEntity customerEntity)
	{
		
		CustomerEntity cust= customerService.update(customerEntity);
		return ResponseEntity.ok(cust);
		
	}
	
	@GetMapping("/fetch/{name}")
	public ResponseEntity<List<CustomerEntity>> getCustomerByName(@PathVariable String name)
	{
		List<CustomerEntity> customerEntity= customerService.findCustomerByName(name);
		return ResponseEntity.ok(customerEntity);
	}
	
	
	@GetMapping("/fetchp/{name}")
	public ResponseEntity<List<CustomerEntity>> getCustomerByNameLike(@PathVariable String name)
	{
		List<CustomerEntity> customerEntity= customerService.findCustomerByNameLike(name);
		return ResponseEntity.ok(customerEntity);
	}
	
	@GetMapping("/fetchp/{name}/{custid}")
	public ResponseEntity<List<CustomerEntity>> getCustomerByNameLike(@PathVariable String name,@PathVariable String custid)
	{
		List<CustomerEntity> customerEntity= customerService.findCustomerByNameAndCustomerId(name,custid);
		return ResponseEntity.ok(customerEntity);
	}
	
//	@PostMapping("/login/{username}/{password}")
//	public ResponseEntity<String> login(@PathVariable("username") String userName,
//			@PathVariable("password")  String password)
//	{
//		 
//		//String str=getToken();	
//		
//		return ResponseEntity.ok(strs);
//	}
	
	@GetMapping("/login/{username}/{pwd}")
	public ResponseEntity<String> login(@PathVariable String username, 
			@PathVariable String pwd)
	{
		 
		String str=getJWTToken();
		
		
		
		return ResponseEntity.ok(str);
	}
}