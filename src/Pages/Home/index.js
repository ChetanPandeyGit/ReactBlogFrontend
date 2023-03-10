import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import HeroSection from '../../Components/HeroSection';
import Latest from '../../Components/Latest';
import LatestArticle from '../../Components/LatestArticle';
import LatestArticleBottom from '../../Components/LatestArticleBottom';
import Navbar from '../../Components/Navbar';
import SubHeading from '../../Components/SubHeading';
import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../../App.css'
// import {HomeData} from '../../Data/HomeData'

function Home() {
  const [data, setData] = useState([])
  // const data = HomeData;

  const fetchData = () => {
    return fetch('https://react-blog-backend-w4of.onrender.com/')
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


  console.log(data)
  return (
    <div className='app'>
      <Header />
      <Navbar />
      <HeroSection data={data} />
      <SubHeading sub='The Latest' />
      <Latest data={data} />
      <SubHeading sub='Latest Article' />
      <LatestArticle data={data} />
      <LatestArticleBottom data={data} />
      <Footer data={data} />
    </div>
  )
}

export default Home
