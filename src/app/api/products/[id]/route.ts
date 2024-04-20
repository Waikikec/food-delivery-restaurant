import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// FETCH SINGLE PRODUCT
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {

  const { id } = params;

  try {

    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });

    return new NextResponse(JSON.stringify(product), { status: 200 });

  } catch (err) {

    console.log(err);

    return new NextResponse(
      JSON.stringify({ message: "Failed to fetch product!" }),
      { status: 500 }
    );
  }
}