// PROPS
// Props are values passed from a parent component to a child component.
// Think of a component as a reusable form with spaces to fill in. Props supply the information for those spaces.

// =========
// Typing props using interfaces and types
// TypeScript lets us describe which props a component expects and the types of their values.

// We can use either interface or a type alias
// We can describe the same props using both.

// Optional props
// A question mark makes a prop optional.

// We can give a paramter a default value


// PRACTICE TASK— Create a book page with a separate component file
// 1. Inside src, create a file named BookCard.tsx.
// 2. Create an interface named BookCardProps containing:
//    - title, which must be a string.
//    - author, which must be a string.
// 3. Create a function component named BookCard that receives title and author as props.
// 4. Make it return a <section> containing:
//    - An <h2> displaying the book title.
//    - A paragraph displaying Author: followed by the author’s name.
// 5. Export BookCard as the default export.
// 6. In App.tsx, import BookCard.
// 7. Make App return a <main> containing the heading Our Books.
// 8. Render BookCard three times with these values:
//    Title	Author
//    Purple Hibiscus	Chimamanda Ngozi Adichie
//    The Joys of Motherhood	Buchi Emecheta
//    Changes	Ama Ata Aidoo
// 9. Check that all three books appear in the browser.
// Extra: Use Tailwind CSS to style the cards and make each book title larger and bold.

// interface BookCardProps {
//     title: string;
//     author: string;
//     price: number;
//     isAvailable: boolean;
// };

type BookCardProps = {
     title: string;
     author: string;
     price?: number;
     isAvailable: boolean;
}


const BookCard = ({title, author, price = 40000, isAvailable}: BookCardProps) => {
  return (
  <div className="flex justify-center items-center">
      <section className="bg-amber-400 p-6 rounded-lg m-4 w-100 flex flex-col justify-center items-center">
        <h2 className="bg-white">{title}</h2>
        <p>Author: {author}</p>
        <p>Price: {price}</p>
        <p>Available: {isAvailable ? "Yes" : "No"}</p>
    </section>
  </div>
  )
}

export default BookCard