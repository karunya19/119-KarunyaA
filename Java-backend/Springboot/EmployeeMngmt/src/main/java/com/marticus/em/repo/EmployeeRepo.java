package com.marticus.em.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marticus.em.entity.EmployeeEntity;

@Repository
public interface EmployeeRepo extends JpaRepository<EmployeeEntity,Long> {

	EmployeeEntity findEmployeesById(int id);

	List<EmployeeEntity> findEmployeesByEmpNameContaining(String search);
	
	

}
