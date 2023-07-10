import { useRef, useState } from "react";
import style from "./BurgerNav.module.css";
import NavLinks from "../NavLinks/NavLinks";

export default function BurgerNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nodeRef = useRef(null);

  return (
    <>
      <button className={style.buttonOpen} onClick={() => setMenuOpen(true)}>
        <img src="./menu.svg" alt="Menu" width={32} height={32} />
      </button>
      <div
        ref={nodeRef}
        className={`${style.container} ${!menuOpen && style.closed}`}
      >
        <button
          className={style.buttonClose}
          onClick={() => setMenuOpen(false)}
        >
          <img src="./close.svg" alt="Menu" width={32} height={32} />
        </button>
        <NavLinks onSelect={() => setMenuOpen(false)}></NavLinks>
      </div>
    </>
  );
}
