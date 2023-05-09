import './index.css'

const Thumbnail = props => {
  const {eachImage, guessImage} = props

  const matchImage = () => {
    guessImage(eachImage.id)
  }

  return (
    <li className="thumbnail-item-container">
      <button type="button" className="thumbnail-button" onClick={matchImage}>
        <img
          src={eachImage.thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-image"
        />
      </button>
    </li>
  )
}

export default Thumbnail
