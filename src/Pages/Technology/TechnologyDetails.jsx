import { useLocation } from "react-router-dom"
import clap from '../../Images/innerImages/clap.png'
import share from '../../Images/innerImages/share.png'
import displayPic from '../../Images/innerImages/display-pic.png'
import facebook from '../../Images/innerImages/facebook.JPG'
import twitter from '../../Images/innerImages/twitter.JPG'
import instagram from '../../Images/innerImages/instagram.JPG'
import youtube from '../../Images/innerImages/youtube.JPG'
import MoreContent from "../../Components/MoreContent"

function TechnologyDetails() {

  const location = useLocation();

  const item = location.state;
  return (
    <div className="inner-details">
      <div id="head">
        <div id='logo'>
          <p id='rotated'>The</p>
          <p> Siren</p>
        </div>
        <div className="get-start">Get Started</div>
      </div>
      <hr />
      <div className="detail-content" key={item?.id}>
        <h1>{item?.title}</h1>
        <div className="content-profile">
          <div className="profile-main">
            <img src={displayPic} alt="dp" />
            <p>{item?.author}<br /><span>Jan 25 2023 · 10 min read</span>
            </p>
          </div>
          <div className="social-handles">
            <img src={facebook} alt="dp" />
            <img src={twitter} alt="dp" />
            <img src={instagram} alt="dp" />
            <img src={youtube} alt="dp" />
          </div>
        </div>
        <img src={item?.urlToImage} alt='inner-img' />
        <p>{item?.content}.{item?.description}. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi velit cumque magni ipsum fuga reiciendis et veritatis eveniet nobis doloribus, exercitationem voluptatibus, hic temporibus vero est consectetur adipisci quos laborum. Possimus ad id recusandae harum magnam magni commodi vero cumque porro consequatur eveniet enim expedita nobis, ratione, eaque voluptates animi.</p>
        <hr />
        <div className="comments">
          <img src={displayPic} alt="dp" />
          <p><span>WRITTEN BY <br />
          </span> {item?.author}<br />
            <span>Jan 25 2023 · 10 min read</span></p>
        </div>
        <hr />
      </div>
      <div className="more-from">
        <p>More From The Siren</p><hr />
        <div className="more-content">
          <MoreContent image={item?.urlToImage} title={item?.title} profilePic={displayPic} author={item?.author} />
          <MoreContent image={item?.urlToImage} title={item?.title} profilePic={displayPic} author={item?.author} />
          <MoreContent image={item?.urlToImage} title={item?.title} profilePic={displayPic} author={item?.author} />
        </div>
      </div>

      <div className="fixed-side">
        <div className="fsd"><img src={clap} alt="dp" /><span>9.3 K</span></div>
        <div className="fsd"><img src={share} alt="dp" /><span>Share this article</span></div>
      </div>
    </div>
  )
}

export default TechnologyDetails