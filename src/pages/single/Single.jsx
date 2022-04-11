import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Charts";
import List from "../../components/table/Table";

function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">JaneDoe@gmail.com </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">+1 2313 12 14 </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">Kisumu 32 Garden Nyanza </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">USA </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="user spending last 6 months" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
}

export default Single;
