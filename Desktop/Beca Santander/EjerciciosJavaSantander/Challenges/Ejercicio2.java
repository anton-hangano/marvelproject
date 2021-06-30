/* Challenge 2: Print number in word
Write a program called printNumberInWord which prints "ONE", "TWO",... , "NINE", "OTHER" if the int variable "number" is 1, 2,... , 9, or other, respectively. Use:

(a) a "nested-if" statement;

(b) a "switch-case-default" statement. */

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
   Scanner reader = new Scanner(System.in);
   System.out.print("Ingrese un numero: ");
   int num = reader.nextInt();
  String values = printNumberInWord(num);
  String values2 = printNumberInWordSwitch(num);
  }

  public static String printNumberInWord(int num) {
       int value = num;
        String values = Integer.toString(value);
        if(value == 1){
         System.out.println("ONE");
        }else if(value == 2){
         System.out.println("TWO");
        }else if(value == 3){
         System.out.println("THREE");
        }else if(value == 4){
         System.out.println("FOUR");
        }else if(value == 5){
          System.out.println("FIVE");
        }else if(value == 6){
          System.out.println("SIX");
        }else if(value == 7){
          System.out.println("SEVEN");
        }else if(value == 8){
          System.out.println("EIGHT");
        }else if(value == 9){
          System.out.println("NINE");
        }else {
          System.out.println("OTHER");
        }
      return values;
  }

  public static String printNumberInWordSwitch(int num) {
       int value = num;
        String values2 = Integer.toString(value);
        switch(value){
        case 1:
         System.out.println("ONE");
         break;
        case 2:
         System.out.println("TWO");
        break;
        case 3:
         System.out.println("THREE");
        break;
        case 4:
         System.out.println("FOUR");
        break;
        case 5:
          System.out.println("FIVE");
        break;
        case 6:
          System.out.println("SIX");
        break;
        case 7:
          System.out.println("SEVEN");
        break;
        case 8:
          System.out.println("EIGHT");
        break;
        case 9:
          System.out.println("NINE");
        break;
        default:
          System.out.println("OTHER");
        }
      return values2;
  }

}