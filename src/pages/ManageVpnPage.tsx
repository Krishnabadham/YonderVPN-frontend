import { useCreateMyVpn, useGetMyVpn, useGetMyVpnOrders, useUpdateMyVpn } from "@/api/MyVpnApi";
import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageVpnForm from "@/forms/manage-vpn-form/ManageVpnForm";

const ManageVpnPage = () => {
    const { createVpn, isLoading: isCreateLoading } = useCreateMyVpn();
    const { vpn } = useGetMyVpn();
    const { updateVpn, isLoading: isUpdateLoading } = useUpdateMyVpn();

    const {orders} = useGetMyVpnOrders();

    const isEditing = !!vpn;

    return(
        <Tabs>
            <TabsList defaultValue="orders">
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="manage-vpn">Manage Vpn</TabsTrigger>
            </TabsList>
            <TabsContent value="orders" className="space-y-5 bg-gray-50 pg-10 rounded-lg">
                <h2 className="text-2xl font-bold">{orders?.length} active orders</h2>
                {orders?.map((order)=><OrderItemCard order={order} />)}
            </TabsContent>
            <TabsContent value="manage-vpn">
                <ManageVpnForm 
                    vpn={vpn} 
                    onSave={isEditing ? updateVpn : createVpn} 
                    isLoading={isCreateLoading || isUpdateLoading} 
                />
            </TabsContent>
        </Tabs>
        
    );
};

export default ManageVpnPage;