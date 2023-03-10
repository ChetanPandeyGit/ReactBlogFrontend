import '../CSS/page.css'
const RelatedContent = (props) =>{
    return(
        <div className="related-content">
            {/* <p className="related-content-heading">More From The Siren</p> */}
            <div className="related-content-images">
                <img src={props.image} alt="Images" className="img"/>
            </div>
            <p className='title'>{props.title}</p>
            <div className='related-content-data'>
                <img src={props.profilePic} alt="Profile"/>

                <div className='related-content-data-column'>
                    <p>{props.author}</p>
                    <p>Aug 10 · 4 min read</p>

                </div>
            </div>
        </div>
    )
}

export default RelatedContent