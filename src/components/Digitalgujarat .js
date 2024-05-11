import React from 'react'
import Imageheading from "./loans/Imageheading";
import Insurancesection from './Insurance/Insurancesection';

export default function Digitalgujarat(props) {

  const data = props.banner;

  const content = props.content;

  return (
    <div className='insurance-page'>
      <Imageheading banner={data} />
      <Insurancesection content={content} />
    </div>
  )
}