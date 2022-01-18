package com.marticus.department.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marticus.department.entity.DepartmentEntity;
import com.marticus.department.repo.DepartmentRepository;

@Service
public class DepartmentService {
	
	@Autowired
	DepartmentRepository departmentRepository;
	
	public void saveCustomer(DepartmentEntity departmentEnt) {
		
		
		departmentRepository.save(departmentEnt);
	}
	
	public DepartmentEntity findDepartmentById(long id)
	{
//		return departmentRepository.findDepartmentById(id);
		return departmentRepository.findDepartmentRepositoryById(id);
	}
	
	public List<DepartmentEntity> findAllDepartments() {
		
		return departmentRepository.findAll();
		
	}

}