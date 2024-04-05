import { DateTime, IANAZone } from 'luxon';

export const isValidIsoDate = (isoDate: string) => DateTime.fromISO(isoDate).isValid;

export const parseDateTimeFilter = (filter: string) => {
  // Using luxon to parse and validate the date and time
  const luxonDate = DateTime.fromISO(filter);

  if (!luxonDate.isValid) {
    return { dateValue: '', timeValue: '' };
  }

  const dateValue = luxonDate.toISODate();
  const timeValue = luxonDate.toISOTime({ includeOffset: false });

  return { dateValue, timeValue };
};

export const formatDateTime = ({
  isoDate,
  timeZone = IANAZone.create('local').name,
}: {
  isoDate: string;
  timeZone: string;
}) => (isoDate ? DateTime.fromISO(isoDate).setZone(timeZone).toString() : '');
