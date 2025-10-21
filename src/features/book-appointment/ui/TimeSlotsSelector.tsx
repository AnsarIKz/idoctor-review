"use client";

import { useState, useCallback, useMemo } from "react";
import { DayItem, TimeSlotButton, type IDaySlot } from "@/entities";

interface TimeSlotsSelectorProps {
  days: IDaySlot[];
  onSlotSelect: (date: string, time: string) => void;
}

export const TimeSlotsSelector = ({
  days,
  onSlotSelect,
}: TimeSlotsSelectorProps) => {
  const [selectedDay, setSelectedDay] = useState<string>(
    days.find((d) => d.isAvailable)?.date || days[0]?.date || ""
  );
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const currentDay = useMemo(
    () => days.find((d) => d.date === selectedDay),
    [days, selectedDay]
  );

  const handleDaySelect = useCallback((date: string) => {
    setSelectedDay(date);
    setSelectedTime(null);
  }, []);

  const handleTimeSelect = useCallback(
    (time: string) => {
      setSelectedTime(time);
      onSlotSelect(selectedDay, time);
    },
    [selectedDay, onSlotSelect]
  );

  return (
    <div data-testid="timeslots-wrapper">
      {/* Days Container */}
      <article data-testid="days-container" className="relative w-full">
        <div className="flex items-center gap-2 overflow-x-auto scroll-width-none">
          {days.map((day) => (
            <DayItem
              key={day.date}
              date={day.date}
              label={day.label}
              timeRange={day.timeRange}
              isActive={selectedDay === day.date}
              isAvailable={day.isAvailable}
              onClick={() => handleDaySelect(day.date)}
            />
          ))}
        </div>
      </article>

      {/* Time Slots List */}
      {currentDay && (
        <div className="relative mt-4">
          <div
            className="flex flex-nowrap gap-2 overflow-x-auto scroll-width-none"
            data-testid="slots-container"
          >
            {currentDay.slots.map((slot) => (
              <TimeSlotButton
                key={slot.time}
                time={slot.time}
                isActive={selectedTime === slot.time}
                isAvailable={slot.available}
                onClick={() => handleTimeSelect(slot.time)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
