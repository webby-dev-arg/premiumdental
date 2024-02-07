import prisma from "@/lib/prisma";

import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  const a = await prisma.products.createMany({
    data: [
      {
        descripcion: "xxxxxxxxxxxxxxxxx",
        presentacion: "dfdf",
        name: "asdfads",
      },
      {
        descripcion: "Descripcion 01",
        presentacion: "dfdf",
        name: "asdfads",
      },
      {
        descripcion: "Descripcion 01",
        presentacion: "dfdf",
        name: "asdfads",
      },
      {
        descripcion: "Descripcion 01",
        presentacion: "dfdf",
        name: "asdfads",
      },
      {
        descripcion: "xxxxxxxxxxxxxxxx",
        presentacion: "dfdf",
        name: "asdfads",
      },
    ],
  });
  console.log(a);

  return NextResponse.json({ msg: "Seed Ejecutado" }, { status: 201 });
}
