import React from "react";
import { ContactBox1, ContactBox2, ContactBox3, ContactBox4 } from "./data";

function SectionC2() {
  return (
    <div className="SectionC2 container">
      <div className="row">
        <div className="SectionC2__box1" />
        <div className="SectionC2__boxMain">
          {ContactBox1.map(({ state, desc, number }, idx) => (
            <div key={idx} className="SectionC2__box">
              <div>
                <p>{state}</p>
                <div className={`SectionC2__box__flag${idx + 1} bg`} />
              </div>
              <p>{desc}</p>
              <h6>{number}</h6>
            </div>
          ))}
        </div>
        <div className="" />
      </div>

      <div className="row">
        <div className="" />
        <div className="SectionC2__boxMain2">
          {ContactBox2.map(({ state, desc, number }, idx) => (
            <div key={idx} className="SectionC2__box">
              <div>
                <p>{state}</p>
                <div className={`SectionC2__box__flag${idx + 4} bg`} />
              </div>
              <p>{desc}</p>
              <h6>{number}</h6>
            </div>
          ))}
        </div>
        <div className="SectionC2__box1" />
      </div>

      <div className="row">
        <div className="SectionC2__box1" />
        <div className="SectionC2__boxMain">
          {ContactBox3.map(({ state, desc, number }, idx) => (
            <div key={idx} className="SectionC2__box">
              <div>
                <p>{state}</p>
                <div className={`SectionC2__box__flag${idx + 7} bg`} />
              </div>
              <p>{desc}</p>
              <h6>{number}</h6>
            </div>
          ))}
        </div>
        <div className="" />
      </div>

      <div className="row">
        <div className="" />
        <div className="SectionC2__boxMain2">
          {ContactBox4.map(({ state, desc, number }, idx) => (
            <div key={idx} className="SectionC2__box">
              <div>
                <p>{state}</p>
                <div className={`SectionC2__box__flag${idx + 10} bg`} />
              </div>
              <p>{desc}</p>
              <h6>{number}</h6>
            </div>
          ))}
        </div>
        <div className="SectionC2__box1" />
      </div>
    </div>
  );
}

export default SectionC2;
