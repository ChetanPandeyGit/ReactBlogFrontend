

function FooterArticle({item,handleNavigation}) {
  return (
    <div className='footer-content'>
            <p className='footer-content-title' onClick={() => handleNavigation(item?.id, item)}>{item?.title.slice(0,40)}...</p>
            <p>{item?.content}.</p>
            <p>{item?.name}<span>{item?.publishedAt}</span></p>
        </div>
  )
}

export default FooterArticle