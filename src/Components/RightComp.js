// import image from '../Images/image.jpg'

function RightComp({ item }) {
  return (
      <div>
          <hr />
            <div id='right-news'>
                <div id='right-news-image'><img src={item?.urlToImage} alt='news-img'/></div>
                <div>
                    <p className='content-title'>{item?.title.slice(0,40)}</p>                  
                    <p>{item?.name}<span>{item?.publishedAt.slice(0,10)}</span></p>
                </div>
            </div>
    </div>
  )
}

export default RightComp