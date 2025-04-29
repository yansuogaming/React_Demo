// import logo from "./logo.svg";
import "./App.css";
import "./App_reset_and_font.css";

//parent Component

function App() {
  return (
    <section className="title_button_celebrate_event">
      {/* Children Component*/}
      <VietnamEvent_Title>
        <VietnamEvent_Item
          image_departure="https://media.vneconomy.vn/images/upload/2023/07/01/vietnam-becomes-seventh-most-searched-country-worldwide-494.jpg"
          timeStart_departure="10 Apr"
          timeEnd_departure="27 Jun"
          title_inf_departure="Nha Trang - Khanh Hoa Sea Festival 2025"
        />
      </VietnamEvent_Title>
    </section>
  );
}

function VietnamEvent_Title(pros) {
  return (
    <div className="container">
      <div className="dtl_txt_button_vn_event">
        <h2 className="dtl_txt_vn_event">Celebrate Vietnam’s Vibrant Events</h2>
        <div className="dtl_txt_btn_vn_event">
          <a href="#" className="btn dtl_btn_event">
            See All Events
          </a>
        </div>
      </div>
      {pros.children}
    </div>
  );
}

// Pros -> Properties

function VietnamEvent_Item(pros) {
  return (
    <div className="box_item_celebrate_event">
      <div className="dtl_list_item_event">
        <div className="row">
          <div className="col-lg-3">
            <div className="dtl_item_event_celebrate">
              <div className="dtl_box_img_date_departure">
                <a href="#">
                  <img
                    src={pros.image_departure}
                    alt=""
                    className="dtl_img_item_event"
                  />
                </a>
                <div className="dtl_box_departure">
                  <p className="dtl_time_departure">
                    {pros.timeStart_departure}
                    <br />
                    to {pros.timeEnd_departure}
                  </p>
                </div>
              </div>
              <div className="dtl_box_information_departure">
                <h3 className="dtl_ttile_infor_departure">
                  {pros.title_inf_departure}
                </h3>
                <div className="dtl_address_departure"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
