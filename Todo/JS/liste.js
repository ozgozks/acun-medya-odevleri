
public class TodoList {
    private ArrayList<String> tasks;
    
    public TodoList() {
        tasks = new ArrayList<>();
    }
    
    public void addTask(String task) {
        tasks.add(task);
    }
    
    public void removeTask(int index) {
        if (index >= 0 && index < tasks.size()) {
            tasks.remove(index);
        } else {
            System.out.println("Geçersiz indeks!");
        }
    }
    
    public void printTasks() {
        if (tasks.isEmpty()) {
            System.out.println("Yapılacak iş bulunmamaktadır.");
        } else {
            System.out.println("Yapılacaklar Listesi:");
            for (int i = 0; i < tasks.size(); i++) {
                System.out.println((i + 1) + ". " + tasks.get(i));
            }
        }
    }
    
    public static void main(String[] args) {
        TodoList todoList = new TodoList();
        Scanner scanner = new Scanner(System.in);
        int choice = 0;
        
        while (choice != 4) {
            System.out.println("Yapılacaklar Listesi Uygulaması");
            System.out.println("1. Yeni görev ekle");
            System.out.println("2. Görev sil");
            System.out.println("3. Görevleri listele");
            System.out.println("4. Çıkış");
            System.out.print("Seçiminizi yapın (1-4): ");
            
            choice = scanner.nextInt();
            
            switch (choice) {
                case 1:
                    System.out.print("Yeni görevi girin: ");
                    scanner.nextLine(); // Boşluğu temizle
                    String newTask = scanner.nextLine();
                    todoList.addTask(newTask);
                    System.out.println("Görev eklendi.");
                    break;
                case 2:
                    System.out.print("Silmek istediğiniz görevin indeksini girin: ");
                    int index = scanner.nextInt();
                    todoList.removeTask(index - 1);
                    break;
                case 3:
                    todoList.printTasks();
                    break;
                case 4:
                    System.out.println("Uygulama kapatılıyor.");
                    break;
                default:
                    System.out.println("Geçersiz bir seçenek girdiniz.");
                    break;
            }
            
            System.out.println();
        }
        
        scanner.close();
    }
}
