const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.handler = async (event, context) => {
  console.log(event);
  const items = JSON.parse(event.body).map(x => ({
    price_data: {
      currency: "pln",
      product_data: {
        name: x.name,
        description: `size: ${x.size}, color: ${x.color.title}`,
      },
      unit_amount: x.price*100,
    },
    quantity: x.amount,
  }));
  items.push({
    price_data: {
      currency: "pln",
      product_data: {
        name: "shipment",
      },
      unit_amount: 2000,
    },
    quantity: 1,
  });
  const session = await stripe.checkout.sessions.create({
    shipping_address_collection: {
        allowed_countries: [ "PL", "BY", "LT", "LV", "US", "FR", "NL", "ES", "IE", "PT", "IT", "EE", "DK", "NO", "SE", "FI"]
    },
    line_items: items,
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