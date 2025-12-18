import { useSearchParams, Link } from "react-router-dom";
import { XCircle } from "lucide-react"; // Import the error icon

export default function PaymentFailure() {
  const [searchParams] = useSearchParams();
  const txnid = searchParams.get("txnid");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Failed!</h1>
        <p className="text-gray-600 mb-6">
          Something went wrong with your transaction. 
          {txnid && <span><br/>Transaction ID: <strong>{txnid}</strong></span>}
        </p>
        
        <div className="flex flex-col gap-3">
          <Link to="/payment" className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
            Try Again
          </Link>
          <Link to="/" className="text-gray-600 hover:underline transition">
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}