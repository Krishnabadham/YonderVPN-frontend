import { useCreateMyVpn, useGetMyVpn, useUpdateMyVpn } from "@/api/MyVpnApi";
import ManageVpnForm from "@/forms/manage-vpn-form/ManageVpnForm";

const ManageVpnPage = () => {
    const { createVpn, isLoading: isCreateLoading } = useCreateMyVpn();
    const { vpn } = useGetMyVpn();
    const { updateVpn, isLoading: isUpdateLoading } = useUpdateMyVpn();

    const isEditing = !!vpn;

    return(
        <ManageVpnForm 
            vpn={vpn} 
            onSave={isEditing ? updateVpn : createVpn} 
            isLoading={isCreateLoading || isUpdateLoading} 
        />
    );
};

export default ManageVpnPage;