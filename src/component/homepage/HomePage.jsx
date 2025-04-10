import React, { useState } from "react";
import "./HomePage.css";
import logo from "../../assets/katha.png";
import image from "../../assets/image.png";
import { db } from "../../services/firebase";
import { collection, addDoc } from "firebase/firestore";

function HomePage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        await addDoc(collection(db, "emails"), { email });
        setSent(true);
        setEmail(""); // Clear the input
      } catch (error) {
        console.error("Error saving email: ", error);
      }
    }
  };

  return (
    <>
      <div className="home-layout">
        <div className="logo">
          <img className="logo" src={logo}></img>
        </div>
        <div className="logo-sub-text">
          discover your next favourite webtoon 🥳
        </div>
        <div
          className="email-input-block"
          style={{ display: sent ? "none" : "block" }}
        >
          <div>
            <form className="email-input-box" onSubmit={handleSubmit}>
              <input
                className="email-input-field"
                type="email"
                placeholder="Enter your Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="submit-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div
          className="email-input-block"
          style={{ display: sent ? "block" : "none" }}
        >
          <div className="email-input-box sent-text" style={{justifyContent: 'center'}}>Thank you. Your interest has been received ♥️</div>
        </div>
        <div className="no-spam">
          We promise: NO SPAM! 🌟 Your email tells us{" "}
          <span style={{ color: "#A3D749" }}>you're as excited as we are </span>
          to shake up the world of webtoons and digital comics. 🚀 {`Let’s`}{" "}
          make something epic together!
        </div>
        <div className="info">
          Creators get 60% of Ad Revenue | Readers earn free episodes | Plant trees in
          real life for free | English, Hindi, Tamil, Telugu, Bengali,
          Korean, Japanese | Immersive Audio Narrations | Creator Tools and Mentorships
        </div>
      </div>
      <div className="cover-image">
        <img className="back-img" src={image} alt="" />
      </div>
    </>
  );
}

export default HomePage;
