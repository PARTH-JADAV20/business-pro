import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Four04 from "./Components/Four04";
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Dashboard from "./Pages/MainDashboard";
import CreditSales from "./Pages/CreditSalesDashboard";
import StockManage from "./Components/StockManage/StockManage";
import AdvancePayments from "./Components/AdvancePayments/AdvancePayments";
import SalesEntry from "./Components/SalesEntry/SalesEntry";
import Customers from "./Components/Customers/Customers";
import ExpenseTracker from "./Components/ExpenseTracker/ExpenseTracker";
import OutgoingPayments from "./Components/OutgoingPayments/OutgoingPayments";

function App() {
  const [allowedAccess, setAllowedAccess] = useState(null);

  const pageTitles = {
    '/': 'Dashboard',
    '/stock-management': 'Stock Management',
    '/sales-entry': 'Sales Entry',
    '/salespage': 'Sales Entry',
    '/advance-payments': 'Advance Payments',
    '/expense-tracking': 'Expense Tracking',
    '/customers': 'Customers',
    '/credit-sales': 'Credit Sales',
    '/outgoing-payments': 'Outgoing Payments'
  };

  return (
    <Router>
      <div className="stock-management-container">
        <Sidebar />
        <div className="main-wrapper">
          <Navbar pageTitles={pageTitles} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/stock-management" element={<StockManage />} />
            <Route path="/sales-entry" element={<SalesEntry />} />
            <Route path="/salespage" element={<SalesEntry />} />
            <Route path="/advance-payments" element={<AdvancePayments />} />
            <Route path="/expense-tracking" element={<ExpenseTracker />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/credit-sales" element={<CreditSales />} />
            <Route path="/outgoing-payments" element={<OutgoingPayments />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;