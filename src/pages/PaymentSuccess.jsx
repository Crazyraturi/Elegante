import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const txnid = searchParams.get("txnid");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your order. Your transaction ID is: <br />
          <strong>{txnid}</strong>
        </p>
        <Link
          to="/orders"
          className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          View My Orders
        </Link>
      </div>
    </div>
  );
}
