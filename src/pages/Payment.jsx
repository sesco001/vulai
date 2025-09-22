import { useState } from "react";
import { api } from "../api";

export default function Payment() {
  const [status, setStatus] = useState("");

  const handlePayment = async () => {
    try {
      const res = await api.post("/payment/create-checkout-session");
      window.location.href = res.data.url; // Redirect to Stripe checkout
    } catch (err) {
      setStatus("⚠️ Payment failed.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">💳 Payment</h2>
      <p className="mt-2">Pay to access Humaniser & Assignment tools.</p>
      <button
        onClick={handlePayment}
        className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
      >
        Proceed to Payment
      </button>
      {status && <p className="mt-3">{status}</p>}
    </div>
  );
}
