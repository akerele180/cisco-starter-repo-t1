import "./App.css";
import Banner from "./components/Banner";
import CollectAndDisplayIP from "./components/CollectAndDisplayIP";
import Exhibit from "./components/Exhibit";
import PylonConnector from "./components/PylonConnector";

function App() {
  // const styles = {
  //   header: {
  //     color: "#5B6193",
  //     fontSize: 100,
  //   },
  // };
  return (
    <>
      {/* <Banner /> */}
      <Exhibit>
        <Banner />
        <CollectAndDisplayIP />
        <PylonConnector />
      </Exhibit>
    </>
  );
}

export default App;
