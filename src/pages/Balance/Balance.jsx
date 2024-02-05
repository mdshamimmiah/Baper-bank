import { useState } from "react";


const Balance = () => {
   const [reduceDeposite, setReduceDeposite] = useState(0);
   const [inputDeposite, setInputDeposite] = useState(0);
   const [totalBalance, setTotalBalance] = useState(1250)
   const [balance, setBalance] = useState(0);
   const [depositAmount, setDepositAmount] = useState(0);
 
   const handleDeposit = () => {
     const newBalance = balance + parseFloat(depositAmount);
     setBalance(newBalance);
     setDepositAmount(0); // Reset the input field
     const newTotalBalance = newBalance + parseFloat(totalBalance);
     setTotalBalance(newTotalBalance)
   };
   const handleWithdraw = () => {
      const reduceNewBalance = reduceDeposite + parseFloat(inputDeposite);
      setReduceDeposite(reduceNewBalance)
      setInputDeposite(0);
      const okBalance = totalBalance - reduceNewBalance;
      setTotalBalance(okBalance)
     
   }

    return (
       <div className="p-2">
        <h1 className="text-5xl mt-4 mb-5 text-center">Let's Get Some <span className="text-red-600">Moooooooney!!!!</span></h1>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 ">
           <div className="bg-purple-500 p-8 rounded-lg">
           <h1 className="text-3xl text-center">Deposit</h1>
            <h1 className="text-2xl text-center text-white ">${balance}</h1>
           </div>
           <div className="bg-teal-400 p-8 rounded-lg">
           <h1 className="text-3xl text-center">Withdraw</h1>
            <h1 className="text-2xl text-center  text-white">${reduceDeposite}</h1>
           </div>
           <div className="bg-blue-500 p-8 rounded-lg">
           <h1 className="text-3xl text-center">Balance</h1>
            <h1 className="text-2xl text-center  text-white">${totalBalance}</h1>
           </div>
         
        </div>
        <div className="flex flex-col lg:flex-row justify-around gap-7 mt-8">
            <div className="bg-yellow-400 px-14 p-6">
               <h1 className="text-3xl mt-4">Please Deposite </h1>
               <input className="p-3 w-[300px]" onChange={(e) => setDepositAmount(e.target.value)} type="text"placeholder="Amount you want to deposite" name="deposite" value={depositAmount}  /> <br />
               <button onClick={handleDeposit} className="btn btn-primary mt-10">Deposite</button>
            </div>
            <div className="bg-green-600 p-6 px-14">
               <h1 className="text-3xl mt-4 ">Please Withdraw </h1>
               <input className="p-3 w-[300px]" type="text"placeholder="Amount you want to withdraw" onChange={(e) => setInputDeposite(e.target.value)} value={inputDeposite}/> <br />
               <button className="btn btn-primary mt-4" onClick={handleWithdraw}>Withdraw</button>
            </div>
           </div>
       </div>
    );
};

export default Balance;