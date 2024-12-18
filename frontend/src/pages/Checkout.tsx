import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  streetAddress: string;
  state: string;
  city:string;
  pincode: string;
}

const products = [
    {
      id: 1,
      name: "Throwback Hip Bag",
      href: "#",
      color: "Salmon",
      price: "$90.00",
      quantity: 1,
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
      imageAlt:
        "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
    },
    {
      id: 2,
      name: "Medium Stuff Satchel",
      href: "#",
      color: "Blue",
      price: "$32.00",
      quantity: 1,
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
      imageAlt:
        "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
    },
    // More products...
  ];

export default function Checkout() {
  const form = useForm<IFormInputs>();
  const { handleSubmit, register, formState } = form;
  const { isValid, errors } = formState;

  const onSubmit = (data: IFormInputs)=>{
    console.log(data)
  }

  return (
    <section className="bg-gray-200 w-full relative min-h-screen md:flex md:items-center md:justify-around p-5">
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div>
          <h1 className="text-3xl font-semibold">Personal Information</h1>
          <p className="text-gray-400">
            Use Permanent address where you can recive a delivary.
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  {...register("firstName", { required: true })}
                  id="firstName"
                  className="border-2 border-gray-400 outline-none rounded-md block"
                />
                <p className="text-red-500 text-xs">
                  {errors.firstName && "First Name is required."}
                </p>
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  {...register("lastName", { required: true })}
                  id="lastName"
                  className="border-2 border-gray-400 outline-none rounded-md block"
                />
                <p className="text-red-500 text-xs">
                  {errors.lastName && "Last Name is required."}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                {...register("email", { required: true })}
                id="email"
                className="border-2 border-gray-400 outline-none rounded-md block"
              />
              <p className="text-red-500 text-xs">
                {errors.email && "Email is required."}
              </p>
            </div>
            <div className="mt-4">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                {...register("country", { required: true })}
                id="country"
                className="border-2 border-gray-400 outline-none rounded-md block"
              />
              <p className="text-red-500 text-xs">
                {errors.country && "Country is required."}
              </p>
            </div>
            <div className="mt-4">
              <label htmlFor="streetAddress">Street Address</label>
              <textarea
                {...register("streetAddress", { required: true })}
                id="streetAddress"
                className="border-2 border-gray-400 outline-none rounded-md block"
                cols={40}
                rows={5}
              />
              <p className="text-red-500 text-xs">
                {errors.streetAddress && "Street Address is required."}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="mt-4">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  {...register("state", { required: true })}
                  id="state"
                  className="border-2 border-gray-400 outline-none rounded-md block"
                />
                <p className="text-red-500 text-xs">
                  {errors.state && "state is required."}
                </p>
              </div>
              <div className="mt-4">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  {...register("city", { required: true })}
                  id="city"
                  className="border-2 border-gray-400 outline-none rounded-md block"
                />
                <p className="text-red-500 text-xs">
                  {errors.city && "city is required."}
                </p>
              </div>
              <div className="mt-4">
                <label htmlFor="pincode">Pincode</label>
                <input
                  type="text"
                  id="pincode"
                  {...register("pincode", { required: true })}
                  className="border-2 border-gray-400 outline-none rounded-md block"
                />
                <p className="text-red-500 text-xs">
                  {errors.pincode && "pincode is required."}
                </p>
              </div>
            </div>
            <div>
            </div>
            <div className="mt-3">
                <button type="submit" className="p-2 bg-green-400 rounded-md text-sm font-semibold">Submit</button>
            </div>
          </form>
        </div>
        <div className="mt-5">
            <h1 className="text-2xl font-semibold">Addresses</h1>
            <p className="text-gray-400">
            Choose form existing addresses.
          </p>
          <div>
            <div>
             <input type="radio" name="addresses" id="address1" />
            <label htmlFor="address1">
                <span>Anurag Samarth</span>
                <span className="ml-2">Maharashtra</span>
                <span className="ml-2">Nagpur</span>
                <span className="ml-2">440016</span>
                <span className="ml-2">9856324785</span>
            </label>
            </div>
            <div>
            <input type="radio" name="addresses" id="address1" />
            <label htmlFor="address1">
                <span>Jayant Samarth</span>
                <span className="ml-2">Maharashtra</span>
                <span className="ml-2">Nagpur</span>
                <span className="ml-2">440016</span>
                <span className="ml-2">9856324785</span>
            </label>
            </div>
          </div>
        </div>

        <div className="mt-5">
        <h1 className="text-2xl font-semibold">Payment Method</h1>
            <p className="text-gray-400">
            Choose Payment Metthod 
          </p>
          <div className="grid grid-cols-2">
             <div>
                <input type="radio" name="paymentMethod" id="paymentMethod" />
                <label htmlFor="paymentMethod">Online</label>
             </div>
             <div>
             <input type="radio" name="paymentMethod" id="paymentMethod" />
             <label htmlFor="paymentMethod">Cash</label>
             </div>
          </div>
        </div>
      </div>

      {/* show product which user want to buy  */}
      <div className="bg-white p-4 rounded-lg">
      <div className="mt-8">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {products.map((product) => (
              <li key={product.id} className="flex py-6">
                <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="size-full object-cover"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href={product.href}>{product.name}</a>
                      </h3>
                      <p className="ml-4">{product.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty {product.quantity}</p>

                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>$262.00</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Continue Payment
          </a>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or{" "}
            <Link
               to="/"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
