/* Challenge 1: Find Maximum
Write a method maximum that returns the largest integer in the list. You can assume that the list has at least one element. */

public class Main {

   public static void main(String[] args) {
    int[] intArray = new int [] {6,34,1,24,78,3}; 
    int m = maximum(intArray);  
    System.out.println(m); 
  }
   public static int maximum(int[] numList) {       
        int max = numList[0];  
            for (int el : numList) {       
            if (el > max) {    
                max = el;   
              }

            }
     return max;    
    }
}