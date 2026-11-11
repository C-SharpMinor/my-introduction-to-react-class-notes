// Create a file named `BookDetails.tsx` inside the `src` folder. Write a function component named `BookDetails`. Inside it, declare `bookTitle` as a `string` with the value `"Cock Crows at Dawn"` and `publicationYear` as a `number` with the value `1958`. Return a `<section>` containing an `<h2>` displaying the book’s title and a paragraph displaying **Published:** followed by the publication year. Export `BookDetails` as the default export. Import and render it inside `App.tsx`, then confirm that its content appears in the browser.


// function BookDetails() {
    
//     const bookTitle: string = "Cock Crows at Dawn";
//     const publicationYear: number = 2000;

//     return (
//         <section>
//             <h2>{bookTitle}</h2>
//             <p>Published: {publicationYear}</p>
//         </section>
//     );
// }

// export default BookDetails

// arrow function version using rafce
// import React from 'react'

const BookDetails = () => {

      const bookTitle: string = "Cock Crows at Dawn";
      const publicationYear: number = 2000;

  return (
    <div>
       <h2>{bookTitle}</h2>
       <p>Published: {publicationYear}</p>
    </div>
  )
}

export default BookDetails
