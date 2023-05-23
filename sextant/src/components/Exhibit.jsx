/* eslint-disable react/prop-types */
import Header from "./Header";

const Exhibit = (props) => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
    </div>
  );
};

export default Exhibit;
