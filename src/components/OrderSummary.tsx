import { CartItem } from "@/pages/DetailPage";
// import { Vpn } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Trash } from "lucide-react";


type Props = {
    // vpn={vpn}
    cartItems: CartItem[];
    removeFromCart: (cartItem: CartItem)=> void;
};

const OrderSummary = ({cartItems, removeFromCart}: Props) => {
    const getTotalCost = () => {
        const totalInDollars = cartItems.reduce(
            (total, cartItem)=> total + cartItem.price * cartItem.quantity,
            0
        );

        return (totalInDollars / 100).toFixed(2);
    };

    return (
    <>
        <CardHeader>
            <CardTitle className="text-2xl font-bold tracking-tight flex justify-between gap-2">
                <span>Your Order</span>
                <span>${getTotalCost()}</span>
            </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
            {cartItems.map((item) => (
                <div className="flex justify-between gap-10">
                    <span className="flex items-center gap-2">
                        {item.name}
                        <Badge variant="outline" className="mr-2">
                            {item.quantity}
                        </Badge>
                    </span>

                    <span className="flex items-center gap-1">
                        <Trash className="curser-pointer" color="red" size={20} onClick={() => removeFromCart(item)} />
                        ${((item.price * item.quantity) / 100).toFixed(2)}
                    </span>
                </div>
            ))}

            {/* {cartItems.map((item) => (
                <div className="flex justify-between items-center">
                    
                    <div className="flex items-center gap-4">
                        <span>{item.name}</span>
                        <Badge variant="outline" className="w-8 text-center">
                            {item.quantity}
                        </Badge>
                    </div>

                    <div className="flex items-center gap-2">
                        <Trash className="cursor-pointer" color="red" size={20} onClick={() => removeFromCart(item)} />
                        <span>${((item.price * item.quantity) / 100).toFixed(2)}</span>
                    </div>
                </div>
            ))} */}

            <Separator />
            
        </CardContent>
    </>
  )
}

export default OrderSummary;