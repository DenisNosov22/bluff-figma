import './App.css'

const navItems = [
  ['Главная', 'home'],
  ['О нас', 'о-нас'],
  ['Отделы', 'отделы'],
  ['Вакансии', 'вакансии'],
  ['Контакты', 'контакты'],
]

const benefits = [
  'Лучшие условия на рынке',
  'Работа в удаленном формате',
  'Неограниченные бюджеты',
  'Сильный технический отдел',
  'Развитая инфраструктура',
  'Креативный отдел',
  'Оперативная коммуникация',
  'Прозрачные условия',
]

const teams = [
  'Media buying team',
  'Tech',
  'Creative',
  'Farm',
  'HR',
  'Finance',
]

const chips = ['CPA', 'Traffic Arbitrage', 'Analytics', 'Media buy', 'Automation', 'HR']

const asset = (name: string) => `/figma-assets/${name}`

function App() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="BLUFF home">
          <img src={asset('frame68.svg')} alt="" />
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map(([item, href]) => (
            <a href={`#${href}`} key={href}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-bg city" />
        <div className="hero-bg fire" />
        <div className="green-blend" />
        <img className="hero-emblem" src={asset('logo-mark-large.svg')} alt="" />
        <img className="hero-logo" src={asset('hero-logo.svg')} alt="BLUFF" />
        <div className="hero-copy hero-copy-left">
          Заливаем терабайты целевого трафа каждый день
        </div>
        <div className="hero-copy hero-copy-right">
          Мы достигаем великих целей, несмотря ни на что!
        </div>
        <a className="glass-button" href="#о-нас">Подробнее</a>
      </section>

      <section className="about-section section-pad" id="о-нас">
        <div className="section-title">
          <span>Кто мы?</span>
        </div>
        <div className="about-copy">
          <p>
            Наша компания - топ медиабаинга в различных вертикалях и имеет богатый опыт в этой
            сфере. С момента основания в 2019 году, команда BLUFF corp увеличилась с 8 до 60
            человек.
          </p>
          <p>
            Мы поддерживаем доверительные отношения с крупнейшими игроками в индустрии. Мы
            постоянно развиваемся, учитывая пожелания клиентов, и быстро адаптируемся к изменениям
            на рынке.
          </p>
        </div>
        <div className="benefit-card">
          {benefits.map((benefit) => (
            <div className="benefit" key={benefit}>
              <span />
              {benefit}
            </div>
          ))}
          <img className="card-sticker" src={asset('logo-mark-small.svg')} alt="" />
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          WE ARE BLUFF&nbsp;&nbsp;&nbsp; WE ARE BLUFF&nbsp;&nbsp;&nbsp; impulse team&nbsp;&nbsp;&nbsp;
          WE ARE BLUFF&nbsp;&nbsp;&nbsp; WE ARE BLUFF&nbsp;&nbsp;&nbsp; impulse team&nbsp;&nbsp;&nbsp;
        </div>
        <div>
          WE ARE BLUFF&nbsp;&nbsp;&nbsp; impulse team&nbsp;&nbsp;&nbsp; WE ARE BLUFF&nbsp;&nbsp;&nbsp;
          impulse team&nbsp;&nbsp;&nbsp; WE ARE BLUFF&nbsp;&nbsp;&nbsp; impulse team&nbsp;&nbsp;&nbsp;
        </div>
      </div>

      <section className="chat-section section-pad">
        <div className="chat-phone">
          <div className="phone-rail">
            {chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
          <div className="messages">
            <b>#Уникальные_и_качественные_крео</b>
            <p className="incoming">Оуууу</p>
            <p className="outgoing">Держи крео</p>
            <p className="incoming">У меня мурашкиииии</p>
            <p className="outgoing">Как тебе идея?</p>
            <p className="incoming">Деняяяяя, кайф!</p>
          </div>
        </div>
        <div className="chat-text">
          <h2>
            <span>blUFF</span> это
          </h2>
          <p>
            место, где стратеги, креативщики и технические спецы совместно создают впечатляющие
            результаты, получая удовольствие от работы! Каждый день тут рождаются новые идеи и
            происходят настоящие прорывы в развитии рынка медиабаинга!
          </p>
        </div>
        <img className="skull-sticker" src={asset('hand-small.svg')} alt="" />
      </section>

      <section className="team-section section-pad">
        <h2>
          В основе нашего бизнеса <span>лежит команда!</span>
        </h2>
        <div className="team-grid">
          <div className="team-photo">
            <img src={asset('headphones.png')} alt="Команда BLUFF" />
            <div />
          </div>
          <div className="team-copy">
            <p>
              Сотрудники для нас не просто коллектив, который работает вместе, а фундамент, на
              котором строится вся наша деятельность. Мы уверены, что успех компании определяется
              квалификацией, опытом и мотивацией наших сотрудников.
            </p>
            <p>
              Поэтому мы не просто набираем персонал, мы формируем команду, где каждый член находит
              свое место и вносит свой вклад в общее дело. Мы поддерживаем стимулирование обмена
              идеями и опытом!
            </p>
            <p>
              Наша команда - наша гордость, и мы убеждены, что только совместными усилиями мы сможем
              достичь высоких результатов и обеспечить успешное развитие бизнеса.
            </p>
          </div>
        </div>
      </section>

      <section className="vacancies-section section-pad" id="вакансии">
        <div className="vacancy-bg" />
        <div className="vacancy-content">
          <h2>
            Мы в поиске новых талантов, <span>чтобы вместе достигать новых вершин:</span>
          </h2>
          <p>
            Не стесняйтесь отправить свое резюме - мы с радостью обсудим возможности сотрудничества!
          </p>
          <a className="job-link" href="https://t.me/Mami_HR_bot" target="_blank" rel="noreferrer">
            Media Buyer (Google, Facebook, TT)
            <img src={asset('arrow-small.png')} alt="" />
          </a>
          <div className="button-row">
            <a className="green-button" href="https://t.me/Mami_HR_bot" target="_blank" rel="noreferrer">
              Submit CV
            </a>
            <a className="text-link" href="#вакансии">
              See all <img src={asset('arrow-small.png')} alt="" />
            </a>
          </div>
          <p className="vacancy-note">
            Нет подходящей позиции? Отправляй свое резюме и желаемую должность нашему HR.
          </p>
          <img className="telegram-float" src={asset('telegram-logo.png')} alt="" />
        </div>
      </section>

      <section className="structure-section section-pad" id="отделы">
        <h2>
          Структура <span>BLUFF</span>
        </h2>
        <div className="structure-map">
          <img className="structure-core" src={asset('structure-center.svg')} alt="" />
          {teams.map((team, index) => (
            <button className={`team-pill team-pill-${index + 1}`} key={team} type="button">
              {team}
            </button>
          ))}
          <img className="sticker sticker-a" src={asset('sticker-1.svg')} alt="" />
          <img className="sticker sticker-b" src={asset('sticker-2.svg')} alt="" />
        </div>
      </section>

      <footer className="footer-section section-pad" id="контакты">
        <div className="footer-bg" />
        <h2>
          Наша <mark>24/7</mark>
          <br />
          команда
          <br />
          на связи
        </h2>
        <div className="footer-info">
          <img src={asset('frame68.svg')} alt="BLUFF" />
          <a href="mailto:bluff@example.com">bluff@example.com</a>
          <a href="https://t.me/Mami_HR_bot" target="_blank" rel="noreferrer">
            Написать HR
          </a>
          <div className="socials">
            <img src={asset('telegram.png')} alt="Telegram" />
            <img src={asset('linkedin.png')} alt="LinkedIn" />
            <img src={asset('instagram.png')} alt="Instagram" />
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
