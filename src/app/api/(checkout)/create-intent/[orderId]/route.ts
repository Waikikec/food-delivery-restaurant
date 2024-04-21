import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const POST = async (
  request: NextResponse,
  { params }: { params: { orderId: string } }
) => {
  const { orderId } = params;

  try {
    const order = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
    });

    if (order) {
      // Create a PaymentIntent with the order amount and currency
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 100 * 100,
        currency: "eur",
        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        automatic_payment_methods: {
          enabled: true,
        },
      });

      await prisma.order.update({
        where: {
          id: orderId
        },
        data: {
          intent_id: paymentIntent.client_secret
        }
      })

      return new NextResponse(JSON.stringify({ clientSecret: paymentIntent.client_secret, }), {
        status: 200
      });
    }

  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "Order not found!" }), {
      status: 404
    });
  }
}