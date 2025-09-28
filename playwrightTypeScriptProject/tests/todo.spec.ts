
import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';
import fs from 'fs';
import path from 'path';
import config from '../config.json';

const csvFolder = path.resolve(__dirname, '..', config.csvDataFolder);
const baseUrl: string = config.baseUrl;

function readCsv(filePath: string): string[][] {
  const data = fs.readFileSync(filePath, 'utf8');
  return data.split('\n').map((row: string) => row.split(','));
}

test.describe.parallel('Todo App Data Driven', () => {
  const csvFile = path.join(csvFolder, 'todos.csv');
  const todos = readCsv(csvFile);

  for (const [todoText] of todos) {
    test(`Add todo: ${todoText}`, async ({ page }: { page: any }) => {
      const todoPage = new TodoPage(page);
      await page.goto(baseUrl);
      await test.step('Add new todo', async () => {
        await todoPage.addTodo(todoText);
      });
      await test.step('Verify todo added', async () => {
        const items = await todoPage.getTodos();
        expect(items).toContain(todoText);
      });
    });
  }
});
