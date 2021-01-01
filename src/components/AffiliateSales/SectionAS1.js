import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import { TxtList } from "./data";

function SectionAS1() {
  return (
    <LayoutGrid section="SectionAS1">
      <div className="col-md-12 col-lg-5">
        {TxtList.map(({ title }, idx) => (
          <p key={idx}>{title}</p>
        ))}
      </div>
    </LayoutGrid>
  );
}

export default SectionAS1;
