const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.handler = async (event, context) => {
  const items = JSON.parse(event.body).map(x => ({
    price_data: {
      currency: "eur",
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
      currency: "eur",
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
    phone_number_collection : {
      enabled: true,
    },
    line_items: items,
    mode: "payment",
    success_url: "https://katit.store/orderConfirm",
    cancel_url: "https://katit.store/paymentCancelled",
  });
  return {
    statusCode: 200,
    body: JSON.stringify({
      url: session.url,
    }),
  };
};