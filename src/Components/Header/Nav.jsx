import DropDown from "./DropDown";
import {Link} from "react-router-dom";

export default function Nav({setMobileToggle}) {
  return (
    <ul className="cs_nav_list">
      <li>
        <Link
          to="/"
          onClick={() => {
            setMobileToggle(false);
            window.scrollTo({top: 0, behavior: "smooth"});
          }}>
          Home
        </Link>
      </li>

      <li className="menu-item-has-children">
        <Link to="/">About</Link>
        <DropDown>
          <ul>
            <li>
              <Link
                to="/about"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"});
                }}>
                About Conference
              </Link>
            </li>
            <li>
              <Link
                to="/about-iferp"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"});
                }}>
                About IFERP
              </Link>
            </li>
            <li>
              <Link
                to="/important-dates"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"});
                }}>
                Important Date
              </Link>
            </li>
            <li>
              <Link
                to="/keynote-speakers"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"});
                }}>
                Keynote Speaker
              </Link>
            </li>
            <li>
              <Link
                to="/past-conference-speakers"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"});
                }}>
                Past Conference Speakers
              </Link>
            </li>
            <li>
              <Link
                to="/conference-faq"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"});
                }}>
                Conference FAQ
              </Link>
            </li>
            {/* <li className="menu-item-has-children">
              <div className="d-flex">
                {" "}<Link to="/">Conference Speaker</Link>{" "}
                <i
                  class="bi bi-caret-right-fill"
                  style={{ fontSize: "12px", alignSelf: "flex-end" }}
                />{" "}
              </div>

              <DropDown>
                <ul>
                  <li>
                    <Link
                      to="/keynote-speakers"
                             onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                    >
                      Keynote Speaker
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/keynote-speakers"
                             onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                    >
                      Past Conference Speakers
                    </Link>
                  </li>
                </ul>
              </DropDown>
            </li> */}
          </ul>
        </DropDown>
      </li>
      <li className="menu-item-has-children">
        <Link
          to="/"
          onClick={() => {
            setMobileToggle(false);
            window.scrollTo({top: 0, behavior: "smooth"});
          }}>
          Committee
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link
                to="/committee-members"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"});
                }}>
                Organizing Committee Member
              </Link>
            </li>
            <li>
              <Link
                to="/apply-for-committee"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"});
                }}>
                Apply For Committee Members
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link
          to="/"
          onClick={() => {
            setMobileToggle(false);
            window.scrollTo({top: 0, behavior: "smooth"});
          }}>
          Submission
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link
                to="/abstract-submission"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"});
                }}>
                Abstract/Paper Submission
              </Link>
            </li>
            <li>
              <Link
                to="/submission-protocols"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"});
                }}>
                Submission protocols
              </Link>
            </li>
            <li>
              <Link
                to="/scientific-tracks"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"});
                }}>
                Session & Tracks
              </Link>
            </li>
            <li>
              <Link
                to="/presentation-guidelines"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"});
                }}>
                Mode of Presentation
              </Link>
            </li>
            <li>
              <Link
                to="/submission-faq"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"});
                }}>
                Submission FAQ
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link to="/"> Registration</Link>
        <DropDown>
          <ul>
            <li>
              <Link
                to="/conference-registration"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"});
                }}>
                Conference Registration
              </Link>
            </li>
            <li>
              <Link
                to="/registration-guidelines"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"});
                }}>
                Registration Guidelines
              </Link>
            </li>
            <li>
              <Link
                to="/registration-faq"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"});
                }}>
                Registration FAQ
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link
          to="/"
          onClick={() => {
            setMobileToggle(false);
            window.scrollTo({top: 0, behavior: "smooth"});
          }}>
          Publication
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link
                to="/journals-and-publication"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"});
                }}>
                Journal & Publication
              </Link>
            </li>
            <li>
              <Link
                to="/plagiarism-policy"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"});
                }}>
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/journal-faq"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"});
                }}>
                Publication FAQ
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link
          to="/"
          onClick={() => {
            setMobileToggle(false);
            window.scrollTo({top: 0, behavior: "smooth"});
          }}>
          venue
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link
                to="/venue"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"});
                }}>
                Venue
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"});
                }}>
                Contact
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link
          to="/"
          onClick={() => {
            setMobileToggle(false);
            window.scrollTo({top: 0, behavior: "smooth"});
          }}>
          Highlights
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link
                to="/tentative-program"
                onClick={() => {
                  setMobileToggle(false);
                  window.scrollTo({top: 0, behavior: "smooth"});
                }}>
                Tentative Program
              </Link>
            </li>
            <li>
              <a
                href="https://www.iferp.in/scholarship-program.php "
                onClick={() => {
                  setMobileToggle(false);
                }}
                target="_blank">
                Award
              </a>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link
          to="/mobility-exchange-program"
          onClick={() => {
            setMobileToggle(false);
            window.scrollTo({top: 0, behavior: "smooth"});
          }}>
          <span
            style={{
              border: "1px",
              borderStyle: "solid",
              borderColor: "#00333",
              borderRadius: "10px",
              padding: "3px 7px",
            }}>
            Exclusive Event{" "}
          </span>
        </Link>
      </li>
      {/* <li>
        <Link
          to="/tentative-program"
          onClick={() => {
            setMobileToggle(false);
            window.scrollTo({top: 0, behavior: "smooth"});
          }}>
          Tentative Program
        </Link>
      </li>
      <li>
        <a
          href="https://www.iferp.in/scholarship-program.php "
          onClick={() => {
            setMobileToggle(false);
          }}
          target="_blank">
          Award
        </a>
      </li> */}
      {/* <li>
        <Link
          to="/contact-us"
          onClick={() => {
            setMobileToggle(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Contact
        </Link>
      </li> */}
    </ul>
  );
}
