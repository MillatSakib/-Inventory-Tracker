const InventoryItem = require('./InventoryItem');

class InventoryManager {
  constructor() {
    this.items = [];
  }

  addItem(id, name, quantity, category) {
    const item = new InventoryItem(id, name, quantity, category);
    this.items.push(item);
    console.log('Item added successfully.');
  }

  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
    console.log('Item removed successfully.');
  }

  updateItemQuantity(id, newQuantity) {
    const item = this.items.find(item => item.id === id);
    if (item) {
      item.updateQuantity(newQuantity);
      console.log('Item quantity updated successfully.');
    } else {
      console.log('Item not found.');
    }
  }

  displayInventory() {
    if (this.items.length === 0) {
      console.log('Inventory is empty.');
    } else {
      this.items.forEach(item => item.displayItem());
    }
  }
}

module.exports = InventoryManager;
