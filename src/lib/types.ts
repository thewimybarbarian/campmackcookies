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

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "baking"
  | "ready"
  | "completed"
  | "cancelled";

export interface Order {
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  receiving_method: "pickup" | "delivery";
  requested_date: string;
  items: Record<string, number>;
  total_items: number;
  total_price: number;
  special_instructions: string;
  status: OrderStatus;
}
