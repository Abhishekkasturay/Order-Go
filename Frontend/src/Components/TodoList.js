import React, { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Messages</h2>
        <div className="mb-4">
          <input
            type="text"
            value={message}
            placeholder="Enter a message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="flex justify-between mb-4">
          <input
            type="button"
            value="Add"
            onClick={() => {
              if (message.trim() !== "") {
                // Check if the message is not empty (ignoring leading and trailing whitespaces)
                setMessageList([
                  ...messageList,
                  {
                    id: messageList.length + 1,
                    message: message,
                  },
                ]);
                setMessage(""); // Clear the text box
              }
            }}
            disabled={message.trim() === ""}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-300"
          />
          <input
            type="button"
            value="Clear"
            onClick={() => {
              setMessageList([]);
            }}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          />
        </div>
        <ul className="list-disc pl-5">
          {messageList.map((m) => (
            <li key={m.id} className="mb-2">
              {m.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Message;
