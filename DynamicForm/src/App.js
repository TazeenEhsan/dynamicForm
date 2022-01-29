
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Contact from './Pages/Home/Contact/Contact';
import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';

import Test1 from './Pages/Test/Test1';
import Test2 from './Pages/Test/Test2';
import InputForm from './Pages/InputForm/InputForm';
import ShowData from './Pages/InputForm/ShowData';


function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header></Header>

        <Switch>
          <Route exact path="/">
            <h1>Welcome</h1>
          </Route>

          <Route path='/test1'>
            <Test1></Test1>
          </Route>
          <Route path='/test2'>
            <Test2></Test2>
          </Route>
          <Route path='/showdata/:formFieldName'>
            <ShowData></ShowData>
          </Route>

          <Route path='/inputform/:formName'>
            <InputForm></InputForm>
          </Route>


          <Route path='/contact'>
            <Contact></Contact>
          </Route>

        </Switch>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
