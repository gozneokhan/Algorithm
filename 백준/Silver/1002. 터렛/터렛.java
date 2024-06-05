import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int T = sc.nextInt();
        
        for (int i=0; i < T; i++) {
            int x1 = sc.nextInt();
            int y1 = sc.nextInt();
            int r1 = sc.nextInt();
            int x2 = sc.nextInt();
            int y2 = sc.nextInt();
            int r2 = sc.nextInt();

            int dx = x2 - x1;
            int dy = y2 - y1;
            double d = Math.sqrt(dx * dx + dy * dy);
            
            if (d == 0 && r1 == r2) {
                System.out.println(-1); 
            } else if (d == r1 + r2 || d == Math.abs(r1 - r2)) {
                System.out.println(1); 
            } else if (Math.abs(r1 - r2) < d && d < r1 + r2) {
                System.out.println(2);
            } else {
                System.out.println(0);
            }
        }
        
        sc.close();
    }
}