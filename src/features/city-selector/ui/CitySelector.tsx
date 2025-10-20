"use client";

interface CitySelectorProps {
  currentCity: string;
}

// Заглушка для иконки Location
const LocationIcon = () => (
  <svg
    className="size-6"
    viewBox="0 0 24 24"
    role="img"
    aria-label="Location icon"
    fill="white"
    stroke="black"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

export const CitySelector = ({ currentCity }: CitySelectorProps) => {
  const handleClick = () => {
    alert("Заглушка: Открываем модальное окно выбора города!");
    // Здесь должна быть логика из features/city-selector/model
  };

  return (
    <button
      type="button"
      translate="no"
      onClick={handleClick}
      className="flex items-center text-sm font-semibold text-black transition-colors duration-200 hover:text-blue-600 focus:text-blue-600 focus:outline-none"
      aria-label="Выбрать город"
    >
      <LocationIcon />
      {currentCity}
    </button>
  );
};
