import './index.css'

const MoneyDetails = props => {
  const {filteredMoneyDetails} = props
  const {balanceAmount, incomeAmount, expensesAmount} = filteredMoneyDetails
  return (
    <>
      <li className="list-container list-1">
        <img
          className="money-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="money-type-para">Your Balance</p>
          <p data-testid="balanceAmount" className="money-para">
            Rs {balanceAmount}
          </p>
        </div>
      </li>
      <li className="list-container list-2">
        <img
          className="money-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="money-type-para">Your Income</p>
          <p data-testid="incomeAmount" className="money-para">
            Rs {incomeAmount}
          </p>
        </div>
      </li>
      <li className="list-container list-3">
        <img
          className="money-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="money-type-para">Your Expenses</p>
          <p data-testid="expensesAmount" className="money-para">
            Rs {expensesAmount}
          </p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
