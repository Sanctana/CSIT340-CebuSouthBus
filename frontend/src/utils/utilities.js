export function formatMinutes(minutes) {
	if (minutes < 60) {
		return `${minutes} mins`;
	} else {
		const hours = Math.floor(minutes / 60);
		const remainingMinutes = minutes % 60;
		if (remainingMinutes === 0) {
			return `${hours} hr${hours > 1 ? 's' : ''}`;
		} else {
			return `${hours} hr${hours > 1 ? 's' : ''} ${remainingMinutes} mins`;
		}
	}
}