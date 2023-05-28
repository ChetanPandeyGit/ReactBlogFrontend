import LatestComp from './LatestComp'

function Latest({ data,handleNavigation }) {
  return (
    <div id="latest-section">
      {data.slice(3, 6).map((item, index) => {
        return (
          <LatestComp item={item} key={ index} handleNavigation={handleNavigation}/>)
      })}
    </div>
  )
}

export default Latest