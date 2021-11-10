import React from "react";
import s from "./Details.module.css";

const Details = (props) => {
  var today = new Date();
  var date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  return (
    <div className={s.details}>
      <div className={s.account}>
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <div className={s.userInfo}>
              <a href="#" className={s.username}>
                j_xis
              </a>
              <a href="#" className={s.signout}>
                выйти
              </a>
            </div>
            <div className={s.infoMail}>helloworld@gmail.com</div>
          </div>
        </div>
      </div>
      <div className={s.info}>
        <div className={s.date}>{date}</div>
        <div className={s.goals}>
          <div className={s.goalsTitle}>Задачи на сегодня</div>
          <div className={s.goalsChecked}>
            Выполнено : <b> 10</b>
          </div>
          <div className={s.goalsLeft}>
            Осталось : <b> 5</b>
          </div>
          <div className={s.ticketsLeft}>
            Не закрытых тикетов : <b> 5 </b> шт.
          </div>
        </div>
      </div>
      <div className={s.notes}>
        <textarea placeholder="Здесь вы можете писать свои заметки..."></textarea>
      </div>
    </div>
  );
};

export default Details;
