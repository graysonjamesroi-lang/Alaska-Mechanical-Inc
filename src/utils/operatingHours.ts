export interface OperatingStatus {
  isOpen: boolean;
  statusText: string;
  subText: string;
  currentTimeString: string;
  nextChangeText: string;
}

export function getAlaskaBusinessStatus(): OperatingStatus {
  try {
    // Current time in America/Anchorage
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Anchorage',
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    });

    const parts = formatter.formatToParts(now);
    const partMap: Record<string, string> = {};
    for (const part of parts) {
      partMap[part.type] = part.value;
    }

    const weekdayStr = partMap.weekday || ''; // Mon, Tue, Wed, Thu, Fri, Sat, Sun
    const hour = parseInt(partMap.hour || '0', 10);
    const minute = parseInt(partMap.minute || '0', 10);
    const second = parseInt(partMap.second || '0', 10);

    // Convert to 12-hour display string for the live clock
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const pad = (n: number) => n.toString().padStart(2, '0');
    const currentTimeString = `${displayHour}:${pad(minute)}:${pad(second)} ${ampm} AKST`;

    // Business hours: Monday to Friday, 7:30 AM (7*60 + 30 = 450) to 4:00 PM (16*60 = 960)
    const currentMinutes = hour * 60 + minute;
    const openMinutes = 7 * 60 + 30; // 7:30 AM
    const closeMinutes = 16 * 60; // 4:00 PM

    const isWeekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(weekdayStr);

    if (isWeekday && currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
      const remainingMinutes = closeMinutes - currentMinutes;
      const remHours = Math.floor(remainingMinutes / 60);
      const remMins = remainingMinutes % 60;
      const closingIn = remHours > 0 ? `${remHours}h ${remMins}m` : `${remMins}m`;

      return {
        isOpen: true,
        statusText: 'Open Now',
        subText: 'Mon–Fri 7:30 AM – 4:00 PM (Anchorage)',
        currentTimeString,
        nextChangeText: `Closes at 4:00 PM (in ${closingIn})`,
      };
    } else {
      let nextOpenText = 'Opens Monday at 7:30 AM';
      if (weekdayStr === 'Fri' && currentMinutes >= closeMinutes) {
        nextOpenText = 'Opens Monday at 7:30 AM';
      } else if (weekdayStr === 'Sat' || weekdayStr === 'Sun') {
        nextOpenText = 'Opens Monday at 7:30 AM';
      } else if (isWeekday && currentMinutes < openMinutes) {
        nextOpenText = 'Opens today at 7:30 AM';
      } else if (isWeekday && currentMinutes >= closeMinutes) {
        nextOpenText = 'Opens tomorrow at 7:30 AM';
      }

      return {
        isOpen: false,
        statusText: 'Closed Now',
        subText: 'Mon–Fri 7:30 AM – 4:00 PM (Anchorage)',
        currentTimeString,
        nextChangeText: nextOpenText,
      };
    }
  } catch {
    return {
      isOpen: false,
      statusText: 'Mon–Fri 7:30 AM – 4:00 PM',
      subText: 'Standard Operating Hours',
      currentTimeString: '7:30 AM – 4:00 PM AKST',
      nextChangeText: '24/7 Emergency Dispatch Available',
    };
  }
}
