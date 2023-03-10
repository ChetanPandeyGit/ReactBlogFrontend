function HeroSection({data}) {
    return (
        <div id='hero-section'>
            {data.slice(0, 1).map((item, index) => {
                return (
                    <div id='big-image' key={index}><img src={item?.urlToImage} alt='hero-image1' /></div>)
            })}
            <div id='inner-hero'>
            {data.slice(1,3).map((item, index) => {
                return (
                    <div className='small-img' key={index}><img src={item?.urlToImage} alt='hero-image2' /></div>)
            })}
            </div>
        </div>
    )
}

export default HeroSection