import SubHeading from '../../Components/SubHeading'
import RightBottom from '../../Components/RightBottom'
import Header from '../../Components/Header'
import Navbar from '../../Components/Navbar'
import Advertisement from '../../Components/Advertisement'
import '../../CSS/style.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
// import { BollywoodData } from '../../Data/BollywoodData'

function Bollywood() {
  const [data, setData] = useState([])
  // const data = BollywoodData;
  const navigate = useNavigate();

  const fetchData = () => {
    return fetch('https://react-blog-backend-w4of.onrender.com/bollywood')
      .then((response) => {
        console.log(response);
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
    navigate(`/Bollywood/${id}`, { state: item })
  }

  return (
    <div className="app">
      <Header />
      <Navbar />
      <div id='sub-page'>
        <div>
          <SubHeading sub='Bollywood' />

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
                    <p>{item?.content}.</p>
                    <p>{item?.name}<span>&nbsp;{item?.publishedAt.slice(0, 10)}</span></p>
                  </div>
                </div>
              </div>
            </div>
            )
          })}          
        </div>
        <div className='bolly'>
          <RightBottom data={data}  handleNavigation={handleNavigation}/>
          <Advertisement />
        </div>
      </div>
    </div>
  )
}

export default Bollywood