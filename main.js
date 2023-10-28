function generateRandomId(length = 6) {
  // Generate a random number and convert it to a hexadecimal string.
  const randomBits = Math.random().toString(16).substring(2);

  // Add enough padding to ensure the ID is the desired length.
  const padding = "0".repeat(length - randomBits.length);

  // Return the complete ID.
  return `${padding}${randomBits}`;
}
