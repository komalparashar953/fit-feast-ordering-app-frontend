import { OrderStatus } from "@/types";

type OrderStatusInfo = {
    label: string;
    value: OrderStatus;
    progressValue: number;
};

export const ORDER_STATUS: OrderStatusInfo[] = [
    { label: "Order Placed", value: "Order Placed", progressValue:0},
    { label: "Awaiting Order Confirmation", value: "Paid", progressValue:25},
    { label: "In Progress", value: "inProgress", progressValue:50},
    { label: "Out for Delivery", value: "Out For Delivery", progressValue:75},
    { label: "Delivered", value: "Delivered", progressValue:100},
];