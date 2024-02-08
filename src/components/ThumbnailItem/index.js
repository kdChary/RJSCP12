import './index.css'

const ThumbnailItem = props => {
  const {imagesDetails, displayImage, isActive} = props
  const {
    id,
    imageUrl,
    imageAltText,
    thumbnailAltText,
    thumbnailUrl,
  } = imagesDetails

  const changeImage = () => {
    displayImage(id, imageUrl, imageAltText)
  }

  const changeOpacity = isActive ? 'changeOpacity' : ''

  return (
    <li className="item-list">
      <button className="button" type="button" onClick={changeImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image ${changeOpacity}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
