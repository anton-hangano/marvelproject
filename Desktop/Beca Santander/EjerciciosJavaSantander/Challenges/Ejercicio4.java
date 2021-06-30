
/*Challenge 4: Calculate the average
Write a method average that returns the average of the integer in the list. You can assume that the list has at least one element. */

public class Main {
  public static void main(String[] args) {
    int[] listNum = new int [] {6,34,1,24,78,3};
    float m = average(listNum);                    
    System.out.println(m);                         
  }


    public static int average(int[] num){
        float sum = 0;
        int i=0;
        while(i < num.length) {
            sum += num[i];
            i++;
        }
        float average = (sum / num.length); 
         
        return (int)average;
    }
}
  