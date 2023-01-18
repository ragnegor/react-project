import StarBlack from "./StarBlack";
import StarGray from "./StarGray";

export const Stars = ({starsCount}) => {
  const filledStars = Array.from({length: starsCount});
  const emptyStart = Array.from({length: 5 - starsCount });

  console.log('fill ', filledStars.length);
  console.log('empty ', emptyStart.length);

  return (
    <div>
      {filledStars ? filledStars.map((star, idx) => <StarBlack key={idx} />) : null}
      {emptyStart ? emptyStart.map((star, idx) => <StarGray key={idx} />) : null}
    </div>
  )
}