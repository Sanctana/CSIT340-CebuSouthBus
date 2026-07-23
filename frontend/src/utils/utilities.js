export function formatMinutes(minutes) {
  if (minutes < 60) {
    return `${minutes} mins`;
  } else {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (remainingMinutes === 0) {
      return `${hours} hr${hours > 1 ? "s" : ""}`;
    } else {
      return `${hours} hr${hours > 1 ? "s" : ""} ${remainingMinutes} mins`;
    }
  }
}

export function formatTime(timeString) {
  const [hours, minutes, _] = timeString.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${period}`;
}

export function formatFullName(person) {
  return [person.firstName, person.middleName, person.lastName, person.suffix]
    .map((part) => part?.trim())
    .filter(Boolean)
    .join(" ");
}

export function calculateAge(dateOfBirth) {
  if (!dateOfBirth) return null;

  const dob = new Date(dateOfBirth);
  if (Number.isNaN(dob.getTime())) return null;

  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());

  if (!hasHadBirthdayThisYear) age--;

  return age;
}

export function addMinutesToTime(time1, minutesToAdd) {
  const [hours, minutes] = time1.split(":").map(Number);
  let totalMinutes = hours * 60 + minutes + minutesToAdd;
  let totalHours = Math.floor(totalMinutes / 60);
  totalMinutes %= 60;
  const period = totalHours >= 12 ? "PM" : "AM";
  totalHours = totalHours % 12 || 12;

  return `${totalHours.toString().padStart(2, "0")}:${totalMinutes.toString().padStart(2, "0")} ${period}`;
}
