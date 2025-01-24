# Cypress E-commerce Checkout Automation

This project demonstrates automated testing of the e-commerce (https://new.bakuelectronics.az/) checkout process using Cypress. It includes tests for adding products to the cart, updating quantities, removing products, proceeding to checkout, and completes/fails purchases.

---

## Table of Contents

1. [Installation](#installation)
2. [Test Execution](#test-execution)
3. [Project Structure](#project-structure)
4. [Test Suite Details](#test-suite-details)
5. [Results and Reporting](#results-and-reporting)
6. [Future Improvements](#future-improvements)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/teymurnasir/AFEA_group_technical_task.git
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-folder>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

---

## Test Execution

To execute the tests, run the following commands:

1. Open the Cypress Test Runner:

   ```bash
   npx cypress open
   ```

   Select the `checkout_spec.cy.js` file to run the test suite interactively.

2. Run the tests in headless mode:

   ```bash
   npx cypress run
   ```

   The test results will appear in the terminal, and videos/screenshots (if enabled) will be stored in the `cypress/videos` or `cypress/screenshots` directories.

   ```bash
   CYPRESS_VIDEO=false npx cypress run
   ```

   If you don’t want to generate videos for every test run you can disable video recording locally by adding a CYPRESS_VIDEO=false environment variable.

---

## Project Structure

```
   cypress/                        # Root folder for all Cypress testing-related files
   ├── e2e/                        # Contains end-to-end test scripts
   │   └── checkout_spec.cy.js     # Main test suite for automating the checkout process
   ├── fixtures/                   # Stores mock data or fixtures for testing
   │   └── example.json            # Example fixture file (currently unused, serves as a placeholder)
   ├── support/                    # Holds custom commands and global configurations for tests
   │   ├── commands.js             # Placeholder for defining custom Cypress commands (currently unused)
   │   ├── e2e.js                  # Placeholder for test-specific setup (currently unused)
   │   └── index.js                # Manages global exception handling for preventing test failures
   ├── reports/                    # Directory for storing test execution reports
   ├── screenshots/                # Directory for saving screenshots taken during test execution
   ├── videos/                     # Directory for storing videos recorded during test execution
   node_modules/                   # Contains all installed Node.js dependencies
   .gitignore                      # Specifies files and folders to be ignored by Git
   cypress.config.js               # Cypress configuration file for defining settings and test behavior
   package.json                    # Defines project dependencies, scripts, and metadata
   package-lock.json               # Locks the dependency tree for consistent installations
   README.md                       # Project documentation and instructions
   testing_report.txt              # Stores test results or summaries in text format

```

### Notes:

1. **Fixtures (`example.json`)**: This file is included by default in Cypress projects but is unused in this case. It can be removed if not needed.
2. **Support (`commands.js` and `e2e.js`)**: These files are placeholders for adding custom commands or specific setup for e2e tests. They are unused in the current project and can also be removed if not required.
3. **Support (`index.js`)**: Contains a handler to suppress `uncaught:exception` errors that might occur during testing. Adjustments can be made here based on the application's behavior.

---

## Test Suite Details

### Features Covered

1. Adding products to the shopping cart.
2. Updating the quantity of products in the cart.
3. Removing products from the cart.
4. Proceeding to the checkout page.
5. Completing the checkout process successfully.
6. Handling invalid payment scenario.

### Example Test: Adding a Product to the Cart

```javascript
it("Adds a product to the shopping cart", () => {
  addFirstProductToCart();
  goToCart();
  cy.get(selectors.cartUpdateButtons).should("exist");
});
```

---

## Results and Reporting

### Test Results Summary

| Test Case                           | Status    |
| ----------------------------------- | --------- |
| Adds a product to the shopping cart | ✅ Passed |
| Removes a product from the cart     | ✅ Passed |
| Updates the quantity in the cart    | ✅ Passed |
| Proceeds to checkout                | ✅ Passed |
| Completes the purchase successfully | ✅ Passed |
| Fails the purchase due to errors    | ✅ Passed |

### Cypress Reporters

Cypress' default `spec` reporter was used for this project. Run tests with:

```bash
npx cypress run
```

Reports are displayed directly in the terminal and also at 'cypress/reports' folder .
Custom reporters can be configured in `cypress.config.js`.

---

## Future Improvements

1. Add more comprehensive test cases for edge scenarios.
2. Integrate with a CI/CD pipeline for automated test execution.
3. Enhance reporting using third-party tools like Mochawesome.
4. Utilize the `fixtures` folder to manage test data dynamically.

---

## License

This project is open-source and available under the [MIT License](LICENSE).
