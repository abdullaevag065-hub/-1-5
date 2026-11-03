import Banner from "./companets/Banner/Banner";
import Desu from "./companets/Desu/Desu";
import Header from "./companets/Header/Header";
import Main from "./companets/Main/Main";
import Products from "./companets/Products/Products";

export default function App() {
  return (
    <div>
        <Header />
        <Banner />
        <Desu />
        <Products />
        <Main />
    </div>
  )
}
