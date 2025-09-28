import { Page, Locator } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly newTodoInput: Locator;
  readonly todoList: Locator;
  readonly addButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTodoInput = page.locator('#new-todo');
    this.todoList = page.locator('#todo-list');
    this.addButton = page.locator('#add-btn');
  }

  async addTodo(todo: string) {
    await this.newTodoInput.fill(todo);
    await this.addButton.click();
  }

  async getTodos() {
    return await this.todoList.allTextContents();
  }
}
