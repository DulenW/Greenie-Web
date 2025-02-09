import CartButton from '../components/CartButton';
import { LuArrowRight } from 'react-icons/lu';
import ShopNav from '../components/ShopNav';
import Breadcrumb from '../components/Breadcrumb';

const Checkout = () => {
  // const navigate = useNavigate();

  // Temporary cart items (replace with your cart state management)
  const cartItems = [
    {
      productID: 1,
      productName: 'Eco-Friendly Bottle',
      price: 4300,
      quantity: 2,
      imgURL: 'https://via.placeholder.com/300',
      numberOfPoints: 120,
    },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="max-w-screen-xl container mx-auto px-4 md:px-0">
      {/* Global nav */}
      <div className="bg-green-300 py-4 mx-auto my-3 md:my-5 rounded-lg">
        <p className="text-center">Global Nav</p>
      </div>

      <ShopNav />

      <div className="my-4">
        <Breadcrumb
          items={[
            { label: 'Shop', link: '/shop' },
            { label: 'Cart', link: '/shop/cart' },
            { label: 'Checkout' },
          ]}
        />
      </div>

      <div className="my-8">
        <h1 className="text-2xl md:text-3xl font-medium text-text-gray mb-6">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-8">
            {/* Shipping Information */}
            <div className="bg-bg-light p-6 rounded-3xl mb-6">
              <h2 className="text-xl font-medium text-text-gray mb-4">
                Shipping Information
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-3 rounded-xl bg-white"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-3 rounded-xl bg-white"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-xl bg-white"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full p-3 rounded-xl bg-white"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="p-3 rounded-xl bg-white"
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="p-3 rounded-xl bg-white"
                  />
                </div>
              </form>
            </div>

            {/* Payment Information */}
            <div className="bg-bg-light p-6 rounded-3xl">
              <h2 className="text-xl font-medium text-text-gray mb-4">
                Payment Method
              </h2>
              {/* Add payment form here */}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-bg-light p-6 rounded-3xl sticky top-4">
              <h2 className="text-xl font-medium text-text-gray mb-4">
                Order Summary
              </h2>

              {/* Order Items */}
              <div className="space-y-3 mb-4">
                {cartItems.map((item) => (
                  <div
                    key={item.productID}
                    className="flex justify-between text-sm"
                  >
                    <span>
                      {item.productName} x {item.quantity}
                    </span>
                    <span>Rs {item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t pt-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs {total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-medium pt-3 border-t">
                  <span>Total</span>
                  <span>Rs {total}</span>
                </div>
              </div>

              <CartButton
                icon={<LuArrowRight />}
                text="Place Order"
                className="bg-primary-green mt-6"
                textColor="text-white"
                onClick={() => console.log('Place order')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
