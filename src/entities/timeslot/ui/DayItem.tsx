import { memo } from "react";
import { clsx } from "clsx";

interface DayItemProps {
  date: string;
  label: string;
  timeRange?: string;
  isActive: boolean;
  isAvailable: boolean;
  onClick: () => void;
}

export const DayItem = memo(
  ({
    date,
    label,
    timeRange,
    isActive,
    isAvailable,
    onClick,
  }: DayItemProps) => {
    return (
      <button
        type="button"
        className={clsx(
          "mb-4 flex w-27 flex-none select-none flex-col rounded-2lg border border-solid px-3 py-2",
          isActive && "border-primary",
          !isActive && "border-borderSecondary",
          !isAvailable && "cursor-not-allowed opacity-50"
        )}
        data-testgroup="days-booking"
        onClick={onClick}
        disabled={!isAvailable}
      >
        <p className="text-sm">{date}</p>
        <p className="text-xs text-textSecondary">{label}</p>
        {timeRange && (
          <p className="mt-2 text-xs text-textSecondary">
            {isAvailable ? `С ${timeRange}` : "Выходной"}
          </p>
        )}
      </button>
    );
  }
);

DayItem.displayName = "DayItem";
