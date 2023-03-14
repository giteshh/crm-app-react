import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="left">
      <img
          src="https://img.freepik.com/premium-vector/crm-icons-customer-relationship-management-vector-infographics-template_116137-3703.jpg"
          alt=""
        />
      </div>
      <div className="mid-ver-line"></div>
      <div className="right">
        <form>
          <h2 className="main-heading">Please Login</h2>
          <hr className="hr-line"></hr>
          <div class="form-group">
            <label for="exampleInputEmail1">Enter Your Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Enter Your Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn btn-primary float-end">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
