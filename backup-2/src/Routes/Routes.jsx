import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home2";
import Layout2 from "../Layout/Layout2";
import Home2 from "../Pages/Home2";
import ContactPage from "../Pages/ContactPage";
import About from "../Pages/About";
import AboutIferp from "../Pages/AboutIferp";
import ImportantDate from "../Pages/ImportantDate";
import CommitteMember from "../Pages/CommitteMember";
import KeynoteSpeaker from "../Pages/KeynoteSpeaker";
import PastSpeaker from "../Pages/PastSpeaker";
import ConferenceFAQ from "../Pages/ConferenceFAQ";
import ApplyCommittee from "../Pages/ApplyCommittee";
import AbstractSub from "../Pages/AbstractSub";
import SubmissionProtocols from "../Pages/SubmissionProtocols";
import SessionTrack from "../Pages/SessionTrack";
import PresentationGuid from "../Pages/PresentationGuid";
import SubmissionFAQ from "../Pages/SubmissionFAQ";
import ConferenceReg from "../Pages/ConferenceReg";
import RegistrationGuidelines from "../Pages/RegistrationGuidelines";
import RegistrationFAQ from "../Pages/RegistrationFAQ";
import PublicationOpp from "../Pages/PublicationOpp";
import PlagiarismPolicy from "../Pages/PlagiarismPolicy";
import PublicationFAQ from "../Pages/PublicationFAQ";
import Session1 from "../Pages/Session1";
import Venue from "../Pages/Venue";
import Session2 from "../Pages/Session2";
import Session3 from "../Pages/Session3";
import Session4 from "../Pages/Session4";
import Session5 from "../Pages/Session5";
import Volunteer from "../Pages/Volunteer";
import History from "../Pages/History";
import ContactThankyou from "../Pages/ContactThankyou";
import CpdBenefits from "../Pages/CpdBenefits";
import NotFound from "../Pages/NotFound";
import TentativeProgram from "../Pages/TentativeProgram";
import ExclusiveEvent from "../Pages/ExclusiveEvent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/about-iferp",
        element: <AboutIferp />,
      },
      {
        path: "/important-dates",
        element: <ImportantDate />,
      },
      {
        path: "/committee-members",
        element: <CommitteMember />,
      },
      {
        path: "/keynote-speakers",
        element: <KeynoteSpeaker />,
      },
      {
        path: "/past-conference-speakers",
        element: <PastSpeaker />,
      },
      {
        path: "/conference-faq",
        element: <ConferenceFAQ />,
      },
      {
        path: "/apply-for-committee",
        element: <ApplyCommittee />,
      },
      {
        path: "/abstract-submission",
        element: <AbstractSub />,
      },
      {
        path: "submission-protocols",
        element: <SubmissionProtocols />,
      },
      {
        path: "scientific-tracks",
        element: <SessionTrack />,
      },
      {
        path: "presentation-guidelines",
        element: <PresentationGuid />,
      },
      {
        path: "submission-faq",
        element: <SubmissionFAQ />,
      },
      {
        path: "conference-registration",
        element: <ConferenceReg />,
      },
      {
        path: "registration-guidelines",
        element: <RegistrationGuidelines />,
      },
      {
        path: "registration-faq",
        element: <RegistrationFAQ />,
      },
      {
        path: "journals-and-publication",
        element: <PublicationOpp />,
      },
      {
        path: "plagiarism-policy",
        element: <PlagiarismPolicy />,
      },

      {
        path: "journal-faq",
        element: <PublicationFAQ />,
      },
      {
        path: "session-1",
        element: <Session1 />,
      },
      {
        path: "session-2",
        element: <Session2 />,
      },
      {
        path: "session-3",
        element: <Session3 />,
      },
      {
        path: "session-4",
        element: <Session4 />,
      },
      {
        path: "session-5",
        element: <Session5 />,
      },
      {
        path: "session-5",
        element: <Session5 />,
      },
      {
        path: "venue",
        element: <Venue />,
      },

      {
        path: "call-for-volunteers",
        element: <Volunteer />,
      },
      {
        path: "past-history",
        element: <History />,
      },
      {
        path: "past-history",
        element: <History />,
      },
      {
        path: "/thank-you",
        element: <ContactThankyou />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      {
        path: "/cpd-benefits",
        element: <CpdBenefits />,
      },
      {
        path: "/tentative-program",
        element: <TentativeProgram />,
      },
      {
        path: "/exclusive-event",
        element: <ExclusiveEvent />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
