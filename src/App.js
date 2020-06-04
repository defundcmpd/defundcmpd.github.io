import React from 'react';
import './App.css';
import { text, councilMembers, footer, budget, call, email} from './constants';
import Header from './components/Header';
import EmailForm from './components/EmailForm';
import Call from './components/Call';
import Budget from './components/Budget';
import Body from './components/Body'
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header text={text} />
      <div className="body">
        <EmailForm {...email} {...councilMembers}/>
        <Body text={text} />
        <Budget budget={budget}/>
        <Call {...call} {...councilMembers} />
        <Footer footer={footer} />
      </div>
    </div>
  );
}

export default App;
