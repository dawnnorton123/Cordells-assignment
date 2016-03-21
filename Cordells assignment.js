import java.util.Scanner;
public class Recursio {

	public static void main(String[] args) {
		
	Scanner scanner = new Scanner(System.in);
	
	String word;
	
	System.out.println("Please enter a word ");
	word =scanner.next();
	int length = word.length();
	
	recursive(word,length,0,1);
		
	}
	public static String recursive(String st,int L,int i,int j)
			{
		if(L ==0)
		{
		return(st);	
		}
		
		System.out.println(st.substring(i, j));
		
		return(recursive(st,L-1,i+1,j+1));
		
		
			}

}

import java.math.BigInteger;
import java.util.Scanner;
public class FactorialCalculator {
	
	public static BigInteger factorial(BigInteger number)
	{
		if(number.compareTo(BigInteger.ONE)<= 0)//test base case
			return BigInteger.ONE;
		else
			return number.multiply(factorial(number.subtract(BigInteger.ONE)));
	}
	public static void main(String[] args)
	{
		int number;
		Scanner input = new Scanner(System.in);
		
		System.out.println(" Please enter a number up to 15");
		number = input.nextInt();
		
		
		for (int counter = 0; counter <= number; counter++)
			System.out.println(" " + counter + factorial(BigInteger.valueOf(counter)));
	}
	

}

import java.math.BigInteger;
import java.util.Scanner;
public class Recursion1 {

	
		public static void main(String[] args) {
			
			Scanner scanner = new Scanner(System.in);
			
			String word;
			int number;
			
			System.out.println("Please enter a word ");
			word =scanner.next();
			int length = word.length();
			
			recursive(word,length,0,1);
				
			}
			public static String recursive(String st,int L,int i,int j)
				{
				if(L ==0)
				{
				return(st);	
				}
				
				System.out.println(st.substring(i, j));
				
				return(recursive(st,L-1,i+1,j+1));
				}
			
			public static BigInteger factorial(BigInteger number)
			{
				if(number.compareTo(BigInteger.ONE)<= 0)//test base case
					return BigInteger.ONE;
				else
					return number.multiply(factorial(number.subtract(BigInteger.ONE)));
			}
			
			System.out.println(" Please enter a number up to 15");
			number = input.nextInt();
			
			
			for (int counter = 0; counter <= number; counter++)
				System.out.println(" " + counter + factorial(BigInteger.valueOf(counter)));
			
		

	}



