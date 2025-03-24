import { useCreateCheckoutSession } from "@/api/OrderApi";
import { useGetVpn } from "@/api/VpnApi";
import CheckoutButton from "@/components/CheckoutButton";
import MenuItems from "@/components/MenuItems";
import OrderSummary from "@/components/OrderSummary";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardFooter } from "@/components/ui/card";
import VpnInfo from "@/components/VpnInfo";
import { UserFormData } from "@/forms/user-profile-form/UserProfileForm";
import { MenuItem } from "@/types";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type CartItem = {
    _id: string;
    name: string;
    price: number;
    quantity: number;
};

const DetailPage = () => {
    const {vpnId} = useParams();
    const { vpn, isLoading} = useGetVpn(vpnId);
    const {createCheckoutSession, isLoading: isCheckoutLoading} = useCreateCheckoutSession();

    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storedCartItems = sessionStorage.getItem(`cartItems-${vpnId}`);
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    });
    
    const addToCart = (menuItem: MenuItem) => {
        setCartItems((prevCartItems) => {
            const existigCartItem = prevCartItems.find(
                (cartItem) => cartItem._id === menuItem._id
            );

            let updatedCartItems;

            if (existigCartItem) {
                updatedCartItems = prevCartItems.map((cartItem) => 
                    cartItem._id === menuItem._id
                     ? { ...cartItem, quantity: cartItem.quantity + 1}
                    : cartItem
                );
            } else {
                updatedCartItems = [
                    ...prevCartItems, {
                        _id: menuItem._id,
                        name: menuItem.name,
                        price: menuItem.price,
                        quantity: 1
                    },
                ];
            }

            sessionStorage.setItem(`cartItems-${vpnId}`, JSON.stringify(updatedCartItems));

            return updatedCartItems

        })
    };

    const removeFromCart = (cartItem: CartItem) => {
        setCartItems ((prevCartItems) => {
            const updatedCartItems = prevCartItems.filter(
                (item) => cartItem._id !== item._id
            );

            sessionStorage.setItem(`cartItems-${vpnId}`, JSON.stringify(updatedCartItems));

            return updatedCartItems;
        });
    };

    const onCheckout = async (userFormData: UserFormData) => {
        if(!vpn){
            return;
        }

        const checkoutData = {
            cartItems: cartItems.map((cartItem) => ({
                menuItemId: cartItem._id,
                name: cartItem.name,
                quantity: cartItem.quantity.toString(),
            })),
            vpnId: vpn._id,
            deliveryDetails: {
                name: userFormData.name,
                addressLine1: userFormData.addressLine1,
                city: userFormData.city,
                country: userFormData.country,
                email: userFormData.email as string
            },
        };
        const data = await createCheckoutSession(checkoutData);
        window.location.href = data.url;
    };

    if(isLoading || !vpn){
        return "Loading...";
    }

    return(
        <div className="flex flex-col gap-10">
            <AspectRatio ratio={16 / 5}>
                <img 
                    src={vpn.imageUrl} 
                    className="rounded-md object-cover h-full w-full" 
                    alt={vpn.vpnName} 
                />
            </AspectRatio>
            <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
                <div className="flex flex-col gap-4">
                    <VpnInfo vpn={vpn} />
                    <span className="text-2xl font-bold tracking-tight">Plans</span>
                    {vpn.menuItems.map((menuItem) => (
                        <MenuItems menuItem={menuItem} addToCart={()=> addToCart(menuItem)} />
                    ))}
                </div>

                <div>
                    <Card>
                        <OrderSummary 
                            // vpn={vpn} 
                            cartItems={cartItems}
                            removeFromCart={removeFromCart}
                        />
                        <CardFooter>
                            <CheckoutButton 
                                disabled={cartItems.length === 0} 
                                onCheckout={onCheckout} 
                                isLoading={isCheckoutLoading}
                            />
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;