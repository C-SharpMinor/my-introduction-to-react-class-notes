// Home Task — Build a Movie Watchlist 🎬

// Use your existing React and TypeScript project with Tailwind CSS configured. Build a page that displays three films using the same reusable component.

// 1. Create the `MovieCard` component
// Inside `src`, create `MovieCard.tsx`. Use an **interface or a type alias** named `MovieCardProps` to describe these props.

// | Prop         | Type      |  Requirement                          |
// |--------------|-----------|---------------------------------------|
// | `title`      | `string`  | Required                              |
// | `genre`      | `string`  | Required                              |
// | `rating`     | `number`  | Optional, with a default value of `0` |
// | `hasWatched` | `boolean` | Required                              |

// step 1 - create the interface
interface MovieCardProps {
    title: string;
    genre: string;
    rating?: number;
    hasWatched: boolean;
}

// step 2- movie card component
// step 3: pass/destructure the props 
const MovieCard = ({title, genre, rating = 0, hasWatched}: MovieCardProps) => {

  return (
    <section className="bg-yellow-200 p-5 rounded-lg mb-4">
        <h2 className="text-2xl text-gray-400">{title}</h2>
        <p className="bg-amber-200">Genre: {genre}</p>
        <p className="text-gray-500">Rating: {rating} out of 10</p>
        <p className="">Has Watched: {hasWatched ? "Watched" : "To Watch"}</p>

    </section>
  )
}




export default MovieCard




// NEXT, Make `MovieCard` return a `<section>` that displays:
// - The film title in an `<h2>`.
// - The genre in a paragraph.
// - The rating out of 10 in a paragraph.
// - **Watched** when `hasWatched` is `true` and **To watch** when it is `false`. Use a ternary operator.

// Export `MovieCard` as the default export.

// ---------
// 2. Reuse the component in `App.tsx`
// Import `MovieCard`. Inside a `<main>` element, add an `<h1>` that says **My Movie Watchlist**, then render `<MovieCard />` three times using these values.

// | Title          | Genre     | Rating         | Has watched |
// |----------------|-----------|----------------|-------------|
// | The Lion King  | Animation | `9`            | `true`      |
// | Black Panther  | Action    | `8`            | `true`      |
// | Hidden Figures | Drama     | Omit this prop | `false`     |


// ----------
// 3. Style and check your work
// - Use Tailwind CSS to give each card a light background, padding, rounded corners, and a bold title.
// - Check that Hidden Figures** displays **0/10** and **To watch**.
// - Change the card’s background colour in `MovieCard.tsx`. Check that all three cards update.

