import { CitySelector } from "@/features/city-selector/ui/CitySelector"; // features
import { LanguageSelector } from "@/features/language-switcher/ui/LanguageSelector"; // features
import { HeaderSearch } from "@/features/search-doctor/ui/HeaderSearch"; // features
import { Logo, Navbar } from "@/shared";
import { MobileMenuButton } from "@/widgets/mobile-menu/MobileMenuButton";

export const Header = () => {
  const currentCity = "Алматы";

  return (
    <header className="sticky top-0 z-50 w-full bg-white p-4">
      <div className="flex w-full items-center justify-between lg:container lg:mx-auto lg:justify-center lg:px-8">
        <div className="lg:order-2">
          <CitySelector currentCity={currentCity} />{" "}
        </div>

        <div className="lg:order-1">
          <Logo />
        </div>

        <div className="hidden lg:order-3 lg:block lg:w-full lg:max-w-md">
          <HeaderSearch />
        </div>

        <div className="flex items-center gap-2 lg:order-3">
          <button
            type="button"
            className="lg:hidden"
            aria-label="Открыть мобильный поиск"
          ></button>

          <nav className="hidden pr-1 lg:block">
            <Navbar
              items={[
                { label: "Врачи", href: "/doctors" },
                { label: "Медцентры", href: "/medcenters" },
                // ...
              ]}
            />
          </nav>

          <div className="relative hidden lg:block">
            <LanguageSelector />
          </div>

          <MobileMenuButton />
        </div>
      </div>
    </header>
  );
};
