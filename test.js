const { handler } = require("./src/index");

const event = {
  body: JSON.stringify({
    url: "https://www.google.com"
  })
};

handler(event)
  .then(response => {
    console.log("Lambda response:", response);
  })
  .catch(error => {
    console.error("Error:", error);
  });