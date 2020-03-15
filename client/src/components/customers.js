import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      currencies: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateSubmitButton(event){
    let currency = event.target.value
    if(currency.length === 3 && currency.match(/^[A-Z]+$/)){
      document.getElementById('newCurrencySubmitButton').removeAttribute('disabled')
    }else{
      document.getElementById('newCurrencySubmitButton').setAttribute('disabled', 'true')
    }
  }

  /*
  * Function to handle submission of new message
  */
  handleSubmit(event){
    event.preventDefault();
    let currency = document.getElementById('newCurrencyHolder').value;
    if(this.state.currencies.includes(currency)){
      document.getElementById('warningMessage').innerText = currency + ' has already been fetched.'
      return;
    }
    fetch('/api/bitcoin?currency='+currency).then(function(res){
      return res.json();
    }).then(function(data){
      if(typeof(data) === 'number'){
        var li = document.createElement("li");
        li.prepend(document.createTextNode(currency+' '+data));
        document.getElementById('currencyData').prepend(li);
        document.getElementById('warningMessage').innerText = '';
        this.setState({currencies: [...this.state.currencies, currency]})
      }else if(data['error']){
        document.getElementById('warningMessage').innerText = data['error'];
      }else{
        document.getElementById('warningMessage').innerText = 'Unknown error occurred.'
      }
    }.bind(this))
  };


  render() {
    return (
      <div>
        <h2 id={'warningMessage'} className={'red'}></h2>
        <form onSubmit={this.handleSubmit} id="chatBar">
          <label>Currency Abbreviation Using Capital Letters</label>
          <br></br>
          <input className="currencyValue" placeholder="Currency" maxlength={3}
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
