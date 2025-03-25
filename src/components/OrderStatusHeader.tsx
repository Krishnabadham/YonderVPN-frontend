import { Order } from "@/types";

type Props = {
  order: Order;
}

const OrderStatusHeader = ({order}: Props) => {
    return (
        <>
            <h1 className="text-4xl font-bold tracking-tighter flex flex-col gap-5 md:flex-row md:justify-between">
                <span>Order Status: {order.status}</span>
            </h1>
        </>
    )
}

export default OrderStatusHeader;