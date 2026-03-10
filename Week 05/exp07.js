function greet(name = "Guest", time = "Day") {
  console.log("Good " + time + ", " + name + "!");
}

greet();
greet("Alice", "Morning");