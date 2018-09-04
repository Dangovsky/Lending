import React from "react";
import ReactDOM from "react-dom";
import M from "materialize-css";

import "./styles.css";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <nav className="cyan darken-4">
          <div className="nav-wrapper ">
            <a href="#" className="brand-logo">
              <h5>Проффесиональная ориентация и помощь</h5>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="#">Консультация</a>
              </li>
              <li>
                <a href="#">Блог</a>
              </li>
              <li>
                <a href="#">О проекте</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

class App extends React.Component {
  color = {};

  render() {
    return (
      <div>
        <Navigation />

        <div className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br />
              <br />
              <h1 className="header center cyan-text text-darken-4">Привет!</h1>
              <div className="row center" />
              <div className="row center">
                <h5 className="header col s12 light">Пам-па-пам</h5>
              </div>
              <br />
              <br />
            </div>
          </div>
          <div className="parallax">
            <img src="https://pp.userapi.com/c847121/v847121781/8b5c1/T4OHxpu5aC0.jpg" />
          </div>
        </div>

        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 m6 center">
                <img
                  class="circle"
                  src="https://pp.userapi.com/c834402/v834402244/e9e27/ZSBGzGiOxgg.jpg?ava=1"
                />
                <h3>
                  <i className="mdi-content-send brown-text" />
                </h3>
                <h4>Дмитрий Теньков</h4>
              </div>
              <div className="col s12 m4 offset-m1 center">
                <br />
                <p className="left-align light">
                  Для того, чтобы помочь вам в построении карьеры мне
                  потребуется узнать вас получше. Мы можем сделать это как в
                  ходе личного общения, так и с помощью предварительного
                  тестирования. Очевидно, что лучше всего мы разберёмся в ваших
                  целях, если совместим оба подхода. Однако этот путь не
                  единственный. Я готов предоставить вам рекомендации заочно. Я
                  направлю их после анализа результатов теста и вашего
                  сопроводительного письма.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="parallax-container ">
          <div className="section no-pad-bot">
            <div className="container">
              <br />
              <br />
              <h1 className="header center cyan-text text-darken-4">
                Что мы предлагаем?
              </h1>
              <div className="row center">
                <div className="col s12 m4 hide-on-small-only">
                  <div className="icon-block">
                    <h2 className="center">
                      <i className="material-icons">chat_bubble_outline</i>
                    </h2>
                    <h5 className="center">Кратко расскажите о себе!</h5>
                  </div>
                </div>
                <div className="col s12 m4 hide-on-small-only">
                  <div className="icon-block">
                    <h2 className="center">
                      <i className="material-icons">dvr</i>
                    </h2>
                    <h5 className="center">Пройдите тест!</h5>
                  </div>
                </div>
                <div className="col s12 m4 hide-on-small-only">
                  <div className="icon-block">
                    <h2 className="center">
                      <i className="material-icons">face</i>
                    </h2>
                    <h5 className="center">
                      Получите консультацию в видео-чате!
                    </h5>
                  </div>
                </div>
              </div>
              <br />
              <br />
            </div>
          </div>
          <div className="parallax">
            <img src="https://pp.userapi.com/c845323/v845323160/6a55a/T--IooqlTE0.jpg" />
          </div>
        </div>

        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 m6 xl5 offset-xl1">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img
                      className="activator"
                      src="https://pp.userapi.com/c845018/v845018449/dc222/G4CpQuzgrJ0.jpg"
                    />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      Заочная консультация<i className="material-icons right">
                        more_vert
                      </i>
                    </span>
                    <p>
                      <a href="#">Заказать!</a>
                    </p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                      Заочная консультация<i className="material-icons right">
                        close
                      </i>
                    </span>
                    <p>
                      Вы немного рассказываете о себе в нашей стандартной форме,
                      после чего, отправляетесь в личный кабинет на сайте нашего
                      партнёра. Это профессиональный тестовый инструмент,
                      который сегодня активно применяется для оценки персонала.
                      На основе полученных данных, мы напишем вам два письма.
                      Первое письмо будет содержать более общую информацию о
                      вас. Второе - рекомендации по трудоустройству и аргументы
                      в пользу того, или иного варианта построения карьеры.
                      <br />Стоимость: 1000 рублей<br /> Срок составления
                      отчёта: 48 часов
                    </p>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 xl5 offset-xl1">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img
                      className="activator"
                      src="https://pp.userapi.com/c848528/v848528543/50e85/oWj1ZI1fy2s.jpg"
                    />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      Личная консультация<i className="material-icons right">
                        more_vert
                      </i>
                    </span>
                    <p>
                      <a href="#">Заказать!</a>
                    </p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                      Личная консультация<i className="material-icons right">
                        close
                      </i>
                    </span>
                    <p>
                      Вы получаете краткий очерк о ваших личностных особенностях
                      и оплачиваете консультацию. После - мы проводим часовую
                      сессию: обсуждаем возможные пути развития карьеры, и
                      составляем план дальнейших действий на основе ваших
                      индивидуальных особенностей и актуальной ситуации на
                      рынке.<br />
                      Стоимость: 1700 рублей<br /> Срок проведения консультации:
                      не позднее трёх дней после заполнения теста.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer class="page-footer cyan darken-4">
          <div class="container">
            <div class="row">
              <div class="col s12 m6">па-па-па</div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">Made by Ten</div>
          </div>
        </footer>
      </div>
    );
  }

  componentDidMount() {
    M.AutoInit();
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".dropdown-trigger");
  var instances = M.Dropdown.init(elems);
  M.AutoInit();
});
