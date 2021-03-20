import React from "react";
import { FiLink } from "react-icons/fi";
import { AiFillRightSquare } from "react-icons/ai";
import { MdAlarm } from "react-icons/md";
import { IoIosBookmark, IoMdClose } from "react-icons/io";
import { GoPencil } from "react-icons/go";
import { TiArrowUnsorted } from "react-icons/ti";
import DropDown from "../../Core/DropDown";
import { useStateValue } from "../../Context";
import { TOGGLE_DRAWER_DISPLAY } from "../../Context/reducer";

const EditWork = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ displayDrawer }, dispatchDisplayDrawer] = useStateValue();

  return (
    <div className="editWork">
      {/* part 1 */}
      <div className="editWork-header">
        <div className="editWork-header-text">
          <span>Рабочие задание</span>
        </div>
        <div className="editWork-header-icons">
          <FiLink />
          <IoIosBookmark />
          <GoPencil />
          <TiArrowUnsorted />
          <IoMdClose
            onClick={() =>
              dispatchDisplayDrawer({
                type: TOGGLE_DRAWER_DISPLAY,
                payload: false,
              })
            }
          />
        </div>
      </div>

      {/* part 2 */}
      <div className="editWork-image">
        {/* eslint-disable-next-line */}
        <img src="./Picture1.png" alt="Picture" />
      </div>

      {/* part 3 */}
      <div className="editWork-info">
        <span>Приоритет</span>
        <span>Высший</span>
        <span>Обновлено 05.10.2019 11:55</span>
      </div>

      {/* part 4 */}
      <div className="editWork-title">
        <h2>Течь трубы в задани - устранить</h2>
      </div>

      {/* part 5 */}
      <div className="editWork-state">
        <DropDown />
        <div>
          <span>
            <MdAlarm />
          </span>
          <span>Время 1ч 35м</span>
        </div>
      </div>

      {/* part 6 */}
      <div className="editWork-mainInfo">
        <div>
          <span>Категория </span> <span>Повреждение</span>
        </div>
        <div>
          <span>Оборудование </span> <span>Кран</span>
        </div>
        <div>
          <span>Бригада</span> <span>Бригада номер 1</span>
        </div>
        <div>
          <span>Исполнитель</span> <span>Иванов И.И.</span>
        </div>
        <div>
          <span>Дата Создания</span> <span>04.10.2019</span>
        </div>
        <div>
          <span>Стоимость</span> <span>1500</span>
        </div>
        <div>
          <span>Завершено </span> <span>04.10.2019 11:00</span>
        </div>
      </div>

      {/* part 7 */}
      <div className="editWork-nextBtn">
        <AiFillRightSquare size="27px" />
      </div>
    </div>
  );
};

export default EditWork;
