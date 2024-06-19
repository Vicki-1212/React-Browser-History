import './index.css'

const HistoryList = props => {
  const {history, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = history
  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="list-item">
      <div className="history-details-container">
        <div>
          <p className="time">{timeAccessed}</p>
        </div>
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="link">{domainUrl}</p>
      </div>
      <button
        className="button"
        type="button"
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete icon"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryList
