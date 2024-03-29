// import image from '../Images/image.jpg'

function LatestComp({item,handleNavigation}) {
    return (
        <div className='latest-content'>
            <img src={item?.urlToImage} alt='content1' onClick={() => handleNavigation(item?.id, item)}/>
            <p className='content-title'>{item?.title.slice(0,40)}...</p>
            <p>{item?.content}.</p>
            <p>{item?.name}<span>{item?.publishedAt}</span></p>
        </div>
    )
}

export default LatestComp