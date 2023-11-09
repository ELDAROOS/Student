import React from 'react';

function App() {
  return (
    <div>
      <table border="1" align="center" rules="rows" style={{ width: '60%' }}>
        <tr>
          <td>
            <table
              border="1"
              background="images/168.png"
              bgcolor="#7FFFD4"
              cellPadding="10"
              style={{ width: '100%', borderRadius: '5px' }}
            >
              <tr>
                <th>
                  <h1>Название сайта (организации)</h1>
                  <h3>Описание сайта</h3>
                </th>
              </tr>
            </table>
            <table
              border="1"
              bgcolor="#e6e6fa"
              cellPadding="10"
              style={{ width: '100%', borderRadius: '5px' }}
            >
              <tr>
                <td rowSpan="2" style={{ width: '80%' }}>
                  <h2>Страница</h2>
                  <p style={{ textIndent: '20px' }}>
                    Здравствуйте уважаемые будущие веб-мастера!
                    Мне 55 лет и я рад приветствовать Вас на своём сайте.
                    Этот сайт первый, который я разработал самостоятельно,
                    а до этого умел только входить в интернет.
                  </p>
                  <p style={{ textIndent: '20px' }}>
                    Почему я решил его сделать? За те 3 месяца, пока разбирался в
                    сайтостроении и создавал этот ресурс обнаружилось, что авторы
                    руководств по созданию сайтов считают многие нюансы само
                    собой разумеющимися и не обращают на них внимание. А мне,
                    учитывая возраст и «опыт», было не просто понять как раз
                    эти нюансы, они отнимали больше всего времени.
                  </p>
                </td>
                <td bgcolor="#e6e6fa">
                  <h3>Меню</h3>
                  <p>
                    <a href="">
                      <img src="http://trueimages.ru/img/00/06/f4fffdb5.png" alt="Страница" />
                      <span style={{ marginLeft: '5px' }}>Страница</span>
                    </a>
                  </p>
                  <p>
                    <a href="">
                      <img src="http://trueimages.ru/img/31/ab/4dcb087c2ae4305edcd15171696.jpg" alt="Страница 1" />
                      <span style={{ marginLeft: '5px' }}>Страница 1</span>
                    </a>
                  </p>
                  <p>
                    <a href="">
                      <img src="http://trueimages.ru/img/31/ab/4dcb087c2ae4305edcd15171696.jpg" alt="Страница 2" />
                      <span style={{ marginLeft: '5px' }}>Страница 2</span>
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <td bgcolor="#e6e6fa" align="center">
                  <h3>Общая информация</h3>
                  <p>Текст общей информации или реклама</p>
                </td>
              </tr>
            </table>
            <table border="1" bgcolor="#7FFFD4" height="100" cellPadding="10" style={{ width: '100%', borderRadius: '5px' }}>
              <tr>
                <th>
                  <h3>Подвал</h3>
                </th>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
