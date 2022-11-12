import logo from './logo.svg';
import './App.css';
import Spinner from 'asset/Spinner';
import { ToastContainer } from 'react-toastify';
import Router from 'routes/Router';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { thunkLogin } from 'Context/slice/AuthSlice';
import { thunkFetchDiscount } from 'Context/slice/CarSlice';

const Container = styled.div`
  background-color: white;

`;

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(thunkLogin())
    dispatch(thunkFetchDiscount())
  }, [])
  return (
    <Container>
      {false && <Spinner />}
      <Router />
      <ToastContainer
        autoClose="2500"
        theme="colored"
        position="bottom-center"
      />
    </Container>
  );
}

export default App;
