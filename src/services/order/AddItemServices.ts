import prismaClient from "../../prisma";

interface ItemResquest {
  order_id: string;
  product_id: string;
  amount: number;
}

class AddItemServices {
  async execute({ order_id, product_id, amount }: ItemResquest) {
    const order = await prismaClient.item.create({
      data: {
        order_id: order_id,
        product_id: product_id,
        amount: amount,
      },
    });

    return order;
  }
}

export { AddItemServices };
