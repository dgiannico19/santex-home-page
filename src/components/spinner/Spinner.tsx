import './spinner.css';

export function Spinner() {
  return (
    <div className="spinner">
      <div className="intersecting-circles-spinner">
        <div className="spinnerBlock">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
      </div>
    </div>
  );
}
