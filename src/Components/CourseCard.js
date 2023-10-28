import React from 'react'
import './card.css'
import Myimg from './sbad.png'
export default function CourseCard() {
  return (
  <div class="card">
    <img class="card-img" src={Myimg} alt="Strawberry Cake"/>
    <div class="card-content">
      <h3>Strawberry Cake</h3>
      <p> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <button class="card-btn">$13.90</button>
    </div>
</div>
  )
}
