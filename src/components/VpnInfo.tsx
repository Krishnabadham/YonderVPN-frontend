import { Vpn } from "@/types";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

type Props = {
  vpn: Vpn
}

const VpnInfo = ({vpn}: Props) => {
  return (
    <Card className="border-sla">
        <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tight">
                {vpn.vpnName}
            </CardTitle>
            <CardDescription>
                {vpn.city}, {vpn.country}
            </CardDescription>
        </CardHeader>
        {/* <CardContent className="flex">

        </CardContent> */}
    </Card>
  )
}

export default VpnInfo;