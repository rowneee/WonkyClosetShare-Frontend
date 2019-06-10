
import React from 'react'

const Slide = ({ item }) => {
  console.log("item", item);
  const styles = {
    backgroundImage: `url(${item.img_url})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return <div className="slide" style={styles}></div>
}

export default Slide
