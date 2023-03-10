

function LeftComp({ item }) {
    return (
        <div >
            <hr />
            <div className='left-news'>
                <div id='news-image'><img src={item?.urlToImage} alt='news-img' /></div>              
                <div id='news-content'>
                    <p className='content-title'>{item?.title.slice(0,40)}...</p>
                    <p>{item?.content}.</p>
                    <p>{item?.name}<span>{item?.publishedAt}</span></p>
                </div>                
            </div>
        </div>
    )
}

export default LeftComp