const Stripe = require("stripe");

const stripe = new Stripe("sk_test_51Q4mWnCVVBUQVL8fEc3N4jjUj0zBm7ItXtN3wHtnj5gQRb82zonqn5yp7b33j2WkBWp2bcn6NZosjgjRmNPSpFh900dTINIQMI");

module.exports = stripe;
