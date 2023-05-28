function BigBotImg({className,data,handleNavigation}) {
  return (
    <div id='big-bot-img' className={className}>
      {data.slice(14,15).map((item,index) => { 
          return (
            <img src={item?.urlToImage} alt='big-img' key={index} onClick={() => handleNavigation(item?.id, item)}/>)
        })}
    
</div>
  )
}

export default BigBotImg