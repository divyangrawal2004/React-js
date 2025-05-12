import Header from "./Header";
import { categories } from "../data";
import Menu from "./menu";
import Banner from "./banner";


function App() {
  console.log(categories);

  return (
    <>
      {/* <h1>hello</h1> */}
      <Header />
      <Menu />
      <Banner />
    </>
  );
}

export default App;
