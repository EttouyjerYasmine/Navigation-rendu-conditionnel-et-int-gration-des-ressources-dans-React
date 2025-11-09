function ListeCourses({ items }) {
  return (
    <div>
      <h3>Liste de courses 🛒</h3>
      <ul>
        {items.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeCourses;

