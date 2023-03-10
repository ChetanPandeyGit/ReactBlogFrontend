import '../CSS/substyle.css'

function MoreContent(props) {
  return (
    <div className='inner-more-content'>
      <img src={props.image} alt="Images" className="img" />
      <p className='title'>{props.title}</p>
      <div className='more-content-data'>
        <img src={props.profilePic} alt="Profile" />

        <div className='more-content-data-column'>
          <p>{props.author}</p>
          <p>Aug 10 · 4 min read</p>
        </div>
      </div>
    </div>
  )
}

export default MoreContent