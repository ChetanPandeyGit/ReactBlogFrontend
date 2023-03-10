import Advertisement from "./Advertisement"
import LeftComp from "./LeftComp"

function LatestArticle({ data }) {
  return (
    <div id='latest-article'>
      <div id='left-section'>
        {data.slice(6,9).map((item, index) => { 
          return (
            <LeftComp item={item} key={index} />)
        })}
      </div>
      <Advertisement />
    </div>
  )
}

export default LatestArticle