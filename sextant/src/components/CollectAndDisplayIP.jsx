import { useEffect, useState } from "react";

const CollectAndDisplayIP = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const url = "https://api.ipify.org?format=json";
    // const url = "https://api64.ipify.org?format=jsonp&callback=getip";
    // const url = `https://api64.ipify.org?format=jsonp&callback=getip`;

    const fetchIP = () => {
      fetch(url)
        .then((res) => res.json())
        .then((val) => {
          console.log({ val });
          setData(val.ip);
        });
    };
    fetchIP();
  }, []);

  const styles = {
    pCenter: {
      textAlign: "center",
      fontSize: "2rem",
    },
  };
  return (
    <div>
      <p style={styles.pCenter}>
        Your Public IP Address is:{" "}
        {data ? data : "No data fetched. Please wait..."}
      </p>
    </div>
  );
};

export default CollectAndDisplayIP;
