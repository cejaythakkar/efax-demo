import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '@containers/routes';
import Header from '@components/header/header';
import { get } from "@lib/http/http-service";
import Footer from "@/app/components/footer/footer";
import './App.scss';

class App extends Component {
  componentDidMount() {
    get(
      'https://api.fax.j2.com/v1/inventory/cities/CA-Yosemite-209-P/phone_numbers?count=30',
      null,
      {
        Authorization: 'Bearer 02881c51-c7e1-4996-a460-8bb8a22b6598',
        'Content-Type': 'application/json',
      },
      false,
    )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes />
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
