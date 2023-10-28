import React from 'react'
import { Button } from "./Button";
import "./style.css";

export default function CardExample2() {
  return (
    <div className="card">
    <div className="card-body">
      <div className="text-wrapper">Strawberry Cake</div>
      <div className="icons">
        <div className="food-icons-organic">
          <img className="img" alt="Leaf" src="E:\BE_SEM-1\React_Tut\firstreactwebsite\src\leaf.svg" />
        </div>
        <div className="food-icons-hot-icon">
          <img className="img" alt="Fire" src="E:\BE_SEM-1\React_Tut\firstreactwebsite\src\fire.svg" />
        </div>
      </div>
    </div>
    <div className="unsplash" />
    <div className="three-layer-wrapper">
      <p className="three-layer">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>
    </div>
    <div className="card-footer">
      <div className="frame">
        <div className="price">$13.90</div>
        <div className="discount">$18.90</div>
      </div>
      <Button className="button-instance" color="default" sizes="md" text="ORDER NOW" type="outline" />
    </div>
  </div>
  )
}
