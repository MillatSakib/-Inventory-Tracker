class InventoryItem {
  constructor(id, name, quantity, category) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.category = category;
  }

  updateQuantity(newQuantity) {
    this.quantity = newQuantity;
  }

  displayItem() {
    console.log(`ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Category: ${this.category}`);
  }
}

module.exports = InventoryItem;
