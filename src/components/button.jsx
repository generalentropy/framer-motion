import style from "./button.module.css";

function button({ setIsOpen, isOpen }) {
  function handleOpenMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div onClick={handleOpenMenu} className={style.menu}>
      {!isOpen ? "✖" : "☰"}
    </div>
  );
}

export default button;
