export default function formatAuthors(authors) {
  const comma = ', ';

  if (authors.length > 1) {
    return `${authors.slice(0, -1).join(comma)} y ${authors.slice(-1)}`;
  }

  return authors.join(comma);
}
