const { nanoid } = require("nanoid");

exports.handler = async (event) => {
  const shortId = nanoid(6);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "Cloud URL Shortener is running",
      shortId: shortId
    })
  };
};