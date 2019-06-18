import React from 'react'

const Slide = ({ item }) => {
  const styles = {
    backgroundImage: `url(${item.img_url})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    slideWidth: '20px'
  }
  return (
    <div className="slide" styles = {{
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%',
      slideWidth: '20px'
    }}>
      <div class="card" >
        <img src={item.img_url} alt="item-image" className="card-image"/>
        <div class="container">
        </div>
      </div>
    </div>
  )
}

export default Slide
