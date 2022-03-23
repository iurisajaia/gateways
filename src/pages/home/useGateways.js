// import { useState } from "react";
// import { useQuery } from "react-query";
//
// import API from "../../configs/API";
//
// const useGateways = () => {
//     const [activeGatewayId, setActiveGatewayId] = useState(false);
//
//
//     const handleChangeActiveGateway = (gatewayId) => {
//         if (gatewayId === activeGatewayId) {
//             setActiveGatewayId(false);
//         } else {
//             setActiveGatewayId(gatewayId);
//         }
//     };
//
//     const { isLoading, data } = useQuery("gateways", () =>
//         API("/gateways").then((res) => res.data)
//     );
//
//     return {
//         loadingGateway : isLoading,
//         gateways: data?.data,
//         handleChangeActiveGateway,
//         activeGatewayId,
//     };
// };
//
// export default useGateways;
