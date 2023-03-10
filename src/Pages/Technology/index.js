import SubHeading from '../../Components/SubHeading'
import RightBottom from '../../Components/RightBottom'
import Header from '../../Components/Header'
import Navbar from '../../Components/Navbar'
import Advertisement from '../../Components/Advertisement'
import '../../CSS/style.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
// import { TechnologyData } from '../../Data/TechnologyData'

function Technology() {
  const [data, setData] = useState([])
  // const data = TechnologyData;
  const navigate = useNavigate();
  const fetchData = () => {
    return fetch('https://react-blog-backend-w4of.onrender.com/technology')
      .then((response) => {
        return response.json();

      })
      .then((res) => {
        setData(res);
      })
  }

  useEffect(() => {
    fetchData()
  }, [])
  const handleNavigation = (id, item) => {
    navigate(`/Technology/${id}`, { state: item })
  }

  return (
    <div className="app">
      <Header />
      <Navbar />
      <div id='sub-page'>
        <div>
          <SubHeading sub='Technology' />

          {data.slice(0, 7).map((item, index) => {
            return (<div key={index}>
              <div>
                <hr />
                <div className='left-news'>
                  <div id='news-image'><img
                    onClick={() => handleNavigation(item?.id, item)}
                    src={item?.urlToImage} alt='news-img' /></div>

                  <div id='news-content'>
                    <p className='content-title'>{item?.title.slice(0, 30)}</p>
                    <p>{item?.content.slice(0,280)}...</p>
                    <p>{item?.name}<span>{item?.publishedAt.slice(0, 10)}</span></p>
                  </div>
                </div>
              </div>
            </div>
            )
          })}
        </div>
        <div className='bolly'>
          <RightBottom data={data} />
          <Advertisement />
        </div>
      </div>
    </div>
  )
}

export default Technology