import Sidebar from "../Sidebar";

function Completed() {
  return (
    <>
      <Sidebar />
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center vh-100">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="text-center">
            <>
              <h1>Hello!</h1>
              <p>Completed Orders</p>
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default Completed;
