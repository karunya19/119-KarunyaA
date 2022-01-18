package springmvcexample.utility;

import static org.junit.Assert.*;

import org.junit.Test;

public class CalculatorTest {

	@Test
	public void testAdd() {
//		fail("Not yet implemented");
		Calculator c= new Calculator();
		assertTrue(c.add(2, 3)==5);
	}
	
	@Test
	public void testSub() {
//		fail("Not yet implemented");
		Calculator c= new Calculator();
		assertTrue(c.sub(7, 3)==4);
	}

}
