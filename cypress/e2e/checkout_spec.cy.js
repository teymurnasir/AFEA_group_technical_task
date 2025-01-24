describe('E-commerce Checkout Automation', () => {
  
  // Define selectors to interact with elements on the page
  const selectors = {
    productGrid: 'div[class*="Products_ProductsInnerBodyGrid__"] > a', // Selector for product grid items
    addToCartButton: 'button[class*="ProductCard_ProductButtonsAddBtn__"]', // Add to cart button
    cartIcon: 'div[class*="header_CartIcon__"]', // Cart icon in the header
    cartUpdateButtons: 'button[class*="sebet_ItemAmountBtn__"]', // Buttons to update the quantity of a product
    checkoutButton: 'a[class*="sebet_BasketProductsOrderBtn__"]', // Proceed to checkout button
    firstNameInput: 'input[name="user.first_name"]', // First name input field for checkout
    lastNameInput: 'input[name="user.last_name"]', // Last name input field for checkout
    phoneInput: 'input[name="user.phone_number"]', // Phone number input field for checkout
    emailInput: 'input[name="user.email"]', // Email input field for checkout
    addressTab: '#simple-tab-2', // Tab for selecting shop address
    addressOption: 'label[class*="Checkout_MyAddress__"]', // Address selection option
    paymentOption: 'div[class*="Checkout_BasketFormPayementOption__"]', // Payment method option
    completeOrderButton: 'button[class*="Checkout_CompleteOrderBtn__"]', // Complete order button
  };

  const userData = {
    firstName: 'John', // Test user first name
    lastName: 'Doe', // Test user last name
    phone: '220000000', // Test user phone number
    email: 'johndoe@joh.com', // Test user email address
  };

  // Reusable actions
  const addFirstProductToCart = () => {
    cy.get(selectors.productGrid).first().find(selectors.addToCartButton).click(); // Click the add-to-cart button on the first product
  };

  const goToCart = () => {
    cy.get(selectors.cartIcon).click(); // Navigate to the cart
  };

  beforeEach(() => {
    // Visit the homepage and search for a product (telephone)
    cy.visit('https://new.bakuelectronics.az/');
    cy.get('#input').type('telefon{enter}');
  });
   
  // Test for adding a product to the shopping cart
  it('Adds a product to the shopping cart', () => {
    addFirstProductToCart(); // Add product to cart
    goToCart(); // Navigate to cart
    cy.get(selectors.cartUpdateButtons).should('exist'); // Verify that the cart update buttons exists, indicating the product was added
  });     
   
  // Test for removing a product from the shopping cart
  it('Removes a product from the shopping cart', () => {
    addFirstProductToCart(); // Add product to cart
    goToCart(); // Navigate to cart
    cy.get(selectors.cartUpdateButtons).first().click({ force: true }); // Click the "decrease" button to remove the product
    cy.get(selectors.cartUpdateButtons).should('not.exist'); // Verify the cart is empty (no update buttons)
  });  

  // Test for updating the quantity of a product in the shopping cart
  it('Updates the quantity of a product in the shopping cart', () => {
    addFirstProductToCart(); // Add product to cart
    goToCart(); // Navigate to cart
    cy.get(selectors.cartUpdateButtons).last().click({ force: true }); // Increasing the quantity by 1
    cy.get('span[class*="sebet_ItemAmountInput__"]').first().should('have.text', '2'); // Verify the updated quantity
  }); 
    
  // Test for proceeding to the checkout page
  it('Proceeds to checkout', () => {
    addFirstProductToCart(); // Add product to cart
    goToCart(); // Navigate to cart
    cy.get(selectors.checkoutButton).first().click({ force: true }); // Click the checkout button
    cy.url().should('include', '/checkout');  // Verify that the URL includes '/checkout', indicating the user is on the checkout page
  });  
          
  // Test for entering payment information and completing the purchase
  it('Enters payment information and completes the purchase', () => {
    addFirstProductToCart(); // Add product to cart
    goToCart(); // Navigate to cart
    cy.get(selectors.checkoutButton).first().click({ force: true }); // Click the checkout button

    // Fill in user details for checkout
    cy.get(selectors.firstNameInput).type(userData.firstName);
    cy.get(selectors.lastNameInput).type(userData.lastName);
    cy.get(selectors.phoneInput).type(userData.phone);
    cy.get(selectors.emailInput).type(userData.email);

    // Select address and payment method
    cy.get(selectors.addressTab).click(); // Navigate to the address tab
    cy.get(selectors.addressOption).first().click(); // Select the first address option
    cy.get(selectors.paymentOption).eq(1).click(); // Choose a payment option
    cy.get(selectors.completeOrderButton).click(); // Click to complete the order

    // Verify that the order is successfully completed by checking the URL
    cy.url().should('include', 'sifaris/ugurlu');  
  });
    
  // Test for entering payment information and failing the purchase
  it('Enters payment information and fails the purchase', () => {
    addFirstProductToCart(); // Add product to cart 
    goToCart(); // Navigate to cart
    cy.get(selectors.checkoutButton).first().click({ force: true }); // Click the checkout button

    // Fill in user details for checkout
    cy.get(selectors.firstNameInput).type(userData.firstName);
    cy.get(selectors.lastNameInput).type(userData.lastName);
    cy.get(selectors.phoneInput).type(userData.phone);
    cy.get(selectors.emailInput).type(userData.email);

    // Click to complete the order
    cy.get(selectors.completeOrderButton).click(); 

    // Verify that the order is successfully completed by checking the URL
    cy.url().should('not.include', 'sifaris/ugurlu');  
  });   

});
 