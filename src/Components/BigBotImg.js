function BigBotImg({className,data}) {
  return (
    <div id='big-bot-img' className={className}>
      {data.slice(14,15).map((item,index) => { 
          return (
            <img src={item?.urlToImage} alt='big-img' key={index} />)
        })}
    
</div>
  )
}

export default BigBotImg