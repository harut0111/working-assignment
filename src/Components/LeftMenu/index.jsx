import React from "react";
import {
  FaRegChartBar,
  FaToolbox,
  FaTruckMoving,
  FaUser,
} from "react-icons/fa";
import { AiTwotoneSetting, AiTwotoneHome, AiTwotoneTool } from "react-icons/ai";
import { GoChecklist, GoBug, GoFileDirectory } from "react-icons/go";
import { FiPhoneCall, FiSettings } from "react-icons/fi";
import { MdEqualizer } from "react-icons/md";
import { IoMdSpeedometer } from "react-icons/io";
import { TiDocumentText, TiContacts } from "react-icons/ti";

const LeftMenu = () => {
  return (
    <div className="leftMenu">
      <div className="leftMenu-content">
        <div className="leftMenu-header">
          <div style={{ margin: "0 5px" }}>
            <AiTwotoneSetting size="30px" color="orange" />
          </div>
          <div>
            Цифровая платформа <span style={{ color: "orange" }}>i4.0</span>{" "}
          </div>
        </div>
        <div className="leftMenu-content-main">
          <nav>
            <ul>
              <li>
                <span className="menuIcon">
                  <GoChecklist size="30px" />
                </span>
                <span>Рабочие задания</span>
              </li>
              <li>
                <span className="menuIcon">
                  <GoBug size="28px" />
                </span>
                <span>Журнал дефектов</span>
              </li>
              <li>
                <span className="menuIcon">
                  <FiPhoneCall size="22px" />
                </span>
                <span>Запросы на работы</span>
              </li>
              <li>
                <span className="menuIcon">
                  <FaRegChartBar size="25px" />
                </span>
                <span>Отчеты и показатели</span>
              </li>
            </ul>
            <ul>
              <li>
                <span className="menuIcon">
                  <AiTwotoneHome size="25px" />
                </span>
                <span>Объекты</span>
              </li>
              <li>
                <span className="menuIcon">
                  <MdEqualizer size="27px" />
                </span>
                <span>Оборудование</span>
              </li>
              <li>
                <span className="menuIcon">
                  <FaToolbox size="22px" />
                </span>
                <span>Запчасти и МТР</span>
              </li>
              <li>
                <span className="menuIcon">
                  <IoMdSpeedometer size="27px" />
                </span>
                <span>Счетчики</span>
              </li>
              <li>
                <span className="menuIcon">
                  <FaTruckMoving size="27px" />
                </span>
                <span>Заявка на Закупки</span>
              </li>
            </ul>
            <ul>
              <li>
                <span className="menuIcon">
                  <FaUser size="25px" />
                </span>
                <span>Бригады</span>
              </li>
              <li>
                <span className="menuIcon">
                  <AiTwotoneTool size="25px" />
                </span>
                <span>Контрагенты</span>
              </li>
            </ul>
            <ul>
              <li>
                <span className="menuIcon">
                  <TiDocumentText size="25px" />
                </span>
                <span>Документы</span>
              </li>
              <li>
                <span className="menuIcon">
                  <GoFileDirectory size="25px" />
                </span>
                <span>Справочники</span>
              </li>
            </ul>
          </nav>

          <div className="leftMenu-footer">
            <div>
              <div>
                <FiSettings size="30px" />
              </div>
              <span>Настройки</span>
            </div>
            <div>
              <div>
                <TiContacts size="30px" />
              </div>
              <span>Контакты</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
