class TaskManager {
  private tasks: { id: number; name: string; status: string }[] = [];
  private currentId: number = 1;

  addTask(name: string): void {
    this.tasks.push({ id: this.currentId, name, status: "Pending" });
    console.log(`Task added: ID ${this.currentId}, Name: "${name}"`);
    this.currentId++;
  }

  completeTask(id: number): void {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.status = "Completed";
      console.log(`Task ID ${id} marked as completed.`);
    } else {
      console.log(`Task ID ${id} not found.`);
    }
  }

  displayTasks(): void {
    console.log("\nTask List:");
    this.tasks.forEach((task) => {
      console.log(
        `ID: ${task.id}, Name: "${task.name}", Status: ${task.status}`
      );
    });
  }
}

const taskManager = new TaskManager();
taskManager.addTask("Learn TypeScript");
taskManager.addTask("Build a project");
taskManager.completeTask(1);
taskManager.displayTasks();
