import React from "react";
import { IClinic } from "../model/clinic.types";

const LocationIcon = () => (
  <svg
    className="size-6 fill-current text-textPrimary"
    viewBox="0 0 24 24"
    role="img"
    aria-label="Location icon"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

interface ClinicLinkProps {
  clinic: IClinic;
  renderLink: (name: string) => React.JSX.Element;
}

export const ClinicLink = ({ clinic, renderLink }: ClinicLinkProps) => {
  const linkText = `${clinic.name} - ${clinic.address}`;

  return (
    <div className="mt-1 inline-flex flex-wrap items-center gap-1 md:flex-nowrap">
      <div className="flex items-center gap-1">
        <LocationIcon />
        <address className="flex flex-col gap-2">
          <p className="text-xs text-textSecondary md:text-sm">
            {clinic.address}
          </p>
        </address>
      </div>

      <div className="block text-xs text-additionalBlue hover:underline active:text-additionalBlue/80 md:text-sm">
        {renderLink(linkText)}
      </div>
    </div>
  );
};
