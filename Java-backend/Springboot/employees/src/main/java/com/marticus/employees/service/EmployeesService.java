package com.marticus.employees.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.marticus.employees.repo.EmployeesRepository;
import com.marticus.employees.entity.EmployeesEntity;

@Service
public class EmployeesService {

	@Autowired
	EmployeesRepository employeesRepository;

	public EmployeesEntity findEmployeesById(int id) {
		// TODO Auto-generated method stub
		return employeesRepository.findEmployeesById(id);
	}

	public List<EmployeesEntity> findAllEmployees() {
		// TODO Auto-generated method stub
		return employeesRepository.findAll(Sort.by(Sort.Direction.ASC,"name"));
	}
	
	
}
