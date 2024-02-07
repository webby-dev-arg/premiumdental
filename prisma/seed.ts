const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function main() {
  await prisma.products.deleteMany();
  await prisma.products.createMany({
    data: [
      {
        name: "asdfads",
        descripcion: "ddd",
        presentacion: "dfdf",
        imageUrls: "dfdf",
      },
      {
        name: "asdfads",
        descripcion: "OOOOOOOOOOOOOOOOO",
        presentacion: "dfdf",
        imageUrls: "dfdf",
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Ejecutado Correctamente");
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
