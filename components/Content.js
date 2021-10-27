import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

export default function Content({ results }) {
  return (
    <FlipMove className="mt-8 mx-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}
