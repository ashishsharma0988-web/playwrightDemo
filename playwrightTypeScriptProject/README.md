# Playwright TypeScript Project

This project demonstrates Playwright Test framework with TypeScript, using the Page Object Model, data-driven testing with CSV, and configuration via `config.json`.

## Features
- Page Object Model (POM) design pattern
- Data-driven tests using CSV file
- Configurable browser, headless mode, slowMo, and baseUrl via `config.json`
- HTML report generation with test steps
- Parallel test execution

## How to Run
1. Install dependencies:
   ```powershell
   npm install
   ```
2. Run tests:
   ```powershell
   npx playwright test
   ```
3. View HTML report:
   ```powershell
   npx playwright show-report
   ```

## Configuration
Edit `config.json` to set browser, headless mode, slowMo, CSV data folder, and baseUrl.

## Folder Structure
- `pages/` - Page Object Model files
- `tests/` - Test files
- `data/` - CSV data files
- `config.json` - Project configuration
