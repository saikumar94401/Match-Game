import './index.css'

const Navbar = props => {
  const {timer, score} = props

  return (
    <div className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="navbar-website-logo"
      />
      <ul className="navbar-score-timer-container">
        <li className="navbar-score-container">
          <p className="score-text">Score:</p>
          <p className="score-value">{score}</p>
        </li>

        <li className="navbar-timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p className="timer-value">{timer} Sec</p>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
