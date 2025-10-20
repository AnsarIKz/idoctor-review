import type { IPriceDetail } from "../model/doctor.types";

export const PriceDisplay = ({ price }: { price: IPriceDetail }) => (
  <div className="flex flex-col justify-start gap-1">
    <p className="text-extra-xs text-textSecondary md:text-xs">
      {price.type === "primary"
        ? "Первичный приём"
        : price.type === "secondary"
        ? "Вторичный приём"
        : "Онлайн-консультация"}
    </p>
    <div className="lg:flex lg:items-end">
      <span className="block w-max text-sm font-medium">
        {price.minPrice
          ? `от ${price.minPrice.toLocaleString("ru-RU")} ₸`
          : "Не указано"}
      </span>
      {price.isDiscounted && price.maxPrice && (
        <span className="text-extra-xs text-statusError md:text-xs ml-1">
          <del>{price.maxPrice.toLocaleString("ru-RU")} ₸</del>
        </span>
      )}
    </div>
  </div>
);
