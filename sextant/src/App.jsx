import "./App.css";
import Banner from "./components/Banner";
import CollectAndDisplayIP from "./components/CollectAndDisplayIP";
import Exhibit from "./components/Exhibit";

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
      </Exhibit>
    </>
  );
}

export default App;
