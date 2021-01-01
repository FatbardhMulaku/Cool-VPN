import React from "react";
import { Route } from "react-router-dom";
import TextInfo from "../Shared/Text/TextInfoNew";
import PostInfo from "./PostInfo";
import Zoom from "react-reveal/Zoom";

function SectionB2() {
  return (
    <Zoom>
      <Route
        render={({ history }) => (
          <div
            className="SectionB2 container"
            onClick={() => {
              history.push("/blog-in-depth");
            }}
          >
            <div className="SectionB2__img bg my-auto" />
            <div className="SectionB2__txt">
              <TextInfo
                txt="Blog.section_2"
                textAlign="left"
                color="#2D2E2D"
                margin="0px"
                klasa="SectionB2__info"
                DfTitle="VPN for dummies: a guide for beginners"
                DfDesc="Aug 07, 2020 · 3 min read "
              />

              <PostInfo margin="70px 0 0 0" />
            </div>
          </div>
        )}
      />
    </Zoom>
  );
}

export default SectionB2;
