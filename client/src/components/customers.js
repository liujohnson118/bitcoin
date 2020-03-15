import React, { Component } from 'react';
import './customers.css';
import ReactDom from 'react-dom'

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      currencyData: []
    };
  }

  componentDidMount() {
  }

  updateSubmitButton(event){
    let currency = event.target.value
    if(currency.length === 3 && currency.match(/^[A-Za-z]+$/)){
      document.getElementById('newCurrencySubmitButton').removeAttribute('disabled')
    }else{
      document.getElementById('newCurrencySubmitButton').setAttribute('disabled', 'true')
    }
  }

  /*
  * Function to handle submission of new message
  */
  handleSubmit(event,template){
    event.preventDefault();
    let currency = document.getElementById('newCurrencyHolder').value;
    fetch('/api/bitcoin?currency='+currency).then(res => res.json()).then(function(data){
      var li = document.createElement("li");
      li.prepend(document.createTextNode(currency+' '+data));
      document.getElementById('currencyData').prepend(li);
    })
  }

  render() {
    return (
      <div>
        <h2>Enter your currency</h2>
        <form onSubmit={this.handleSubmit} id="chatBar">
          <input className="chatbar-message" placeholder="Type a currency and click submit"
                 defaultValue={""} onChange={this.updateSubmitButton} ref="form" id="newCurrencyHolder" />
          <input type="submit" value="submit" id="newCurrencySubmitButton" disabled={true}/>
        </form>
        <ul id={"currencyData"}>
        </ul>
      </div>
    );
  }
}

export default Customers;
