import './index.css'

const TransactionItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, title, amount, type} = historyDetails

  const selectedType = type === 'INCOME' ? 'Income' : 'Expenses'

  const deleteHistory = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-cont">
      <p>{title}</p>
      <p>{`Rs ${amount}`}</p>
      <p>{selectedType}</p>
      <button
        data-testid="delete"
        className="delete-btn"
        type="button"
        onClick={deleteHistory}
      >
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
