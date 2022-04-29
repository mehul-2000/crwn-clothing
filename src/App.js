import './categories.styles.scss';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/Home/home.component'
import Navigation from './routes/Navigation/navigation.component'
import SignIn from './routes/Authentication/authentication.component'
const Shop = () => {
  return <h1>I am the Shop Page.</h1>
}
function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
