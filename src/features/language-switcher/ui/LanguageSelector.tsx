"use client";

const ArrowIcon = () => (
  <svg
    className="h-2.5 w-1.5 rotate-90 stroke-textPrimary stroke-1.5"
    viewBox="0 0 10 10"
    role="img"
    aria-label="Arrow icon"
  >
    <path
      d="M5 2l3 3-3 3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LanguageSelector = () => {
  // Здесь должна быть логика из features/language-switcher/model для управления локалью
  const currentLang = "Рус";

  return (
    <div className="relative cursor-pointer select-none rounded-3xl bg-bgSecondary px-2 py-1 lg:block">
      <button
        type="button"
        className="flex w-full items-center gap-1"
        aria-label="Открыть меню выбора языка"
      >
        <span>{currentLang}</span>
        <span
          className="flex size-4 items-center justify-center"
          aria-hidden="true"
        >
          <ArrowIcon />
        </span>
      </button>
    </div>
  );
};
