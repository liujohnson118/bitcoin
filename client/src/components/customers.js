import React, { Component } from 'react';
import './customers.css';
import $ from 'jquery';

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
      document.getElementById('new-currency-submit-button').removeAttribute('disabled')
    }else{
      document.getElementById('new-currency-submit-button').setAttribute('disabled', 'true')
    }
  }

  /*
  * Function to handle submission of new message
  */
  handleSubmit(event){
    event.preventDefault();
    let currency = document.getElementById('new-currency-holder').value;
    if(this.state.currencies.includes(currency)){
      $('#warning-message').text(`${currency} has already been fetched.`)
      return;
    }
    fetch('/api/bitcoin?currency='+currency).then(function(res){
      return res.json();
    }).then(function(data){;
      if(typeof(data) === 'number'){
        $('#currency-data').prepend(`<li>${currency} ${data}</li>`);
        $('#warning-message').text('');
        this.setState({currencies: [...this.state.currencies, currency]})
      }else if(data['error']){
        $('#warning-message').text(data['error']);
      }else{
        $('#warning-message').text('Unknown error occurred.')
      }
    }.bind(this))
  };


  render() {
    return (
      <div>
        <h2 id={'warning-message'} className={'red'}></h2>
        <form onSubmit={this.handleSubmit} id="new-currency-request-form">
          <label>Currency Abbreviation Using Capital Letters</label>
          <br></br>
          <input className="currency-value" placeholder="Currency" maxlength={3}
                 defaultValue={""} onChange={this.updateSubmitButton} ref="form" id="new-currency-holder" />
          <input type="submit" value="submit" id="new-currency-submit-button" disabled={true}/>
        </form>
        <ul id={"currency-data"}>
        </ul>
      </div>
    );
  }
}

export default Customers;
