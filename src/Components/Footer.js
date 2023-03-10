import sidearrow from '../Images/side-arrow.png'
import FooterArticle from "../Components/FooterArticle"
import SubHeading from "../Components/SubHeading"

function Footer({data}) {
  return (
    <div>
      <SubHeading sub='Latest Stories' />
      <hr />
      <div id='footer-article'>
      {data.slice(9,12).map((item, index) => {
        return (<>
          <FooterArticle  item={item} key={ index} />
        <hr/></>)
      })}        
      </div>
      <hr />
      <div id='side-arrow'>
        <span>READ MORE</span>
        <img src={sidearrow} alt='side-arrow'/>
      </div>
    </div>
  )
}

export default Footer