export default function FilterSortControls({ setFilter, setSort }) {
  return (
    <div className="filter-sort">
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="dueSoon">Due Soon</option>
      </select>
    </div>
  );
}
