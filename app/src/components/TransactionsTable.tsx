import { useEffect, useState } from "react";
import fetch from "cross-fetch";
import { useAppContext } from "../hooks/useAppContext";
import { Transaction } from "../interfaces/Transaction";

const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { isLoading } = useAppContext();

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetch("http://localhost:3000/");
      const data = await response.json();

      const transactions = data.message ? data.message : [];

      setTransactions(transactions);

      const totalPrice = transactions.reduce((acc: number, t: Transaction) => {
        return t.type.nature === "INPUT"
          ? acc + Number(t.value)
          : acc - Number(t.value);
      }, 0);

      const formattedTotalPrice = parseFloat(totalPrice.toFixed(2));
      setTotalPrice(formattedTotalPrice);
    };
    fetchTransactions();
  }, [isLoading]);

  return (
    <div className="shadow-md pb-12 overflow-y-auto text-center">
      {transactions.length ? (
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-start bg-gray-300 p-2">#</th>
              <th className="text-start bg-gray-300 p-2">Date</th>
              <th className="text-start bg-gray-300 p-2">Product</th>
              <th className="text-start bg-gray-300 p-2">Value</th>
              <th className="text-start bg-gray-300 p-2">Seller</th>
              <th className="text-start bg-gray-300 p-2">Description</th>
              <th className="text-start bg-gray-300 p-2">Nature</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, index) => (
              <tr key={index}>
                <td className="border-b p-2">{index + 1}</td>
                <td className="border-b p-2">
                  {new Date(t.date).toISOString()}
                </td>
                <td className="border-b p-2">{t.product}</td>
                <td className="border-b p-2">
                  {(t.value / 100).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td className="border-b p-2">{t.seller}</td>
                <td className="border-b p-2">{t.type.description}</td>
                <td className="border-b p-2">{t.type.nature}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <span className="font-semibold text-2xl text-gray-700">
          No Transactions
        </span>
      )}

      <div className="p-24 text-center">
        <p className="px-4 py-2 mx-auto max-w-160px bg-gray-700 text-white rounded">
          Total:{" "}
          <span>
            {(totalPrice / 100).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TransactionsTable;
