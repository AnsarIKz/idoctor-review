import Image from "next/image";
import type { IDoctor } from "../../model/doctor.types";

interface DoctorCardHeaderProps {
  doctor: Pick<
    IDoctor,
    "id" | "specialization" | "fullName" | "photoUrl" | "rating"
  >;
  renderDoctorLink: (children: React.ReactNode) => React.ReactNode;
}

export const DoctorCardHeader = ({
  doctor,
  renderDoctorLink,
}: DoctorCardHeaderProps) => (
  <div className="flex flex-col items-center">
    {renderDoctorLink(
      <div className="relative flex aspect-square w-24">
        <Image
          alt={`На фотографии изображён ${doctor.specialization.join(", ")} ${
            doctor.fullName
          }`}
          src={doctor.photoUrl}
          className="absolute inset-0 size-full rounded-full md:rounded-3xl object-cover"
          sizes="(min-width: 1024px) 176px, 96px"
          fill
        />
      </div>
    )}

    <div className="mt-2 flex w-full flex-col items-center pb-2">
      <span className="mr-1 text-sm text-textPrimary md:mx-1 md:text-sm">
        Рейтинг <strong>★ {doctor.rating.score.toFixed(1)}</strong>
      </span>
      <a
        className="text-sm text-blue-500 hover:underline md:text-xs"
        href={`/doctor/${doctor.id}#review`}
      >
        {`${doctor.rating.reviewCount} отзывов`}
      </a>
    </div>
  </div>
);
