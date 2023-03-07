import React from 'react';
import './bankingpage.css';
const BankingPage = () => {
  return (
    <div className='bankingpage'>
      <h1>Banking Page for Farmers</h1>
      <p>Welcome to our banking page for farmers where you can access government loans and funds related to agriculture.</p>
      <h2>Government Loans</h2>
      <p>Here you can apply for government loans related to agriculture by filling out the application form.</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Loan Amount:
          <input type="number" name="loanAmount" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h2>Government Funds</h2>
      <p>Here you can access government funds related to agriculture by filling out the application form.</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Fund Amount:
          <input type="number" name="fundAmount" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h2>Payment Gateway</h2>
      <p>Here you can make payments for your loans and funds using our payment gateway.</p>
      <form>
        <label>
          Card Number:
          <input type="text" name="cardNumber" />
        </label>
        <label>
          Card Expiry Date:
          <input type="text" name="cardExpiryDate" />
        </label>
        <label>
          CVV:
          <input type="text" name="cvv" />
        </label>
        <label>
          Amount:
          <input type="number" name="amount" />
        </label>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default BankingPage;
