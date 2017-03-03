export default query => (
  `http://www.wolframalpha.com/input/?i=${encodeURIComponent(query)}`
);
