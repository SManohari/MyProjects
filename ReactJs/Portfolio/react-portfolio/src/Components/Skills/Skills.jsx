import './Skills.css'

function Skills({skillInfo}){

  return (
    <div className="imgContainer" id="skill">
      <p>SKILLS</p>
        <div className="row" >
        { skillInfo.map((info,index)=>{
        return (
          <div className="division" key ={index}>
            <div className="skillInfo">
              <div className="circleWrapper">
                <img className="skillImg" src={info.skillImage} alt="HTML" />
              </div>
              <p>{info.skillName}</p>
            </div>
 
            <div className="rectangle">
              <ul className="list">
                {info.skillList.map((list,index)=>{
                  return <li key={index}>{list}</li>
                })}
              </ul>
            </div>
          </div> 
        )
      })}  
        </div>
    </div>

  )
}
export default Skills;