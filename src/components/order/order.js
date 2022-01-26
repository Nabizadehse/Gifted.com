import useFatch from "../../useFatch";
import OrderList from "./OrderList";
const Order = () => {
  const {
    data: order,
    isLoading,
    error,
  } = useFatch("http://localhost:8000/order");

  return (
    <div className="order-body">
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading...</h2>}
      {order && <OrderList order={order} />}
    </div>
  );
};

export default Order;
