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
            <div className="valign-wrapper">
              <a href="#" className="brand-logo">
                <h5 className="flow-text hide-on-med-and-down">
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;Проффесиональная&nbsp;ориентация<br />&nbsp;&nbsp;&nbsp;и&nbsp;помощь
                </h5>
                <h5 className="flow-text hide-on-large-only">
                  <br />
                  <br />
                  Проффесиональная&nbsp;ориентация<br />и&nbsp;помощь
                </h5>
              </a>
            </div>
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

class Form extends React.Component {
  state = {
    email: true,
    phone: false
  };
  data = {};

  handleSubmit = event => {
    event.preventDefault();
  };

  handleConnectSelect = event => {
    this.setState({
      email: false,
      phone: false
    });

    const selected = [...event.target.options]
      .filter(o => o.selected)
      .map(o => o.value);
    this.data.selectOpt = selected;

    for (var i = 0; i < selected.length; i++) {
      selected[i] === "email"
        ? this.setState({ email: true })
        : this.setState({ phone: true });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="input-field col s12 m8">
            <select ref={node => (this.typeSelectNode = node)}>
              <option value="" disabled selected>
                Выберите один вариант
              </option>
              <option value="1">Личная</option>
              <option value="2">Заочная</option>
              <option value="3">Помоги с выбором</option>
              //todo
            </select>
            <label>Консультация</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 m4">
            <input
              id="name"
              type="text"
              className="validate"
              ref={node => (this.nameNode = node)}
            />
            <label htmlFor="name">Имя</label>
          </div>
          <div className="input-field col s12 m4">
            <input
              id="age"
              type="text"
              className="validate"
              ref={node => (this.ageNode = node)}
            />
            <label htmlFor="age">Возраст</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 m8">
            <select
              multiple
              ref={node => (this.connectNode = node)}
              onChange={this.handleConnectSelect}
            >
              <option value="email">Почта</option>
              <option value="telegram">Telegram</option>
              <option value="whatsapp">Whatsapp</option>
            </select>
            <label>Где с вами можно связаться?</label>
          </div>
        </div>
        {this.state.email ? (
          <div className="row">
            <div className="input-field col s12 m8">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
        ) : null}
        {this.state.phone ? (
          <div className="row">
            <div className="input-field col s12 m8">
              <input id="phone" type="text" className="validate" />
              <label htmlFor="phone">Телефон</label>
            </div>
          </div>
        ) : null}
        <div className="raw">
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </div>
      </form>
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
              <h1 className="header cyan-text text-darken-4 center">Привет</h1>
              <div className="row center" />
              <br />
              <br />
            </div>
          </div>
          <div className="parallax">
            <img src="https://pp.userapi.com/c847019/v847019454/324e/krXYRNvkx8Y.jpg" />
          </div>
        </div>

        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 m6 left-align light">
                Меня зовут Дмитрий Теньков. Более десяти лет я нанимаю и обучаю
                персонал. У меня есть опыт сотрудничества с крупными
                федеральными работодателями и простыми предпринимателями из
                регионов. Поэтому я уверен, что хорошо знаком с реальным
                положением дел на рынке труда. Я сделал этот сайт, чтобы помочь
                вам в построении своей уникальной карьеры.
              </div>
            </div>
            <div className="row">
              <div className="col s12 m6 center">
                <img
                  className="circle"
                  src="https://pp.userapi.com/c845324/v845324511/e115c/JxaK2vhpgVM.jpg"
                />
              </div>
              <div className="col s12 m6 center">
                <h4>Дмитрий Теньков</h4>
                <p className="left-align light">
                  Для того, чтобы мои рекомендации были максимально полезными,
                  нам потребуется узнать друг друга получше. Для этого я
                  предложу тебе пройти профессиональный тест и написать о себе
                  небольшое письмо. После этого мы проведём консультацию
                  посредством видеозвонка в одном из ваших любимых мессенджеров.
                  Однако этот путь не единственный. Я готов предоставить вам
                  свои рекомендации заочно. Вы получите их после анализа
                  результатов теста и вашего сопроводительного письма.
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
                Как получить консультацию?
              </h1>
              <div className="row center hide-on-med-and-up">
                <h5 className="header col s12 light">
                  Кратко расскажите о себе!
                </h5>
                <h5 className="header col s12 light">Пройдите тест!</h5>
                <h5 className="header col s12 light">
                  Получите консультацию в видео-чате!
                </h5>
              </div>
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
            <img src="https://pp.userapi.com/c840128/v840128823/7b039/39SEeI6blJA.jpg" />
          </div>
        </div>

        <div className="container">
          <div className="section">
            <div className="row">
              <div className="center cyan-text text-darken-4">
                <h3>Сколько это стоит?</h3>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m6 xl5 offset-xl1">
                <div className="card hoverable">
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
                <div className="card hoverable">
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
                      Вы описываете свою ситуацию и проходите тестирование. Всё
                      как в заочном варианте. После тестирования вы получаете
                      краткий очерк о ваших личностных особенностях и
                      оплачиваете консультацию. После - мы проводим часовую
                      сессию: обсуждаем возможные пути развития карьеры, и
                      составляем план дальнейших действий. Разумеется, все
                      рекомендации предлагаются на основе ваших индивидуальных
                      особенностей и актуальной ситуации на рынке труда. рынке.<br />
                      Стоимость: 1700 рублей<br /> Срок проведения консультации:
                      не позднее трёх дней после заполнения теста.
                    </p>
                  </div>
                </div>
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
                Давайте начинать!
              </h1>
              <div className="row center">
                <h5 className="header col s12 light">
                  Расскажите как нам связаться с вами
                </h5>
              </div>
            </div>
          </div>
          <div className="parallax">
            <img src="https://pp.userapi.com/c845323/v845323160/6a55a/T--IooqlTE0.jpg" />
          </div>
        </div>
        <div className="container">
          <div className="section">
            <Form />
          </div>
        </div>

        <footer className="page-footer cyan darken-4">
          <div className="container">
            <div className="row">
              <div className="col s12 m6">па-па-па</div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">Made by Ten</div>
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
