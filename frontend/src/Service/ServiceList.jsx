import React from 'react'

import weatherImg from '../assets/images/weather.png'
import guidImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
const servicesData = [
    {
       imgUrl:weatherImg,
       title:"Calculate weather",
       desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque perferendis recusandae aut" 
    },
    {
        imgUrl:guidImg,
        title:"Best Tour Guide",
        desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque perferendis recusandae aut" 
     },
     {
        imgUrl:customizationImg,
        title:"Customization",
        desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque perferendis recusandae aut "
     }
]

const ServiceList = () => {
  return <>
      {
        servicesData.map((item,index)=> <Col lg='3' key={index}>
            <ServiceCard item={item} />
        </Col>)
      }
  
  </>
}

export default ServiceList
