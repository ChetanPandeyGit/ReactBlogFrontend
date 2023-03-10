import arrow from '../Images/arrow.png'
import RightBottom from "../Components/RightBottom"
import LeftComp from "../Components/LeftComp"
import BigBotImg from "../Components/BigBotImg"

function LatestArticleBottom({ data }) {
    return (
        <div id='latest-article-bottom'>
            <div id='left-bottom'>
            {data.slice(13,14).map((item,index) => { 
          return (
              <LeftComp item={item} key={ index} />)
        })}
                <div id='arrow'>
                    <img src={arrow} alt='down-arrow' />
                    <span> LOAD MORE</span>
                </div>
                <BigBotImg className = 'left' data={data}/>
            </div>
            <div id='right-bottom'>
                <RightBottom data={data} />
            </div>
        </div>
    )
}

export default LatestArticleBottom