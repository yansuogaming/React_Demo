import "./App.css";
import "./App_reset_and_font.css";
import Header from "./components/header"; // đường dẫn đúng đến Header.jsx

const events = [
  {
    image:
      "https://media.vneconomy.vn/images/upload/2023/07/01/vietnam-becomes-seventh-most-searched-country-worldwide-494.jpg",
    start: "10 Apr",
    end: "27 Jun",
    title: "Nha Trang - Khanh Hoa Sea Festival 2025",
    location: "Nha Trang",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in",
  },
  {
    image:
      "https://media.vneconomy.vn/images/upload/2023/07/01/vietnam-becomes-seventh-most-searched-country-worldwide-494.jpg",
    start: "30 Apr",
    title: "Reunification Day",
    location: "Nha Trang",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in",
  },
  {
    image:
      "https://media.vneconomy.vn/images/upload/2023/07/01/vietnam-becomes-seventh-most-searched-country-worldwide-494.jpg",
    start: "10 Apr",
    end: "27 Jun",
    title: "Nha Trang - Khanh Hoa Sea Festival 2025",
    location: "Nha Trang",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in",
  },
  {
    image:
      "https://media.vneconomy.vn/images/upload/2023/07/01/vietnam-becomes-seventh-most-searched-country-worldwide-494.jpg",
    start: "10 Apr",
    end: "27 Jun",
    title: "Nha Trang - Khanh Hoa Sea Festival 2025",
    location: "Nha Trang",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in",
  },

  {
    image:
      "https://media.vneconomy.vn/images/upload/2023/07/01/vietnam-becomes-seventh-most-searched-country-worldwide-494.jpg",
    start: "10 Apr",
    end: "27 Jun",
    title: "Nha Trang - Khanh Hoa Sea Festival 2025",
    location: "Nha Trang",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in",
  },

  {
    image:
      "https://media.vneconomy.vn/images/upload/2023/07/01/vietnam-becomes-seventh-most-searched-country-worldwide-494.jpg",
    start: "10 Apr",
    end: "27 Jun",
    title: "Nha Trang - Khanh Hoa Sea Festival 2025",
    location: "Nha Trang",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in",
  },

  {
    image:
      "https://media.vneconomy.vn/images/upload/2023/07/01/vietnam-becomes-seventh-most-searched-country-worldwide-494.jpg",
    start: "10 Apr",
    end: "27 Jun",
    title: "Nha Trang - Khanh Hoa Sea Festival 2025",
    location: "Nha Trang",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in",
  },

  {
    image:
      "https://media.vneconomy.vn/images/upload/2023/07/01/vietnam-becomes-seventh-most-searched-country-worldwide-494.jpg",
    start: "10 Apr",
    end: "27 Jun",
    title: "Nha Trang - Khanh Hoa Sea Festival 2025",
    location: "Nha Trang",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in",
  },
];

function App() {
  return (
    <>
      <Header />
      {/* Các phần khác của trang */}
      <section className="title_button_celebrate_event">
        <VietnamEventTitle>
          {events.map((event, idx) => (
            <VietnamEventItem key={idx} {...event} />
          ))}
        </VietnamEventTitle>
      </section>
      <ExpirenceLocation />
    </>
  );
}

function VietnamEventTitle({ children }) {
  return (
    <div className="container">
      <div className="dtl_txt_button_vn_event">
        <h2 className="dtl_txt_vn_event">Celebrate Vietnam’s Vibrant Events</h2>
        <div className="dtl_txt_btn_vn_event">
          <a href="/" className="btn dtl_btn_event">
            See All Events
          </a>
          <i className="fa-regular fa-arrow-right"></i>
        </div>
      </div>
      <div className="dtl_list_item_event_celebrate">
        <div className="row">{children}</div>
      </div>
    </div>
  );
}

function VietnamEventItem({ image, start, end, title, location, description }) {
  const [day, month] = start.split(" ");
  const hasRange = Boolean(end);

  return (
    <div className="col-lg-3 col-md-4 col-sm-12">
      <div className="dtl_item_event_celebrate">
        <div className="dtl_box_img_date_departure">
          <a href="/">
            <img src={image} alt="" className="dtl_img_item_event" />
          </a>
          <div className="dtl_box_departure">
            {hasRange ? (
              <p className="dtl_time_departure range">
                {start}
                <br />
                <span className="dtl_txt_to_depart">to</span> {end}
              </p>
            ) : (
              <p className="dtl_time_departure time_single">
                <span className="dtl_day_large">{day}</span>
                <br />
                <span className="dtl_month_small">{month}</span>
              </p>
            )}
          </div>
        </div>

        <div className="dtl_box_information_departure">
          <h3 className="dtl_ttile_infor_departure">
            <a href="/" className="link_infor_departure">
              {title}
            </a>
          </h3>
          {location && (
            <div className="dtl_location_departure">
              <p className="dtl_txt_location_departure">
                <i
                  className="fa-regular fa-location-dot"
                  style={{ color: "#494951" }}
                ></i>
                {location}
                <i
                  className="fa-regular fa-tickets-airline"
                  style={{ color: "#494951" }}
                ></i>
              </p>
            </div>
          )}
          {description && (
            <div className="dtl_description_txt">
              <p>{description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ExpirenceLocation() {
  return (
    <section className="dtl_expirence_location">
      <div className="container">
        <div className="dtl_box_expirence_location">
          <h2 className="dtl_txt_vn_event">
            Unforgettable Vietnam Experiences
          </h2>
        </div>
        <div className="dtl_box_list_item_location"></div>
      </div>
    </section>
  );
}

export default App;
