import { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import SweetAlert from "sweetalert-react";
import InputGroup from "../components/InputGroup.js";
import Table from "../components/Data.js";
import "sweetalert/dist/sweetalert.css";

const dummyData = Array(10)
  .fill({ mobile_number: "+91 9830955456" })
  .map(({ mobile_number }) => {
    const y = Math.random() > 0.5;
    return {
      mobile_number,
      status: y ? "COVID positive" : "COVID negative",
      color: y ? "#00ff00" : "#ff0000",
    };
  });

const SingleModalContent = ({ status, color, mobile_number }) => (
  <div>
    <div className={`text-center text-lg`}>{mobile_number}</div>
    <div className={`text-center my-5`} style={{ color }}>
      {status}
    </div>
  </div>
);

export default function Home() {
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalContent, setModalContent] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);

  const handleSingleNumber = async (number) => {
    setLoading(true);
    setMessage(false);
    const res = await (
      await fetch("https://jsonplaceholder.typicode.com/todos")
    ).json();

    console.log({ number, res });
    if (Math.random() < 0.1) {
      setError("An error occurred");
    } else {
      setModalContent(() => <SingleModalContent {...dummyData[0]} />);
      setModalVisible(true);
    }

    setLoading(false);
  };

  const handleMultipleNumbers = async (raw) => {
    setLoading(true);
    setMessage(false);
    setError(false);
    const numbers = raw.split(",").map((x) => x.trim());

    const res = await (
      await fetch("https://jsonplaceholder.typicode.com/todos")
    ).json();

    console.log({ numbers, res });
    if (Math.random() < 0.1) {
      setError("An error occurred");
      setData([]);
    } else {
      setMessage("Numbers sent to server. Press refresh to view statuses.");
      setData(dummyData);
    }

    setLoading(false);
  };

  const handleRefresh = async () => {
    setLoading(true);
    setMessage(false);
    setError(false);

    const res = await (
      await fetch("https://jsonplaceholder.typicode.com/todos")
    ).json();

    console.log({ res });
    if (Math.random() < 0.1) {
      setError("An error occurred");
      setData([]);
    } else {
      setMessage("Numbers sent to server. Press refresh to view statuses.");
      setData(dummyData);
    }

    setLoading(false);
  };

  return (
    <div className="container w-full max-w-screen-md px-5 py-5 mx-auto">
      <InputGroup
        placeholder="Single mobile number"
        disabled={loading}
        onSubmit={handleSingleNumber}
        btnLabel="Check"
      />
      <InputGroup
        placeholder="Multiple comma-separated mobile numbers"
        disabled={loading}
        onSubmit={handleMultipleNumbers}
        btnLabel="Check"
      />

      {message && <div className={`text-center w-full text-sm`}>{message}</div>}
      {error && (
        <div className={`text-center w-full text-sm text-red-600`}>{error}</div>
      )}

      <SweetAlert
        show={modalVisible}
        title="Status"
        html
        text={renderToStaticMarkup(modalContent)}
        onConfirm={() => setModalVisible(false)}
      />

      <Table onRefresh={handleRefresh} data={data} />
    </div>
  );
}
