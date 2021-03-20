import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const _TaskBody = (props) => {
  const { title } = props;

  return (
    <div className="tasks-body">
      <div className="tasks-main">
        <div className="tasks-main-state">
          <span>{title}</span>
          <div>
            <span>Выполнено</span>
            <span>
              <MdKeyboardArrowDown size="22px" />
            </span>
          </div>
        </div>
        <div className="tasks-main-upload">
          <div>
            <span>asfd</span>
            <span>asfd</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default _TaskBody;
