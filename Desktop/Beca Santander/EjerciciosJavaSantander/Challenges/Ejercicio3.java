/* Challenge 3: Check Odd/Even
Write a method called checkOddEven which prints "Odd Number" if the int variable “number” is odd, or “Even Number” otherwise.

Hint n is an even number if (n % 2) is 0; otherwise, it is an odd number. Use == for comparison, e.g., (n % 2) == 0. */

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);
        System.out.print("Ingrese un numero: ");
        int num = reader.nextInt();
        String values = checkOddEven(num);
  }

  public static String checkOddEven(int num) {
        int value = num;
        String values = Integer.toString(value);
        if(value % 2 == 0){
            System.out.println(num + " es par");
        }else{
            System.out.println(num + " es impar");
        }
    return values;
  }
}