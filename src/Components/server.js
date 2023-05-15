// This is your test secret API key.
const stripe = require("stripe")(process.env.SECRET_KEY);
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const YOUR_DOMAIN = "https://localhost:3000";

app.post("/checkout", async (req, res) => {
  const products = req.body.products; 
  const line_items = products.map((product) => {
    return {
      price_data: {
        currency: "AED",
        unit_amount: product.price * 100, 
        product_data: {
          name: product.title,
          description: product.subTitle,
        },
      },
      quantity: product.quantity, 
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: line_items,
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.json({ id: session.id });
});

app.listen(3000, () => console.log("Running on port 3000"));
