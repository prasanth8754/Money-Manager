import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    historyList: [],
    title: '',
    amount: '',
    type: 'INCOME',
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: parseInt(event.target.value)})
  }

  onChangeType = event => {
    this.setState({
      type: event.target.value,
    })
  }

  onDeleteHistory = id => {
    this.setState(prevState => ({
      historyList: prevState.historyList.filter(eachItem => eachItem.id !== id),
    }))
  }

  filterMoneyDetails = () => {
    const {historyList} = this.state
    let incomeAmount = 0
    historyList.forEach(eachItem => {
      if (eachItem.type === 'INCOME') {
        incomeAmount += eachItem.amount
      }
    })

    let expensesAmount = 0
    historyList.forEach(eachItem => {
      if (eachItem.type === 'EXPENSES') {
        expensesAmount += eachItem.amount
      }
    })

    const balanceAmount = incomeAmount - expensesAmount

    return {balanceAmount, incomeAmount, expensesAmount}
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    if (title !== '' && amount !== '') {
      const newHistory = {
        id: uuidv4(),
        title,
        amount,
        type,
      }

      this.setState(prevState => ({
        historyList: [...prevState.historyList, newHistory],
        title: '',
        amount: '',
        type: 'INCOME',
      }))
    }
  }

  render() {
    const {historyList, title, amount, type} = this.state
    const filteredMoneyDetails = this.filterMoneyDetails()

    return (
      <div className="bg-container">
        <div className="container">
          <div className="bg-img">
            <h1>Hi, Richard</h1>
            <p>
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>

          <ul className="ul-container">
            <MoneyDetails filteredMoneyDetails={filteredMoneyDetails} />
          </ul>

          <div className="form-history-cont">
            <form className="form-container" onSubmit={this.onFormSubmit}>
              <h1 className="form-heading">Add Transaction</h1>
              <label htmlFor="title">TITLE</label>
              <input
                value={title}
                id="title"
                type="text"
                placeholder="TITLE"
                onChange={this.onChangeTitle}
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                value={amount}
                id="amount"
                type="number"
                placeholder="AMOUNT"
                onChange={this.onChangeAmount}
              />
              <label htmlFor="moneyType">TYPE</label>
              <select value={type} id="moneyType" onChange={this.onChangeType}>
                {transactionTypeOptions.map(eachItem => (
                  <option value={eachItem.optionId} key={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <button className="form-btn" type="submit">
                Add
              </button>
            </form>

            <ul className="history-cont">
              <li>
                <h1 className="history-main-heading">History</h1>
              </li>
              <li className="col-heading-cont">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </li>
              <ul className="transaction-cont">
                {historyList.map(eachItem => (
                  <TransactionItem
                    historyDetails={eachItem}
                    key={eachItem.id}
                    onDeleteHistory={this.onDeleteHistory}
                  />
                ))}
              </ul>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
