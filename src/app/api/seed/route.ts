import prisma from "@/lib/prisma";

import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  await prisma.products.createMany({
    data: [
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
        descripcion: "Descripcion 01",
        presentacion: "dfdf",
        name: "asdfads",
      },
      {
        descripcion: "Descripcion 01",
        presentacion: "dfdf",
        name: "asdfads",
      },
    ],
  });

  return NextResponse.json({ msg: "Seed Ejecutado" }, { status: 201 });
}
