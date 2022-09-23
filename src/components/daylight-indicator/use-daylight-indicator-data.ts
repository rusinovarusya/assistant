const sunrise = 1646306882;
const sunset = 1646347929;
const currentTime = 1646318698;

const elapsedPartOfDaylight = (sunrise < currentTime) ? (currentTime - sunrise) / (sunset - sunrise) * 100 : 0;
const restOfDaylight = (elapsedPartOfDaylight) ? elapsedPartOfDaylight + 5 : elapsedPartOfDaylight;

export const gradient = {
  background: `linear-gradient(to right, var(--main-color) ${elapsedPartOfDaylight}%, var(--extra-color) ${restOfDaylight}%)`
}
