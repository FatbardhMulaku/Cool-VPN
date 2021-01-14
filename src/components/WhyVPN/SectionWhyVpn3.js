import React from "react";
import Zoom from "react-reveal/Zoom";
import LayoutGrid from "../Shared/LayoutGrid";
import { Cards } from "./data";

function SectionWhyVpn3() {
  return (
    <LayoutGrid row="SectionWhyVpn3 justify-content-center">
      {Cards.map(({ title }, idx) => (
        <Zoom>
          <div className="SectionWhyVpn3__box" key={idx}>
            <div className={`SectionWhyVpn3__box__img${idx + 1} bg`} />
            <h6>{title}</h6>
          </div>
        </Zoom>
      ))}
    </LayoutGrid>
  );
}

export default SectionWhyVpn3;
