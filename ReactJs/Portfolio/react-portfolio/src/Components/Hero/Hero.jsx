import './Hero.css'
import heroImage from '../../../asset/Hero/heroImage.png'

function Hero(){
  return (
    <section className ="heroContainer" id ="about">
      <div className ="aboutContainer">
        <h1>Hi, I'm Manohari</h1>
        <p>I'm a frontend developer focused on building clean, responsive, and user-friendly web interfaces. I work with technologies like HTML, CSS, JavaScript and React to create seamless digital experiences. With a strong eye for design and a passion for problem-solving, I aim to build websites that look great and perform well on all devices.</p>
        <a href="/Manohari_S_Resume.pdf" download><button className="contactButton">Resume</button></a>
      </div>

       <div>
        <img src= {heroImage} />
       </div>
    </section>
  ) 
}

export default Hero;