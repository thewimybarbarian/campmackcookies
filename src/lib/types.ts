export interface OrderPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  receivingMethod: "pickup" | "delivery";
  requestedDate: string;
  items: Record<string, number>;
  specialInstructions: string;
}
