
const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-9rem)] md:h-[calc(100vh-12rem)]">

      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">1234567789</td>
            <td className="py-6 px-1">19.08.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block">Stara Zagora, Parchevic 44</td>
            <td className="py-6 px-1">approximately 10 mins</td>
          </tr>

          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1234567789</td>
            <td className="py-6 px-1">19.08.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block">Stara Zagora, Parchevic 44</td>
            <td className="py-6 px-1">approximately 10 mins</td>
          </tr>

          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1234567789</td>
            <td className="py-6 px-1">19.08.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block">Stara Zagora, Parchevic 44</td>
            <td className="py-6 px-1">approximately 10 mins</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OrdersPage