package com.marticus.demo.model;

public class Employe {

	

    String empID;
    String empName;
    
    
  
	public Employe(String empID, String empName) {
		
		
		super();
		this.empID = empID;
		this.empName = empName;
}



	public String getEmpID() {
		return empID;
	}



	public void setEmpID(String empID) {
		this.empID = empID;
	}



	public String getEmpName() {
		return empName;
	}



	public void setEmpName(String empName) {
		this.empName = empName;
	}


}