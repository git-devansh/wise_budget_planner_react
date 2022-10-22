import React from "react";
import { AppProvider } from "../context/AppContext";
import Budget from "../components/Budget";
import ExpenseTotal from "../components/ExpenseTotal";
import ExpenseList from "../components/ExpenseList";
import AddExpenseForm from "../components/AddExpenseForm";
import RemainingBudget from "../components/Remaining";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <AppProvider>
        <div className="container">
          <h1 className="mt-3">
            Wise <span className="text-primary">Ai</span>Budget Planner
          </h1>
          <h5>Wise calculated your spending based on your previous uses.</h5>
          <div className="mt-3">
            <Budget />
          </div>
          <div className="row mt-3">
            <div className="col-sm">
              <RemainingBudget />
            </div>
            <div className="col-sm">
              <ExpenseTotal />
            </div>
          </div>
          <h3 className="mt-3">General expenses while traveling to Berlin</h3>
          <div className="row ">
            <div className="col-sm">
              <ExpenseList />
            </div>
          </div>
          <h3 className="mt-3">Additional Expenses</h3>
          <div className="row mt-3">
            <div className="col-sm">
              <AddExpenseForm />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mb-5">
          <Link to="/calculate" className="btn btn-primary btn-lg">
            Let's Calculate
          </Link>
        </div>
      </AppProvider>
    </>
  );
}

export default Home;
