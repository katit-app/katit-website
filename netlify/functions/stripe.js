const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.handler = async (event, context) => {
  const session = await stripe.checkout.sessions.create({
    shipping_address_collection: {
        allowed_countries: [ "PL", "BY", "LT", "LV", "US", "UK", "FR", "NL", "ES", "IE", "PT", "IT", "EE", "DK", "NO", "SE", "FI"]
    },
    line_items: [
      {
        price_data: {
          currency: "pln",
          product_data: {
            name: "T-rusy",
          },
          unit_amount: 20000,
        },
        quantity: 1,
      },
      {
        price_data: {
          currency: "pln",
          product_data: {
            name: "shipment",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://peppy-pixie-2d0b01.netlify.app/orderConfirm",
    cancel_url: "https://peppy-pixie-2d0b01.netlify.app/pidr",
  });
  console.log(session);
  return {
    statusCode: 200,
    body: JSON.stringify({
      url: session.url,
    }),
  };
};