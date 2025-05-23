import React, { useState } from "react";
import { Input } from "@components/ui/input";
import "@css/PaymentTour.css";
import { Calendar, Dot, Users, X } from "lucide-react";
import { Button } from "@components/ui/button";

const PaymentTour = () => {
  // State để quản lý mã khuyến mãi và trạng thái giao diện
  const [promoCode, setPromoCode] = useState("");
  const [isPromoInputVisible, setIsPromoInputVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [promoStatus, setPromoStatus] = useState(null); // null, 'success', 'error'
  const [promoMessage, setPromoMessage] = useState("");
  const [priceAfterPromo, setPriceAfterPromo] = useState(310); // Giá ban đầu
  const [isPriceAfterPromoVisible, setIsPriceAfterPromoVisible] =
    useState(false);

  // State để quản lý toggle hiển thị chi tiết khách sạn và du thuyền
  const [hotelDetailsVisible, setHotelDetailsVisible] = useState({});

  const [selectedActivity, setSelectedActivity] = useState(0);
  const promoCodeValid = "DISCOUNT10"; // Mã giảm giá hợp lệ
  const discountAmount = 1; // Giảm giá $1
  const totalPrice = 310; // Giá tổng ban đầu

  // Hàm hiển thị trường nhập mã khuyến mãi
  const showInput = () => {
    setIsPromoInputVisible(true);
  };

  // Hàm áp dụng mã khuyến mãi
  const applyPromoCode = () => {
    if (promoCode === promoCodeValid) {
      // Thành công
      setPromoStatus("success");
      setPromoMessage(
        `You get <span className="txt_numbpricebold">US $1</span> off on the total order!`
      );
      setIsPriceAfterPromoVisible(true);
      setPriceAfterPromo(totalPrice - discountAmount);
    } else {
      // Thất bại
      setPromoStatus("error");
      setPromoMessage(
        "The code is incorrect or does not exist, please enter another code"
      );
      setTimeout(() => {
        setPromoStatus(null);
        setPromoMessage("");
      }, 3000); // Ẩn thông báo sau 3 giây
    }
  };

  const handleSubmitStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Hàm xóa mã khuyến mãi
  const removePromoCode = () => {
    setPromoCode("");
    setIsPromoInputVisible(false);
    setPromoStatus(null);
    setPromoMessage("");
    setIsPriceAfterPromoVisible(false);
    setPriceAfterPromo(totalPrice);
  };

  // Hàm toggle hiển thị chi tiết khách sạn
  const toggleHoteremovePromoCodelDetails = (hotelId) => {
    setHotelDetailsVisible((prev) => ({
      ...prev,
      [hotelId]: !prev[hotelId],
    }));
  };

  console.log(
    removePromoCode,
    toggleHoteremovePromoCodelDetails,
    hotelDetailsVisible
  );

  const onClickNextActivity = () => {
    if (selectedActivity === 2) {
      handleSubmitStep();
    }
    setSelectedActivity((prevActivity) => prevActivity + 1);

    // Kiểm tra nếu đã chọn tất cả các hoạt động, chuyển sang bước tiếp theo

  };


  // Hàm toggle hiển thị chi tiết du thuyền

  return (
    <div className="container px-4 sm:px-6 lg:px-8" data-select2-id={19}>
      <div
        style={{ paddingTop: "2.5em" }}
        className="flex justify-between gap-20"
        data-select2-id={18}
      >
        <form
          id="iso_cart_2024"
          className="w-full lg:w-2/3"
          data-select2-id="iso_cart_2024"
        >
          <Input
            type="hidden"
            name="csrf_token"
            id="iso_csrf_token"
            defaultValue="07128aa6d64bdb92459d94e25dcaf4df0f88f809e8bcfe635325d9913cc8647f"
          />
          <Input
            type="text"
            name="iso_cms_booking"
            style={{ display: "none" }}
          />
          <Input type="hidden" name="booking" defaultValue="booking" />
          <div className="iso_item_cart" data-select2-id={17}>
            <div className="iso_item_top">
              <div className="flex items-center justify-between">
                <div className="iso_box_right">
                  <span className="number">1</span>
                  <span className="text">Contact details</span>
                </div>
                <div
                  className={`iso_box_left ${
                    currentStep === 1 ? "hidden" : "block"
                  }`}
                >
                  <div className="iso_box_left_txt flex items-center">
                    <i className="fa fa-pencil-square-o" aria-hidden="true" />
                    <span>Edit</span>
                  </div>
                </div>
              </div>
              <div className="iso_item_description">
                We'll use this information to send you confirmation and updates
                about your booking
              </div>
              <div class={`pt-5 ${currentStep === 1 ? "hidden" : "block"}`}>
                <div class="information_name"></div>
                <div class="information_text">
                  Email: <span class="txt_mail"></span>
                </div>
                <div class="information_text">
                  Phone: <span class="txt_phone"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="iso_item_body" data-select2-id={16}>
            <div
              className="iso_item_body_item iso_input_box"
              data-select2-id={15}
            >
              <div className={`${currentStep !== 1 ? "hidden" : "block"}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="w-full">
                    <div className="iso_input_box_item">
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="first_name"
                        name="first_name"
                        type="text"
                        className="mt-1 block w-full rounded-md"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="iso_input_box_item">
                      <label
                        htmlFor="last_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="last_name"
                        name="last_name"
                        type="text"
                        className="mt-1 block w-full rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-4"
                  data-select2-id={14}
                >
                  <div className="w-full">
                    <div className="iso_input_box_item">
                      <label className="block text-sm font-medium text-gray-700">
                        Date of birth <span className="text-red-500">*</span>
                      </label>
                      <Input
                        name="birthday"
                        className="mt-1 block w-full rounded-md iso_book_birthday hasDatepicker"
                        type="text"
                        id="dp1747968447951"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="iso_input_box_item" data-select2-id={13}>
                      <label className="block text-sm font-medium text-gray-700">
                        Gender <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="gender"
                        className="mt-1 block w-full rounded-md iso_select2 select2-hidden-accessible"
                        data-select2-id={1}
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <option value selected disabled data-select2-id={3}>
                          ---- Gender----
                        </option>
                        <option value="Male" data-select2-id={22}>
                          Male
                        </option>
                        <option value="Female" data-select2-id={23}>
                          Female
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <div className="iso_input_box_item">
                      <label className="block text-sm font-medium text-gray-700">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        className="mt-1 block w-full rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="w-full">
                    <div className="iso_input_box_item">
                      <label className="block text-sm font-medium text-gray-700">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="country_id"
                        id="country_id"
                        className="mt-1 block w-full rounded-md iso_select2 select2-hidden-accessible"
                        data-select2-id="country_id"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <option value disabled selected data-select2-id={5}>
                          ---- Country----
                        </option>
                        <option value={247}>Vietnam</option>
                        <option value={2}>Afghanistan</option>
                        <option value={3}>Albania</option>
                        <option value={4}>Algeria</option>
                        {/* Các option quốc gia khác giữ nguyên */}
                      </select>
                    </div>
                  </div>
                  <div className="">
                    <div className="iso_input_box_item">
                      <label>
                        Phone number <span>*</span>
                      </label>
                      <div className="iti iti--allow-dropdown iti--show-flags iti--inline-dropdown">
                        <div
                          className="iti__country-container"
                          style={{ left: "0px" }}
                        >
                          <button
                            type="button"
                            className="iti__selected-country"
                            aria-expanded="false"
                            aria-label="Selected country"
                            aria-haspopup="true"
                            aria-controls="iti-0__dropdown-content"
                            role="combobox"
                            title="United States: +1"
                          >
                            <div className="iti__selected-country-primary">
                              <div className="iti__flag iti__us">
                                <span className="iti__a11y-text">
                                  United States +1
                                </span>
                              </div>
                              <div className="iti__arrow" aria-hidden="true" />
                            </div>
                          </button>
                          <div
                            id="iti-0__dropdown-content"
                            className="iti__dropdown-content iti__hide"
                          >
                            <Input
                              type="text"
                              className="iti__search-input"
                              placeholder="Search"
                              role="combobox"
                              aria-expanded="true"
                              aria-label="Search"
                              aria-controls="iti-0__country-listbox"
                              aria-autocomplete="list"
                              autoComplete="off"
                            />
                            <span className="iti__a11y-text">
                              244 results found
                            </span>
                          </div>
                        </div>
                        <Input
                          name="phone"
                          type="tel"
                          id="phone"
                          className="phonenumber iti__tel-input"
                          autoComplete="off"
                          data-intl-tel-input-id={0}
                          style={{ paddingLeft: "47px" }}
                          placeholder="(201) 555-0123"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-5">
                <div
                  className={`iso_button flex flex-col pb-7 ${
                    currentStep !== 1 ? "hidden" : "block"
                  }`}
                >
                  <span className="iso_txt_note">
                    Please do not skip information (*)
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      handleSubmitStep();
                    }}
                    className="iso_cart_button"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="iso_item_cart">
            <div className="iso_item_top">
              <div className="d-flex align-items-center justify-content-start">
                <div className="iso_box_right">
                  <span className="number">2</span>
                  <span className="text">Activity details</span>
                </div>
              </div>
            </div>
            <div className={`iso_lst_cart ${currentStep !== 1 ? "active" : ""}`}>
              <div
                className={`hnv_cart_item ${
                  currentStep !== 1 ? "active" : ""
                } hnv_cart_item_tour`}
              >
                <div className="hnv_cart_item_top flex flex-col gap-6">
                  {Array.from({ length: 3 }, (_, index) => (
                    <div className="">
                      <div key={index} className="flex gap-12">
                        <div className="w-full lg:w-1/4">
                          <div className="">
                            <div
                              className="title_package"
                              title="Hanoi & Pu Luong Valley Break 2 Days 1 Night"
                            >
                              <img
                                src="https://dulichsaigon.edu.vn/wp-content/uploads/2024/02/top-cac-loai-hinh-du-lich-pho-bien-tai-viet-nam-nhieu-ban-tre-yeu-thich.jpg"
                                width="auto"
                                height="auto"
                                alt="Hanoi & Pu Luong Valley Break 2 Days 1 Night"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="hnv_cart_item_info">
                          <div className="hnv_cart_item_info_title d-flex align-items-center justify-content-between">
                            <h3>
                              Hanoi &amp; Pu Luong Valley Break 2 Days 1 Night
                            </h3>
                            <div className="iso_hnv_cart_edit">
                              <i className="fa-sharp fa-solid fa-pen-to-square" />
                            </div>
                          </div>
                          <div className="hnv_cart_item_info_detail d-flex flex-column">
                            <div className="hnv_cart_item_info_detail_date">
                              <Calendar className="w-6 h-6" />
                              <label>Saturday, 24/05/2025</label>
                              <Dot />
                              <span className="text">
                                2 days <span className="text">1 night</span>
                              </span>
                            </div>
                            <div className="hnv_cart_item_info_detail_customer flex gap-2">
                              <Users className="w-6 h-6" />1 Adults
                            </div>
                            <div className="hnv_cart_item_info_detail_policy">
                              <div className="row">
                                <div className="col-12">
                                  <div className="hnv_cart_item_info_detail_policy_left">
                                    <ul className="hnv_cart_item_info_detail_policy_list">
                                      <li className="hnv_cart_item_info_detail_policy_item hnv_cart_item_info_detail_policy_item_date">
                                        <X className="w-6 h-6 rounded-2xl border-2 border-[#00818a]" />
                                        <span>Refundable</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {selectedActivity === index && (
                        <div className={`iso_information_booking`}>
                          <link
                            href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/24.7.0/build/css/intlTelInput.min.css"
                            rel="stylesheet"
                          />
                          <div className="iso_information_tour_item">
                            <div className="title">Primary traveler</div>
                            <div className="box_radio d-flex flex-column">
                              <label
                                htmlFor="primary_traveler_1_tour_863"
                                className="payment_custom_radio"
                              >
                                <Input
                                  type="radio"
                                  className="iso_radio_item_primary"
                                  name="primary_traveler_tour_863"
                                  id="primary_traveler_1_tour_863"
                                  defaultChecked="true"
                                  defaultValue="close"
                                />
                                The contact person is the main traveler.
                                <span className="checkmark" />
                              </label>
                              <label
                                htmlFor="primary_traveler_2_tour_863"
                                className="payment_custom_radio"
                              >
                                <Input
                                  type="radio"
                                  className="iso_radio_item_primary"
                                  name="primary_traveler_tour_863"
                                  id="primary_traveler_2_tour_863"
                                  defaultValue="show"
                                />
                                Other people
                                <span className="checkmark" />
                              </label>
                            </div>
                            <div className="box_primary_traveler_other iso_box_information">
                              <div className="iso_item_body_tour iso_input_box">
                                <div className="row">
                                  <div className="col-12 col-lg-6">
                                    <div className="iso_input_box_item iso_box_item_primary_traveler">
                                      <label>
                                        First name <span>*</span>
                                      </label>
                                      <Input
                                        name="other_first_name_tour_863"
                                        type="text"
                                        className="form-booking_input"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-lg-6">
                                    <div className="iso_input_box_item iso_box_item_primary_traveler">
                                      <label>
                                        Last Name <span>*</span>
                                      </label>
                                      <Input
                                        name="other_last_name_tour_863"
                                        type="text"
                                        className="form-booking_input"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 col-lg-6">
                                    <div className="iso_input_box_item iso_box_item_primary_traveler">
                                      <label>
                                        Date of birth <span>*</span>
                                      </label>
                                      <Input
                                        type="text"
                                        name="other_birthday_tour_863"
                                        className="form-booking_input iso_book_birthday hasDatepicker"
                                        id="dp1747968447952"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-lg-6">
                                    <div className="iso_input_box_item iso_box_item_primary_traveler">
                                      <label>
                                        Gender <span>*</span>
                                      </label>
                                      <select
                                        name="other_gender_tour_863"
                                        className="form-booking_input iso_select2 select2-hidden-accessible"
                                        data-select2-id={6}
                                        tabIndex={-1}
                                        aria-hidden="true"
                                      >
                                        <option
                                          value
                                          disabled
                                          selected
                                          data-select2-id={8}
                                        >
                                          ---- Gender ----
                                        </option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12">
                                    <div className="iso_input_box_item iso_box_item_primary_traveler">
                                      <label>
                                        Email <span>*</span>
                                      </label>
                                      <Input
                                        id="email"
                                        name="other_email_tour_863"
                                        type="email"
                                        className="form-booking_input"
                                        defaultValue=""
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 col-lg-6">
                                    <div className="iso_input_box_item iso_box_item_primary_traveler">
                                      <label>
                                        Country <span>*</span>
                                      </label>
                                      <select
                                        name="other_country_id_tour_863"
                                        className="form-booking_input iso_select2 select2-hidden-accessible"
                                        data-select2-id={9}
                                        tabIndex={-1}
                                        aria-hidden="true"
                                      >
                                        <option
                                          value
                                          disabled
                                          selected
                                          data-select2-id={11}
                                        >
                                          ---- Country ----
                                        </option>
                                        <option value={247}>Vietnam</option>
                                        <option value={2}>Afghanistan</option>
                                        <option value={3}>Albania</option>
                                        <option value={4}>Algeria</option>
                                        {/* Các option quốc gia khác giữ nguyên */}
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-12 col-lg-6">
                                    <div className="iso_input_box_item iso_box_item_primary_traveler">
                                      <label>
                                        Phone number <span>*</span>
                                      </label>
                                      <div className="iti iti--allow-dropdown iti--show-flags iti--inline-dropdown">
                                        <div
                                          className="iti__country-container"
                                          style={{ left: "0px" }}
                                        >
                                          <button
                                            type="button"
                                            className="iti__selected-country"
                                            aria-expanded="false"
                                            aria-label="Selected country"
                                            aria-haspopup="true"
                                            aria-controls="iti-1__dropdown-content"
                                            role="combobox"
                                            title="United States: +1"
                                          >
                                            <div className="iti__selected-country-primary">
                                              <div className="iti__flag iti__us">
                                                <span className="iti__a11y-text">
                                                  United States +1
                                                </span>
                                              </div>
                                              <div
                                                className="iti__arrow"
                                                aria-hidden="true"
                                              />
                                            </div>
                                          </button>
                                          <div
                                            id="iti-1__dropdown-content"
                                            className="iti__dropdown-content iti__hide"
                                          >
                                            <Input
                                              type="text"
                                              className="iti__search-input"
                                              placeholder="Search"
                                              role="combobox"
                                              aria-expanded="true"
                                              aria-label="Search"
                                              aria-controls="iti-1__country-listbox"
                                              aria-autocomplete="list"
                                              autoComplete="off"
                                            />
                                            <span className="iti__a11y-text">
                                              244 results found
                                            </span>
                                          </div>
                                        </div>
                                        <Input
                                          name="other_phone_tour_863"
                                          type="tel"
                                          id="phone"
                                          className="phonenumber form-booking_input iti__tel-input"
                                          autoComplete="off"
                                          data-intl-tel-input-id={1}
                                          placeholder="(201) 555-0123"
                                          style={{ paddingLeft: "47px" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="iso_information_tour_item">
                            <div className="title">Special requirements</div>
                            <div className="box_primary_traveler_other">
                              <div className="iso_item_body_tour iso_input_box">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="iso_input_box_item_area">
                                      <textarea
                                        name="tour_special_863"
                                        rows={3}
                                        placeholder="To type the request to us. E.g. dietary needs, accessibility"
                                        defaultValue=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="iso_button d-flex flex-column">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      onClickNextActivity();
                                    }}
                                    className="iso_cart_button"
                                    id="btn_tour_863"
                                  >
                                    Next
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="iso_item_cart">
            <div className="iso_item_top">
              <div className="d-flex align-items-center justify-content-between">
                <div className="iso_box_right">
                  <span className="number">3</span>
                  <span className="text">Payment details</span>
                </div>
              </div>
            </div>
            <div className={`iso_item_body payment_box_card ${currentStep===3?"active":""}`}>
              <div className="iso_item_description">
                <div className="txt_paymentdetail">
                  <i className="fa-sharp fa-regular fa-shield-check" />
                  This is a secure and SSL encrypted payment. Your credit card
                  details are safe.
                </div>
              </div>
              <div className="billingInfo bg_fff pd20_991 mb20">
                <div className="booking_tab">
                  <div className="payment-choice">
                    <div className="box_payment_mode">
                      <div className="desc_txt_payment">
                        <label className="payment_custom_radio mb10">
                          <Input
                            type="radio"
                            className="chkPayment"
                            name="payment_method"
                            defaultChecked="checked"
                            defaultValue={1}
                          />
                          Cash payments
                          <span className="checkmark" />
                        </label>
                      </div>
                    </div>
                    <div className="box_payment_mode">
                      <div className="desc_txt_payment">
                        <label className="payment_custom_radio mb10">
                          <Input
                            type="radio"
                            className="chkPayment"
                            name="payment_method"
                            defaultValue={2}
                          />
                          Bank Transfer
                          <span className="checkmark" />
                        </label>
                        <i className="fa-regular fa-building-columns" />
                      </div>
                      <div
                        className="SitePay_BankDesc"
                        style={{ display: "none" }}
                      >
                        <p>
                          After making the transfer, please send an email to
                          info@vietiso.com or call hotline +84 243 829 3838 for
                          confirmation from our company.
                        </p>
                        <p>
                          --------------------------------------------------
                        </p>
                        <p>
                          Account Name: Example Account Number: 0001 0001 0008
                          Bank: Example Bank
                        </p>
                      </div>
                    </div>
                    <div className="box_payment_mode">
                      <div className="desc_txt_payment">
                        <label className="payment_custom_radio mb10">
                          <Input
                            type="radio"
                            className="chkPayment ATMDefault"
                            name="payment_method"
                            defaultValue={3}
                          />
                          OnePay
                          <span className="checkmark" />
                        </label>
                        <div className="border_imgpayment">
                          <img
                            src="https://isocms.com/isocms/templates/default/skin/images/icon/one-pay.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div
                        className="SitePay_OnePay"
                        style={{ display: "none" }}
                      >
                        <span className="surharge-ins">
                          Surcharge of 1.5% on ONEPAY ATM.
                        </span>
                      </div>
                    </div>
                    <div className="box_payment_mode">
                      <div className="desc_txt_payment">
                        <label className="payment_custom_radio mb10">
                          <Input
                            type="radio"
                            className="chkPayment ATMDefault"
                            name="payment_method"
                            defaultValue={4}
                          />
                          Debit/Credit Card
                          <span className="checkmark" />
                        </label>
                        <div className="border_imgpayment">
                          <img
                            src="https://isocms.com/isocms/templates/default/skin/images/icon/visa-master.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="box_payment_mode">
                      <div className="desc_txt_payment">
                        <label className="payment_custom_radio mb10">
                          <Input
                            type="radio"
                            className="chkPayment ATMDefault"
                            name="payment_method"
                            defaultValue={5}
                          />
                          PayPal
                          <span className="checkmark" />
                        </label>
                        <div className="border_imgpayment">
                          <img
                            src="https://isocms.com/isocms/templates/default/skin/images/icon/paypal.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div
                        className="SitePay_PayPal"
                        style={{ display: "none" }}
                      >
                        <span className="surharge-ins">
                          You will be redirected to PayPal to complete your
                          purchase securely.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="term_andbutton">
                <div className="txt_termcheckbox">
                  <label className="size16 checktermbox">
                    <Input
                      type="checkbox"
                      name="proviso"
                      id="proviso"
                      defaultChecked
                      disabled
                      defaultValue={1}
                    />
                    I agree
                    <span className="checkmark checkbox_mark" />
                    <a
                      className
                      title="Terms & Conditions"
                      href="/about/terms-conditions.html"
                    >
                      Terms &amp; Conditions
                    </a>{" "}
                    and
                    <a
                      className
                      href="/about/payment-method.html"
                      title="Policy"
                    >
                      Policy
                    </a>{" "}
                    of isoCMS.
                  </label>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <div
                    className="g-recaptcha"
                    data-sitekey="6LfnzTAqAAAAAMxgQ2vA8xGCb3ZZlVgQoEbIlS8l"
                  >
                    <div style={{ width: "304px", height: "78px" }}>
                      <div>
                        <iframe
                          title="reCAPTCHA"
                          width={304}
                          height={78}
                          role="presentation"
                          name="a-ieccnrwmb3j7"
                          frameBorder={0}
                          scrolling="no"
                          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                          src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfnzTAqAAAAAMxgQ2vA8xGCb3ZZlVgQoEbIlS8l&co=aHR0cHM6Ly9pc29jbXMuY29tOjQ0Mw..&hl=en&v=jt8Oh2-Ue1u7nEbJQUIdocyd&size=normal&cb=dcgmx2yrktme"
                        />
                      </div>
                      <textarea
                        id="g-recaptcha-response"
                        name="g-recaptcha-response"
                        className="g-recaptcha-response"
                        style={{
                          width: "250px",
                          height: "40px",
                          border: "1px solid rgb(193, 193, 193)",
                          margin: "10px 25px",
                          padding: "0px",
                          resize: "none",
                          display: "none",
                        }}
                        defaultValue=""
                      />
                    </div>
                    <iframe style={{ display: "none" }} />
                  </div>
                </div>
                <button id="confirm_payment" className="btn_payment">
                  Payment Confirmation
                </button>
              </div>
            </div>
          </div>
          <Input
            type="hidden"
            name="totalFinal"
            id="iso_totalFinal"
            defaultValue={310}
          />
        </form>
        <div className="col-12 col-lg-4">
          <div className="border_item_list_all">
            <div className="border_item_list hnv_cart_item_tour">
              <div className="img_txt_item">
                <div className="iso_cart_right_img">
                  <img
                    className="item_payment w-full h-full object-cover"
                    src="https://dulichsaigon.edu.vn/wp-content/uploads/2024/02/top-cac-loai-hinh-du-lich-pho-bien-tai-viet-nam-nhieu-ban-tre-yeu-thich.jpg"
                    alt="Hanoi & Pu Luong Valley Break 2 Days 1 Night"
                    title="Hanoi & Pu Luong Valley Break 2 Days 1 Night"
                  />
                </div>
                <p className="txt_itempayment">
                  Hanoi &amp; Pu Luong Valley Break 2 Days 1 Night
                </p>
              </div>
              <div className="box_text_item_detail">
                <div className="cart_info_date_item flex flex-row gap-2">
                  <Calendar className="w-6 h-6" />
                  <label>Saturday, 24/05/2025</label>
                  <Dot />
                  <span className="text">
                    2 days <span className="text">1 night</span>
                  </span>
                </div>
                <div className="cart_info_total_customer flex flex-row gap-2">
                  <Users className="w-6 h-6" />
                  <label>1 Adults</label>
                </div>
              </div>
              <div className="box_item_price_detail">
                <div className="txt_price_number mt-2">
                  <p className="txt_pricebold">Price</p>
                  <p className="txt_numberprice">
                    <span className="txt_number_boldprice">$ 310</span>
                  </p>
                </div>
                <div className="txt_redposit">
                  <p className="txt_depositbold">Deposit 50% </p>
                  <span className="txt_paynow">($155)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="total_price_item">
            <div className="txt_toalbook">
              <h2 className="txt_sumprice">Your price summary</h2>
              <div className="list_totalnumb">
                <div className="txt_numbtxttotal">
                  <h3 className="txttotal">Total price</h3>
                  <h4 className="txt_numbtotal" id="totalPrice">
                    $310
                  </h4>
                </div>
                <div
                  className="txt_numbtxttotal"
                  id="priceAfterPromoContainer"
                  style={{
                    display: isPriceAfterPromoVisible ? "flex" : "none",
                  }}
                >
                  <h3 className="txttotal">Price after promotion</h3>
                  <h4
                    className="txt_numbtotal"
                    id="priceAfterPromo"
                    style={{
                      color:
                        promoStatus === "success"
                          ? "var(--secondary-007850, #007850)"
                          : "#1D2D53",
                    }}
                  >
                    ${priceAfterPromo.toFixed(2)}
                  </h4>
                </div>
                <div className="txt_numbtxttotal">
                  <h3 className="txttotal">Booking fees</h3>
                  <h4 className="txt_numbtotal" id="pricebookfee">
                    $155
                  </h4>
                </div>
              </div>
            </div>
            <div className="box_paynow">
              <div className="txtnumb_paynowpadding">
                <div className="numb_txtpaynow">
                  <h3 className="txtpaynow">Pay Now</h3>
                  <h4 className="numb_paynow">
                    $<span className="bold_numbpaynow">155</span>
                  </h4>
                </div>
                <h5 className="text-right txt_taxesall">
                  All taxes and fees included
                </h5>
                <h6 className="text-right txt_paymentcomplete">
                  Complete payment of $155 subject to the Payment Terms of each
                  service
                </h6>
              </div>
            </div>
          </div>
          <div className="items_rebook">
            <div className="txt_itemsbook">
              <img
                src="https://api.iconify.design/hugeicons:time-quarter.svg?color=%23C81E3A"
                title="time-quarter"
                alt="time-quarter"
              />
              <h2 className="txt_items_bookre">
                Items aren't reserved until you book
              </h2>
            </div>
          </div>
          <div
            className="enter_promocode"
            style={{ display: isPromoInputVisible ? "none" : "flex" }}
          >
            <button onClick={showInput}>Enter promo code</button>
          </div>
          <div
            className="enter_promocode"
            style={{ display: isPromoInputVisible ? "flex" : "none" }}
          >
            <Input
              id="promoCodeInput"
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className={
                promoStatus
                  ? promoStatus === "success"
                    ? "success_text"
                    : "error_text"
                  : ""
              }
            />
            <button
              id="applyButton"
              onClick={applyPromoCode}
              style={{
                display: promoStatus === "success" ? "none" : "inline-block",
              }}
            >
              Apply
            </button>
            {promoStatus === "success" && (
              <i
                id="checkIcon"
                className="fa-solid fa-check"
                style={{ display: "block" }}
              />
            )}
          </div>
          {promoMessage && (
            <div
              id="message"
              className={promoStatus}
              style={{
                display: "flex",
                opacity: promoStatus === "error" ? 1 : 1,
              }}
              dangerouslySetInnerHTML={{
                __html:
                  promoStatus === "success"
                    ? `${promoMessage} <span className="remove" onClick={removePromoCode}>x Remove</span>`
                    : promoMessage,
              }}
            />
          )}
          <style>
            {`
                .cart_info_date_item.item_datehotel span {
                  color: var(--chroma-717171, #717171);
                  font-family: "Helvetica Neue";
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 21px;
                }
                .info_item_room {
                  color: var(--primary-1-d-2-d-53, #1D2D53);
                  font-family: "Helvetica Neue";
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 21px;
                }
                .enter_promocode {
                  display: flex;
                  align-items: center;
                  gap: 10px;
                }
                .success_text {
                  border: 2px solid green;
                }
                .error_text {
                  border: 2px solid red;
                }
                .success {
                  color: green;
                  display: flex;
                  align-items: center;
                  gap: 10px;
                }
                .error {
                  color: red;
                  transition: opacity 1s;
                }
                .remove {
                  cursor: pointer;
                  color: #C81E3A;
                }
                .fa-check {
                  color: green;
                }
              `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default PaymentTour;
