import './martin.css'

export default function Page() {
  return (
    <main className="x4v7-page">
      <header className="x4v7-header">
        <div className="x4v7-header-inner">
          <a href="#top" className="x4v7-logo">
            Martin Casino
          </a>
          <nav className="x4v7-nav" aria-label="Основная навигация">
            <a href="#official">Официальный сайт</a>
            <a href="#mirror">Зеркало</a>
            <a href="#play">Играть</a>
          </nav>
        </div>
      </header>

      <section className="x4v7-hero" id="top">
        <h1 className="x4v7-hero-title">Martin Casino</h1>
        <p className="x4v7-hero-sub">
          Официальный сайт и рабочее зеркало — играйте онлайн в слоты и рулетку с
          быстрыми выплатами.
        </p>
        <a href="#play" className="x4v7-cta">
          Играть сейчас
        </a>
      </section>

      <section className="x4v7-intro">
        <p className="x4v7-intro-text">
          Martin Casino — это современное онлайн-казино, где собраны лучшие слоты,
          рулетка и карточные игры. Мартин казино предлагает честные условия,
          быстрые выплаты и удобный вход с любого устройства. Ниже — всё, что нужно
          знать об официальном сайте, рабочем зеркале и игре онлайн.
        </p>
      </section>

      <section className="x4v7-section" id="official">
        <h2 className="x4v7-h2">Martin Casino официальный сайт</h2>
        <p className="x4v7-text">
          Martin Casino официальный сайт — это главная площадка бренда, где собраны
          все слоты, рулетка и карточные игры. На официальном сайте Martin Casino
          игроки проходят регистрацию, пополняют счёт и выводят выигрыши без лишних
          посредников. Martin Casino официальный портал работает круглосуточно и
          одинаково быстро открывается на телефоне, планшете и компьютере. Мартин
          казино официальный сайт защищает данные шифрованием, а выплаты проходят
          напрямую на карту или электронный кошелёк.
        </p>
      </section>

      <section className="x4v7-section" id="mirror">
        <h2 className="x4v7-h2">Martin Casino зеркало</h2>
        <p className="x4v7-text">
          Martin Casino зеркало помогает заходить в аккаунт, когда основной адрес
          временно недоступен. Мартин казино зеркало — это точная копия сайта с тем
          же балансом, историей ставок и бонусами. Мартин казино зеркало рабочее
          обновляется регулярно, поэтому игрок всегда остаётся на связи. Достаточно
          сохранить актуальную ссылку, чтобы продолжать игру без перерывов и не
          терять доступ к любимым слотам.
        </p>
      </section>

      <section className="x4v7-section" id="play">
        <h2 className="x4v7-h2">Martin Casino играть</h2>
        <p className="x4v7-text">
          Martin Casino играть можно сразу после регистрации — достаточно выбрать
          слот и нажать кнопку запуска. Мартин казино играть удобно и на телефоне, и
          на компьютере: интерфейс подстраивается под экран. Мартин казино онлайн
          открывает доступ к сотням игр в один клик, без скачивания программ.
          Новичкам доступны демо-режимы, а опытные игроки сразу переходят к ставкам
          на реальные деньги.
        </p>
        <img
          src="/images/casino-table.jpg"
          alt="Игровой стол Martin Casino с золотыми фишками и картами"
          className="x4v7-img"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
        />
      </section>

      <section className="x4v7-section" id="official-ru">
        <h2 className="x4v7-h2">Мартин казино официальный</h2>
        <p className="x4v7-text">
          Мартин казино официальный ресурс гарантирует честные выплаты и прозрачные
          условия для каждого игрока. Martin казино работает по лицензии и соблюдает
          правила ответственной игры. Мартин казино официальный сайт и его зеркала
          используют единую базу аккаунтов, поэтому вход, баланс и история ставок
          всегда синхронизированы. Регистрация занимает пару минут, а служба
          поддержки отвечает круглосуточно.
        </p>
      </section>

      <footer className="x4v7-footer">
        <div className="x4v7-tags">
          <a href="#official">#martin casino</a>
          <a href="#official">#martin casino официальный сайт</a>
          <a href="#official">#martin casino официальный</a>
          <a href="#mirror">#martin casino зеркало</a>
          <a href="#top">#мартин казино</a>
          <a href="#play">#martin casino играть</a>
          <a href="#official">#мартин казино официальный сайт</a>
          <a href="#official-ru">#мартин казино официальный</a>
          <a href="#top">#martin казино</a>
          <a href="#play">#мартин казино онлайн</a>
          <a href="#play">#мартин казино играть</a>
          <a href="#mirror">#мартин казино зеркало</a>
          <a href="#mirror">#мартин казино зеркало рабочее</a>
        </div>
        <p className="x4v7-disclaimer">
          18+ Играйте ответственно. Азартные игры могут вызывать зависимость.
        </p>
      </footer>
    </main>
  )
}
