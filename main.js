function generateRandomId(length = 6) {
  // Generate a random number and convert it to a hexadecimal string.
  const randomBits = Math.random().toString(16).substring(2);

  // Add enough padding to ensure the ID is the desired length.
  const padding = "0".repeat(length - randomBits.length);

  // Return the complete ID.
  return `${padding}${randomBits}`;
}

// Assuming nodes is an array of your nodes
let nodes = root.descendants();

// Set a base height and an increment for each additional node
let baseHeight = 500;
let increment = 20;

// Calculate the new height
let newHeight = baseHeight + nodes.length * increment;

// Update the tree size
tree.size([newHeight, width]);
