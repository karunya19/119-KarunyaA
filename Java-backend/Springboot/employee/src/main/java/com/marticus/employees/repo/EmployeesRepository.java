package com.marticus.employees.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marticus.employees.entity.EmployeesEntity;

@Repository
public interface EmployeesRepository extends JpaRepository<EmployeesEntity, Integer> {

	EmployeesEntity findEmployeesById(int id);

}
