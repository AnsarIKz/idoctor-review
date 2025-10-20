"use client";

const MenuOpenIcon = () => (
  <svg
    className="size-8 stroke-textPrimary"
    viewBox="0 0 24 24"
    role="img"
    aria-label="Menu open icon"
  >
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

export const MobileMenuButton = () => {
  const handleClick = () => {
    alert("Заглушка: Открываем Mobile Menu!");
    // Здесь должна быть логика открытия/закрытия Sidebar (из widgets/mobile-menu/model)
  };

  return (
    <button
      type="button"
      className="inline-flex items-center justify-center lg:hidden p-0"
      aria-label="Открыть меню навигации"
      onClick={handleClick}
    >
      <MenuOpenIcon />
    </button>
  );
};
