import './Style.css';
import Header from './component/header';
import Banner from './component/banner';
import Boxes from './component/boxes';
import Product from './component/productcard';
// import BestChoice from './component/bestchoice';
import Footer from './component/footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Boxes />
      <Product />
      {/* <BestChoice /> */}
      <Footer />
    </div>
  );
}

export default App;