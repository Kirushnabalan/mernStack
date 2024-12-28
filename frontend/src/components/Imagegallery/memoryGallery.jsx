import React from 'react'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'
import imageGallery from './imageGallery'
const MemoryGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}}>
        <Masonry gutter='1rem'>
            {
                imageGallery.map((item,index)=>(
                    <img className="mansor__image" src={item} key={index} alt="" 
                    style={{width:"100%", display: "block", borderRadius:'10px'}}/>
                ))
            }
        </Masonry>
    </ResponsiveMasonry>
  )
}

export default MemoryGallery
