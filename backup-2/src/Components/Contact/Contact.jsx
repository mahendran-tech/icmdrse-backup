const Contact = () => {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="row cs_gap_y_50">
          <div className="col-lg-12">
            <div className="cs_contact_desc">
              <h3 className="cs_fs_24 cs_mb_33">Conference Secretariat</h3>
              <div className="cs_contact_info_grid border boprder-1">
                <div className="cs_iconbox gap-3 cs_style_5">
                  <div className=" cs_center cs_accent_bg_light cs_heading_color">
                    <div
                      className="p-4 d-flex flex-column justify-content-center "
                      style={{width: "250px"}}>
                      <div
                        style={{
                          width: "80px",
                          height: "80px",
                          display: "contents",
                        }}>
                        <i
                          class="bi bi-person-down"
                          style={{fontSize: "90px", textAlign: "center"}}
                        />
                      </div>

                      <h5 className="mt-4 text-center">Swathi </h5>
                    </div>
                  </div>
                  <div className="cs_iconbox_info py-3">
                    <h3 className="cs_fs_18 cs_semibold cs_mb_2">
                      ABSTRACTS, REGISTRATIONS AND PAYMENTS INQUIRIES, <br />
                      <span className="cs_fs_16 ">
                        International Conference Coordinator
                      </span>
                    </h3>
                    <div className="d-flex gap-2 mt-3">
                      <div className="flex-1 cs_iconbox_icon cs_center border border-">
                        <i className="bi bi-telephone-inbound-fill" />
                      </div>
                      <div>
                        <h3 className="cs_fs_16 cs_semibold cs_mb_2">
                          Contact details:
                        </h3>
                        <a style={{color: "red"}} href="+1 (626) 649-4484">
                          +1 (626) 649-4484
                        </a>
                      </div>
                    </div>
                    <div className="d-flex gap-2 mt-3">
                      <div className="flex-1 cs_iconbox_icon cs_center border border-">
                        <i className="bi bi-envelope-fill" />
                      </div>
                      <div>
                        <h3 className="cs_fs_16 cs_semibold cs_mb_2">
                          Email Address :
                        </h3>
                        <a
                          style={{color: "red"}}
                          href="mailTo:info@icmdrse.com">
                          info@icmdrse.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs_height_44 cs_height_lg_30" />
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />

      {/* <div className="cs_navigation_map wow fadeInUp">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528001631!2d-74.14448723354508!3d40.69763123329699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1729318880502!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
    </div> */}
    </section>
  );
};

export default Contact;
