const readline = require('readline');
const InventoryManager = require('./InventoryManager');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inventoryManager = new InventoryManager();

const mainMenu = () => {
  console.log('\nInventory Tracker');
  console.log('1. Add Item');
  console.log('2. Remove Item');
  console.log('3. Update Item Quantity');
  console.log('4. Display Inventory');
  console.log('5. Exit');
  rl.question('Choose an option: ', (option) => {
    switch (option) {
      case '1':
        addItem();
        break;
      case '2':
        removeItem();
        break;
      case '3':
        updateItemQuantity();
        break;
      case '4':
        displayInventory();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Invalid option.');
        mainMenu();
        break;
    }
  });
};

const addItem = () => {
  rl.question('Enter item ID: ', (id) => {
    rl.question('Enter item name: ', (name) => {
      rl.question('Enter item quantity: ', (quantity) => {
        rl.question('Enter item category: ', (category) => {
          inventoryManager.addItem(id, name, parseInt(quantity), category);
          mainMenu();
        });
      });
    });
  });
};

const removeItem = () => {
  rl.question('Enter item ID to remove: ', (id) => {
    inventoryManager.removeItem(id);
    mainMenu();
  });
};

const updateItemQuantity = () => {
  rl.question('Enter item ID to update: ', (id) => {
    rl.question('Enter new item quantity: ', (quantity) => {
      inventoryManager.updateItemQuantity(id, parseInt(quantity));
      mainMenu();
    });
  });
};

const displayInventory = () => {
  inventoryManager.displayInventory();
  mainMenu();
};

mainMenu();
