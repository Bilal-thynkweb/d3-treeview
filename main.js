function generateRandomId(length = 6) {
  // Generate a random number and convert it to a hexadecimal string.
  const randomBits = Math.random().toString(16).substring(2);

  // Add enough padding to ensure the ID is the desired length.
  const padding = "0".repeat(length - randomBits.length);

  // Return the complete ID.
  return `${padding}${randomBits}`;
}

// update tree size
// Assuming nodes is an array of your nodes
let nodes = root.descendants();

// Set a base height and an increment for each additional node
let baseHeight = 500;
let increment = 20;

// Calculate the new height
let newHeight = baseHeight + nodes.length * increment;

// Update the tree size
tree.size([newHeight, width]);

// For drag and zoom
// Create a zoom behavior
let zoom = d3
  .zoom()
  .scaleExtent([0.1, 10]) // This controls the zoom range
  .on("zoom", function (event) {
    svg.attr("transform", event.transform);
  });

// Create an SVG container
let svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .call(zoom)
  .append("g");

// Create a drag behavior
let drag = d3
  .drag()
  .on("start", function (event, d) {
    event.sourceEvent.stopPropagation();
    d3.select(this).classed("dragging", true);
  })
  .on("drag", function (event, d) {
    d.x += event.dx;
    d.y += event.dy;
    d3.select(this).attr("transform", "translate(" + d.x + "," + d.y + ")");
  })
  .on("end", function (event, d) {
    d3.select(this).classed("dragging", false);
  });

// Apply the drag behavior to your nodes
d3.selectAll(".node").call(drag);
