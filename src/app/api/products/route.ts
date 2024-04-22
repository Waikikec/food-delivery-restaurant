import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// FETCH ALL PRODUCTS
export const GET = async (req: NextRequest) => {

  const { searchParams } = new URL(req.url);

  const category = searchParams.get("cat");

  try {
    const products = await prisma.product.findMany({
      where: {
        ...(category ? { categorySlug: category } : { isFeatured: true })
      },
    });

    return new NextResponse(JSON.stringify(products), { status: 200 });

  } catch (err) {

    console.log(err);

    return new NextResponse(
      JSON.stringify({ message: 'Fetching products failed!' }),
      { status: 500 }
    )

  }
};

// CREATE PRODUCT
export const POST = async (req: NextRequest) => {

  try {
    const body = await req.json();

    const product = await prisma.product.create({
      data: body,
    });

    return new NextResponse(JSON.stringify(product), { status: 201 });

  } catch (err) {

    console.log(err);

    return new NextResponse(
      JSON.stringify({ message: 'Failed to create a product!' }),
      { status: 500 }
    )
  }
};