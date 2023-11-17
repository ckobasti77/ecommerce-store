import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";

const CartPage = () => {
  const cart = useCart();

  return (
    <div className="bg-white">
      Cart
    </div>
  );
};

export default CartPage;
