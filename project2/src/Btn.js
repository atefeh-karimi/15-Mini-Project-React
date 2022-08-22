function Btn(props) {
  return (
    <div className="d-grid gap-2 col-6 mx-auto mt-3">
      <button onClick={props.onClick} className="btn btn-primary ">
        {props.text ? props.text : "Button"}
      </button>
    </div>
  );
}

export default Btn;
