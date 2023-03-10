import LatestComp from './LatestComp'

function Latest({ data }) {
  return (
    <div id="latest-section">
      {data.slice(3, 6).map((item, index) => {
        return (
          <LatestComp item={item} key={ index} />)
      })}
    </div>
  )
}

export default Latest