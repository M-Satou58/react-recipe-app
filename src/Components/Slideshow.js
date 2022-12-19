import React from 'react';
import SimpleImageSlider from "react-simple-image-slider"

const images = [
  {url: 'https://assets.bonappetit.com/photos/60419b8c970fc321b2086e48/5:4/w_1405,h_1124,c_limit/GO-Live-Pineapple-Pork-3.jpg'},
  {url: 'https://panlasangpinoy.com/wp-content/uploads/2018/11/Pork-Sinigang-Recipe-500x500.jpg'},
  {url: 'https://www.unileverfoodsolutions.com.ph/dam/global-ufs/mcos/SEA/calcmenu/recipes/PH-recipes/appetisers/sizzling-pork-sisig-manila/sizzling-pork-sisig-manila-main.jpg'},
  {url: 'http://images.summitmedia-digital.com/yummyph/images/2017/09/08/kare-kare.jpg'},
  {url: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/387B/production/_126795441_gettyimages-979935038-170667a.jpg'},
]

export const Slideshow = () => {
  return (
    <div classNam="slide-container">
      <SimpleImageSlider className="slide-container"
        width={500}
        height={300}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={2.0}
        />
    </div>
  )
}
