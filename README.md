# Project Description: Terminal-Based Inventory Tracker

## Overview

The Terminal-Based Inventory Tracker is a command-line application designed to manage and track inventory items efficiently using Object-Oriented Programming (OOP) principles in JavaScript. This lightweight application allows users to add, remove, update, and display inventory items through a terminal interface, making it an ideal tool for small-scale inventory management needs.

## Features

1. **Add Item**: Users can add new inventory items by specifying the item ID, name, quantity, and category.
2. **Remove Item**: Users can remove existing inventory items by providing the item ID.
3. **Update Item Quantity**: Users can update the quantity of an existing inventory item by specifying the item ID and the new quantity.
4. **Display Inventory**: Users can display the entire inventory, showing details such as item ID, name, quantity, and category.

## Classes and Structure

The project is structured around two main classes: `InventoryItem` and `InventoryManager`.

1. **InventoryItem Class**:

   - **Properties**: `id`, `name`, `quantity`, `category`
   - **Methods**:
     - `updateQuantity(newQuantity)`: Updates the quantity of the item.
     - `displayItem()`: Displays the item's details in the terminal.

2. **InventoryManager Class**:
   - **Properties**: `items` (an array to store inventory items)
   - **Methods**:
     - `addItem(id, name, quantity, category)`: Adds a new item to the inventory.
     - `removeItem(id)`: Removes an item from the inventory based on the item ID.
     - `updateItemQuantity(id, newQuantity)`: Updates the quantity of an item based on the item ID.
     - `displayInventory()`: Displays all items in the inventory.

## How It Works

1. **User Input**: The application uses the `readline` module to interact with the user through the terminal. It provides a menu with options to add, remove, update, and display inventory items.
2. **Menu Navigation**: Users can select an option from the menu by entering the corresponding number. The application then guides the user through the necessary steps to complete the chosen action.
3. **Inventory Management**: The `InventoryManager` class handles the core inventory management operations, while the `InventoryItem` class represents individual inventory items.
4. **Displaying Information**: Inventory details are displayed in a readable format, allowing users to easily view and manage their inventory.

## Usage

To run the application, navigate to the directory containing the project files and execute the following command in the terminal:

```bash
node main.js
```

Follow the prompts in the terminal to interact with the inventory tracker.

## Benefits

- Simplicity: Easy to use with a straightforward terminal interface.
- Efficiency: Streamlines basic inventory management tasks.
- Portability: Can be run on any machine with Node.js installed.
- Scalability: Code can be extended with additional features as needed.

This project serves as an excellent introduction to OOP concepts in JavaScript and provides a practical tool for basic inventory management.
