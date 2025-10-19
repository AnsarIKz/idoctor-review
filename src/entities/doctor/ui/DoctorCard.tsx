import Image from "next/image";
import React from "react";
import type { IDoctor, IPriceDetail } from "../model/doctor.types";
import type { IRelatedClinic } from "@/shared/lib/date/related.types";
import type { ISlot, WorkingHours } from "@/shared/lib/date/date.types";

interface DoctorCardProps {
  doctor: IDoctor;

  renderDoctorLink: (children: React.ReactNode) => React.ReactNode;

  renderClinicLinkSlot: (clinic: IRelatedClinic) => React.ReactNode;

  renderTimeSlots: (
    slots: ISlot[],
    dailySchedule: WorkingHours[]
  ) => React.ReactNode;

  renderBadges?: React.ReactNode;
}

const PriceDisplay = ({ price }: { price: IPriceDetail }) => (
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

export const DoctorCard = ({
  doctor,
  renderDoctorLink,
  renderClinicLinkSlot,
  renderTimeSlots,
  renderBadges,
}: DoctorCardProps) => {
  const primaryPrices = doctor.prices.filter((p) => p.type !== "online");
  const onlinePrice = doctor.prices.find((p) => p.type === "online");

  return (
    <article
      data-doctor-id={doctor.id}
      className="[...CSS_CLASSES_FROM_EXAMPLE...]"
    >
      <div className="empty:hidden absolute right-4 top-4">{renderBadges}</div>

      <div className="flex flex-col items-center">
        {renderDoctorLink(
          <figure className="w-24 lg:size-44 [...]">
            <div className="relative flex aspect-square w-44 [...]">
              <Image
                alt={`На фотографии изображён ${doctor.specialization} ${doctor.fullName}`}
                src={doctor.photoUrl}
                className="absolute inset-0 size-full rounded-full md:rounded-3xl object-cover"
                fill
              />
            </div>
          </figure>
        )}

        <div className="mt-2 flex w-full flex-col items-center pb-2">
          <span className="mr-1 text-sm text-textPrimary md:mx-1 md:text-sm">
            Рейтинг <strong>★ {doctor.rating.score.toFixed(1)}</strong>
          </span>
          <a
            className="text-sm text-blue-500 hover:underline md:text-xs"
            href={`/doctor/${doctor.id}#review`}
          >
            {doctor.rating.reviewCount} отзывов
          </a>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col">
          <p className="text-sm">{doctor.specialization}</p>
          {renderDoctorLink(
            <span className="font-bold">
              <h4 className="inline text-lg">
                {doctor.fullName}
                <span className="mx-2 text-lg">•</span>
              </h4>
              <span className="text-lg">Стаж {doctor.experienceYears} год</span>
            </span>
          )}
        </div>

        {doctor.discountLabel && (
          <span className="rounded-full px-2 py-1 text-white bg-statusSuccess mt-2 w-max text-sm font-bold">
            {doctor.discountLabel}
          </span>
        )}

        <div className="mt-2 flex flex-col gap-2">
          <div className="flex items-start gap-2 md:items-center md:gap-6">
            {primaryPrices.map((price, index) => (
              <React.Fragment key={price.type}>
                <PriceDisplay price={price} />
                {index < primaryPrices.length - 1 && (
                  <div className="h-7 w-px bg-bgSecondary"></div>
                )}
              </React.Fragment>
            ))}

            {onlinePrice && (
              <>
                <div className="h-7 w-px bg-bgSecondary"></div>
                <PriceDisplay price={onlinePrice} />
              </>
            )}
          </div>
          <p className="text-extra-xs">{doctor.priceDisclaimer}</p>
        </div>

        <div className="mt-1">
          {doctor.clinics[0] && renderClinicLinkSlot(doctor.clinics[0])}
        </div>

        <div className="mt-4">
          {renderTimeSlots(doctor.availableSlots, doctor.dailySchedule)}
        </div>
      </div>
    </article>
  );
};
