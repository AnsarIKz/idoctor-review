import { memo } from "react";
import { clsx } from "clsx";

interface TimeSlotButtonProps {
  time: string;
  isActive: boolean;
  isAvailable: boolean;
  onClick: () => void;
}

export const TimeSlotButton = memo(
  ({ time, isActive, isAvailable, onClick }: TimeSlotButtonProps) => {
    return (
      <button
        type="button"
        className="flex flex-col items-center gap-2 text-textPrimary"
        data-testgroup="slot-booking"
        onClick={onClick}
        disabled={!isAvailable}
      >
        <span
          className={clsx(
            "w-20 rounded-2lg py-3 text-center text-xs transition-colors md:w-full px-3 lg:px-7",
            isActive && "slot-active bg-primary text-white",
            !isActive &&
              isAvailable &&
              "bg-bgSecondary text-textPrimary hover:bg-primary/30 active:bg-primary/75 active:text-white",
            !isAvailable && "opacity-50 cursor-not-allowed"
          )}
        >
          {time}
        </span>
      </button>
    );
  }
);

TimeSlotButton.displayName = "TimeSlotButton";
