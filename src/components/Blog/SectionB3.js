import React from "react";
import { Route } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import PostInfo from "./PostInfo";
import Zoom from "react-reveal/Zoom";
import { List } from "./data";

function SectionB3() {
  return (
    <Route
      render={({ history }) => (
        <div className="SectionB3 container">
          <h5>
            <FormattedMessage
              id="Blog.section_3.title"
              defaultMessage="Popular articles"
            />
          </h5>
          <Zoom cascade>
            <div className="row justify-content-center">
              {List.map(({ title, desc }, idx) => (
                <div
                  key={idx}
                  className="SectionB3__box"
                  onClick={() => {
                    history.push("/blog-in-depth");
                  }}
                >
                  <div className={`SectionB3__icon${idx + 1} bg mx-auto`} />
                  <h6>{title}</h6>
                  <p>{desc}</p>
                  <PostInfo margin="30px 0 0 0" />
                </div>
              ))}
            </div>
          </Zoom>
        </div>
      )}
    />
  );
}

export default SectionB3;
