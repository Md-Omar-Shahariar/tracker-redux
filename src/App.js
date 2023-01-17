import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Layout from "./components/Layout";
import Balance from "./components/Balance";
import Form from "./components/Form";
import Transaction from "./components/Transaction/Transaction";

function App() {
  return (
    <Layout>
      <Balance></Balance>
      <Form></Form>
      <Transaction></Transaction>
    </Layout>
  );
}

export default App;
