// /* Color Classes */
// .bg-turquoise {
//   background-color: #1abc9c;
// }

// .bg-emerald {
//   background-color: #2ecc71;
// }

// .bg-sunflower {
//   background-color: #f39c12;
// }

// .bg-alizarin {
//   background-color: #e74c3c;
// }

const genreColorMap: Record<string, string> = {
  Business: "bg-turquoise",
  DevOps: "bg-emerald",
  Fiction: "bg-sunflower",
  Technical: "bg-alizarin",
};

export const useGenreColor = (genre: string): string => {};
