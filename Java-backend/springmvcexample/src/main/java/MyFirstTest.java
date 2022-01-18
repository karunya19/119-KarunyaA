import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class MyFirstTest {
	
	int age=19;
	String name;
	
	@Before
	public void setUp() {
//		age=19;
		name="karunya";
		System.out.println("Inside setUp");
	}
	
	@After
	public void tearDown()
	{
		System.out.println("tearDown method is called");
		age=0;
		name=null;
	}


	@Test
	public void test() {
		
		System.out.println("age="+age);
//		fail("Not yet implemented");
		
//		String str="abc";
//		String str1="xyz";
//		int i=5
//				//assertTrue(i>20);
//				//assertFalse(i>20);
//				//assertNull(str);
//				assertsEquals(str, str1);
		
//		boolean b=true;
//		int i=5;
//		assertTrue(i>20);
	}
	
	@Test
	public void checkIfAdult()
	{
		System.out.println("Inside checkIfAdult");
//		System.out.println("age="+age);
//		assertTrue(age>=18);
//		
	}

}
