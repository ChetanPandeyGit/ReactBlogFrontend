

function FooterArticle({item}) {
  return (
    <div className='footer-content'>
            <p className='footer-content-title'>{item?.title.slice(0,40)}...</p>
            <p>{item?.content}.</p>
            <p>{item?.name}<span>{item?.publishedAt}</span></p>
        </div>
  )
}

export default FooterArticle