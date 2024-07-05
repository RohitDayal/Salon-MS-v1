// Example email address
const email = "rdxdayal35@gmail.com";

// Regular expression to extract the username part
const username = email.match(/^([^@]+)/)[1];

console.log(username); // Output: rdxdayal35
