import  { useState } from 'react';

const Raf = () => {
  const [balance, setBalance] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);

  const handleDeposit = () => {
    const newBalance = balance + parseFloat(depositAmount);
    setBalance(newBalance);
    setDepositAmount(0); // Reset the input field
  };

  return (
    <div>
      <label htmlFor="deposit">Deposit:</label>
      <input
        type="number"
        id="deposit"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
      />
      <button onClick={handleDeposit}>Deposit</button>

      <div>
        <p>Balance: {balance}</p>
      </div>
    </div>
  );
};

export default Raf;