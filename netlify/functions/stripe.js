const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.handler = async (event, context) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "pln",
          product_data: {
            name: "T-rusy",
          },
          unit_amount: 200,
        },
        quantity: 1,
      },
      {
        price_data: {
          currency: "pln",
          product_data: {
            name: "shipment",
          },
          unit_amount: 20,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://peppy-pixie-2d0b01.netlify.app//orderConfirm",
    cancel_url: "https://peppy-pixie-2d0b01.netlify.app/pidr",
  });
  return {
    statusCode: 200,
    body: JSON.stringify({
      url: session.url,
    }),
  };
};