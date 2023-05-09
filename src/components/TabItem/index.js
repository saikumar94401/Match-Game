import './index.css'

const TabItem = props => {
  const {eachTab, isActive, updateTabItem} = props
  const activeItemStyle = isActive ? 'active-tab' : ''
  console.log(isActive)

  const changeTabItem = () => {
    updateTabItem(eachTab.tabId)
  }

  return (
    <li className="active-tab-item-container" onClick={changeTabItem}>
      <button type="button" className="each-tab-button">
        <p className={`each-tab-display-text ${activeItemStyle}`}>
          {eachTab.displayText}
        </p>
      </button>
    </li>
  )
}
export default TabItem
