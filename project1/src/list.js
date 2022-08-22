function List(props) {
  return (
    <div className="py-3">
      {props.people.map((p) => {
        return (
          <h4 className="text-center py-2" key={p.id}>
            {p.name}
          </h4>
        );
      })}
    </div>
  );
}
export default List;
