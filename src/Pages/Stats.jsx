import React from 'react';
import '../Styles/Stats.scss';
import javahacker from '../assets/javahacker.png';
import sqlhacker from '../assets/sqlhacker.png';
import javaStar from '../assets/starhacker.png';
import sqlStar from '../assets/sqlstar.png';
import codeExp from '../assets/codingExperience.jpg';
export default function Stats() {
  return (
    <div id='workStats'>
      <div id="title">
        <h2 className="heading">Work Stats</h2>
        <div className="ul1"></div>
        <div className="ul2"></div>
      </div>
        <h2>Achievements</h2>
      <div id='achievements'>
        <div className="hackerRank">
            <h2>HackerRank</h2>
            <div className="badges">
                    <img src={javaStar} />
                    <img src={sqlStar} />
            </div>
            <div className="badges">  
                <a target='blank' href="https://www.hackerrank.com/certificates/ffec6ca4f857">
                    <img src={javahacker} />
                </a>
                <a target="blank" href="https://www.hackerrank.com/certificates/945e55688256">
                    <img src={sqlhacker} />
                </a>    
            </div>
        </div>
        <div>
            <img style={{width:"100%",height:"100%",boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}} src={codeExp} />
        </div>

      </div>
    </div>
  )
}
