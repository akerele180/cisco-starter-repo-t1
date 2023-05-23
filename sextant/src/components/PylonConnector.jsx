import { useEffect, useState } from "react";

const PylonConnector = () => {
  const [latency, setLatency] = useState("" || null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:55455");
    // socket.onmessage((message) => console.log(message));
    socket.onmessage = (message) => {
      setLatency(new Date().getTime() - message.data);
    };
    console.log(socket, latency);
  }, []);

  return <div>The latency here is: {latency}</div>;
};

export default PylonConnector;
