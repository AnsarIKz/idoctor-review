"use client";
import { useState } from "react";

// Заглушка для иконки Search
const SearchIcon = () => (
  <svg
    className="size-6 stroke-slate-950"
    viewBox="0 0 24 24"
    role="img"
    aria-label="Search icon"
  >
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);

export const HeaderSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // В реальном проекте, здесь будет:
  // 1. useEffect для debounce и вызова features/search-doctor/api
  // 2. Логика отображения результатов

  return (
    <div className="mx-4 hidden max-w-md grow lg:block">
      <div className="relative">
        <SearchIcon />

        <div className="flex w-full flex-col">
          <div className="relative w-full px-1">
            <input
              type="search"
              className="text-textPrimary text-base [...] p-4 h-8 w-full rounded-md bg-gray-100 py-2 pl-10 pr-2"
              placeholder="Врачи, медцентр или специализация"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
                setIsDropdownOpen(true); // Открываем дропдаун при вводе
              }}
            />
          </div>
        </div>

        {/* Выпадающий список результатов (Заглушка) */}
        <div
          className={`absolute left-0 top-full z-[60] mt-2 h-[400px] w-full max-w-md rounded-2xl bg-white shadow-xl transition-all duration-300 ease-in-out ${
            isDropdownOpen ? "block" : "hidden"
          }`}
        >
          <div className="h-full overflow-y-auto p-2">
            <div className="flex h-full flex-col items-center justify-center">
              <p className="text-center text-base text-black">
                {searchValue
                  ? `Поиск по "${searchValue}"...`
                  : "Введите запрос"}
              </p>
              <p className="text-center text-base text-black mt-2">
                Ничего не нашли
                <br />
                Попробуйте изменить запрос
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
