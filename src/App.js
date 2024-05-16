
import './App.css';
import Books from './Compoments/GraphQL/Books';
import Menu from './Compoments/Menu';
import AddBooks from './Compoments/GraphQL/AddBooks';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Metricstream from './Compoments/Metricstream';
import Navigation from './Compoments/Navigation';
import Product from './Compoments/Product';
import ProductDetails from './Compoments/ProductDetails';
import NewCars from './Compoments/NewCars';
import OldCars from './Compoments/OldCars';
import Login from './Compoments/Login';
import RegistraionHF from './Compoments/RegistraionHF';
import ProtectedWrapper from './Compoments/ProtectedComponentWrapper';
import ThemeContext from './Compoments/ThemeContext/ThemeContext';
import DashBoard from './Compoments/ThemeContext/DashBoard';
import OtherComponent from './Compoments/ThemeContext/OtherComponent';
import Counter from './Compoments/Redux/Counter';
import Navbar from './Compoments/GraphQL/Navbar';


function App() {
  let theme='dark';
  return (
    <div className="App">
      <Navbar />
      <Counter />
      {/*<Login />/*}
      <RegistraionHF />*/}
      
      
       {/*<RegistraionHF />*/}
         
      
    {/*   <ThemeContext.Provider value={theme}>
        <DashBoard />
      </ThemeContext.Provider>
     <OtherComponent /> */}
    {/*}  <Router>
      <Navigation />
        <Routes>
        <Route path="/" element={<Books />}/>
          <Route path="/books" element={<ProtectedWrapper >
            <Books />
      </ProtectedWrapper>}/>
          <Route path="/addBooks" element={<AddBooks />}/>
          <Route path="/metricstream" element={<Metricstream />}/>
          <Route path="/products" element={<Product />}>
                  <Route path="newcars" element={<NewCars />}/>
                   <Route path="oldcars" element={<OldCars/>}/>
          </Route>
          <Route path='/product/:id' element={<ProductDetails />}/>
          <Route path='/login' element={<Login />}/>
          <Route path="*" element={<Menu />}/>
        </Routes>
          </Router>*/}
      {/*<Menu />*/}
    </div>
  );
}

export default App;
