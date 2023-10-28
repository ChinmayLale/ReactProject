import React from "react";
import "./naveg2.css";

export default function naveg2() {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap">
          <div className="ellipse" />
          <img className="mask-group" alt="Mask group" src="mask-group.png" />
          <div className="nav-bar">
            <div className="edu-hub">
              <img className="book-open" alt="Book open" src="book-open.svg" />
              <div className="text-wrapper">EduHub</div>
            </div>
            <div className="navbar">
              <div className="text-wrapper-2">Home</div>
              <div className="text-wrapper-2">About US</div>
              <div className="text-wrapper-2">Courses</div>
              <div className="text-wrapper-2">Contact US</div>
            </div>
            <div className="my-profile">
              <div className="text-wrapper-2">MyProfile</div>
              <img className="lock" alt="Lock" src="lock.svg" />
            </div>
          </div>
          <img className="swift-blog-apple" alt="Swift blog apple" src="swift-blog-apple-developer.png" />
          <div className="frame">
            <div className="text-wrapper-3">Enlighten</div>
            <div className="text-wrapper-4">Your future starts here.</div>
            <p className="swift-is-a-modern">
              Swift is a modern, safe, and expressive <br />
              programming language for building apps <br />
              for Apple platforms and servers.
            </p>
          </div>
        </div>
        <button className="button">
          <div className="overlap-group">
            <div className="text-wrapper-5">Do it!</div>
          </div>
        </button>
      </div>
    </div>
  );
};
