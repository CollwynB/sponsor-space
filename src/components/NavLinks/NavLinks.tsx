export default function NavLinks({ onSelect }: { onSelect?: Function }) {
  const handleLinkClick = (e: any) => {
    e.preventDefault();
    console.log(e);
    if (onSelect) onSelect();
    document
      .getElementById(e.target.innerHTML)
      ?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState({}, "", `#${e.target.innerHTML}`);
  };

  return (
    <>
      <a href={"#about"} onClick={(e) => handleLinkClick(e)}>
        about
      </a>
      <a href={"#clients"} onClick={(e) => handleLinkClick(e)}>
        clients
      </a>
      <a href={"#contact"} onClick={(e) => handleLinkClick(e)}>
        contact
      </a>
    </>
  );
}
