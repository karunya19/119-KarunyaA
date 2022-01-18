package com.marticus.customer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.marticus.customer.entity.CustomerEntity;
import com.marticus.customer.repo.CustomerRepository;



@Service
public class CustomerService {
	
	@Autowired
	CustomerRepository customerRepository;
	
	public void saveCustomer(CustomerEntity customerEnt) {
		
		
		customerRepository.save(customerEnt);
	}
	
	public CustomerEntity findCustomerById(long id)
	{
		return customerRepository.findCustomerById(id);
	}

	public List<CustomerEntity> findAllCustomers() {
		
		return customerRepository.findAll(Sort.by(Sort.Direction.ASC,"customerName"));

	}
	
	public Boolean deleteDepartmentById(Long id)
	{
		CustomerEntity cust=customerRepository.findCustomerById(id);
		if(cust!=null)
		{
			customerRepository.delete(cust);
		
		return true;
		
	}
	return false;
	}
	

	public CustomerEntity update(CustomerEntity customerEntity) {
		// TODO Auto-generated method stub
		CustomerEntity custDB = customerRepository.findCustomerById(customerEntity.getId());
		custDB.setCustomerName(customerEntity.getCustomerName());
		custDB.setCustomerCode(customerEntity.getCustomerCode());
		customerRepository.save(custDB);
		return custDB;
		
	}

	public Boolean deleteCustomerById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<CustomerEntity> findCustomerByName(String name) {
		
		
		return customerRepository.findCustomerByCustomerName(name);
		// TODO Auto-generated method stub
	 
	}

	public List<CustomerEntity> findCustomerByNameLike(String name) {
		return customerRepository.findCustomerByCustomerNameContaining(name);
	 
		 
	}

	public List<CustomerEntity> findCustomerByNameAndCustomerId(String name, String custId) {
		
		 return customerRepository.findCustomerByCustomerNameContainingAndCustomerCode(name,custId);
	}
	
}
