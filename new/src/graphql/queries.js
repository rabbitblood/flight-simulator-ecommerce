export const productQuery = `
  query ProductQuery($handle: String) {
    product(handle: $handle) {
      id
      title
      handle
    }
  }
`;

// export const productsQuery = `
// query {
//   products(first: 10) {
//     edges {
//       node {
//         id
//         title
//         handle
//         images(first: 1) {
//           edges {
//             node {
//               originalSrc
//               altText
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `;
