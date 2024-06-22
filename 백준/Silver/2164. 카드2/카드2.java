import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Queue 인터페이스를 구현한 LinkedList를 사용하여 큐를 생성한다.
        Queue<Integer> myQueue = new LinkedList<>();
        int N = sc.nextInt();
        // 1부터 N까지의 정수를 큐에 추가합니다.
        for(int  i = 1; i <= N; i++) {
            myQueue.add(i);
        }
        // 큐에 요소가 하나 남을 때까지 반복한다.
        while (myQueue.size() > 1) { 
            // 큐의 맨 앞 요소를 제거합니다.
            myQueue.poll();
            // 그 다음 요소를 제거하고 다시 큐의 맨 뒤에 추가한다.
            int temp = myQueue.poll();
            myQueue.add(temp);
        }
        System.out.println(myQueue.poll());

    }
}
