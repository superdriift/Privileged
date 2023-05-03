import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import About from './pages/About';
import Products from './pages/Products'
import Signup from './pages/Signup';
import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
import Footer from './components/Footer';
import Cart from './components/Cart'



const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='underlay'>
          <StoreProvider>
            <Nav />
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/success"
                element={<Success />}
              />
              <Route
                path="/orderhistory"
                element={<OrderHistory />}
              />
              <Route
                path="/products"
                element={<Products />}
              />
              <Route
                path="/contact"
                element={<Contact />}
              />
              <Route
                path="/products/:id"
                element={<Detail />}
              />
              <Route
                path={"/about"}
                element={<About />}
              />
              <Route
                path={"/profile"}
                element={<Profile />}
              />
              <Route
                path="*"
                element={<NoMatch />}
              />
            </Routes>
            <Footer />
            <Cart />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
