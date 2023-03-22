import Home from './routes/home/home.component'
import Navigation from './routes/main-menu/main-menu.component';
import Shop from './routes/shop/shop.component';
import SignIn from './routes/sign-in/sign-in.component';
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='sign-in' element={<SignIn />} />
    </Route>
  </Routes>
  );
};

export default App;


