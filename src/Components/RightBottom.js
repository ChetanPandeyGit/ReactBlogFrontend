import SubHeading from "../Components/SubHeading"
import RightComp from "../Components/RightComp"
// import image from '../Images/image.jpg'

function RightBottom({ data }) {
    return (
        <>
            <SubHeading className='subH' sub='Top Posts' />
            <div id='top-post-img'>
                {data.slice(12,13).map((item,index) => {
                    return (<div key={index} >
                        <img src={item.urlToImage} alt='tp-img' />
                <p className='content-title'>{item?.title.slice(0,40)}</p>
                <p>{item?.name}<span>&nbsp;{item?.publishedAt.slice(0,10)}</span></p></div>)
                })}
                
                <div id='right-news-content'>
                    {data.slice(9, 12).map((item,index) => {
                        return (
                            <RightComp item={item} key={ index} />)
                    })}
                </div>
            </div>
        </>
    )
}

export default RightBottom