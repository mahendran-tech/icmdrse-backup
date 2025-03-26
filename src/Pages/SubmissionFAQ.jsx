import TopContent from "../Components/Icmdrse/TopContent";
import BreadCumb from "../Components/Common/BreadCumb";
import FAQItem from "../Components/Faq/FAQItem";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";

const SubmissionFAQ = () => {
  const faqs = [
    {
      question:
        "Q.1: If my abstract is not accepted, can I still attend the conference?",
      answer:
        "Yes, you can still attend the conference even if your abstract is not accepted. You can participate as a Listener or Delegate, allowing you to engage with the sessions and network with other attendees.",
    },
    {
      question: "Q.2: How do I submit my abstract?",
      answer: (
        <>
          {" "}
          To submit your abstract, please use the Abstract Template available
          via the Abstract Page link. If you experience any issues, you can also
          email your abstract to{" "}
          <a href="mailto:info@icmdrse.com.">info@icmdrse.com </a>{" "}
        </>
      ),
    },
    {
      question: "Q.3: I am the co-author of the paper, can I present the work?",
      answer:
        "Yes, you can present the work with the consent of the main author. However, without their approval,  you will not be permitted to present the paper.",
    },
    {
      question:
        "Q.4: Do I need to submit an abstract to attend the conference?",
      answer:
        "No, you do not need to submit an abstract to attend the conference. You can simply register as a Delegate or Listener.",
    },
    {
      question: "Q.5: Is there an option for a Video/Skype presentation?",
      answer:
        "Yes, we do offer Video/Skype presentations. Please refer to the format and guidelines provided in the Author Guidelines for more details.",
    },
    {
      question:
        "Q.6: Can I join as an Advisory Board Member, Session Chair, or Keynote Speaker?",
      answer:
        "To apply for roles such as Advisory Board Member, Session Chair, or Keynote Speaker, please complete the online application form for Committee members. Be sure to upload your photo and CV, or you can contact the Program Manager at info@icmdrse.com for further assistance.",
    },
    {
      question: "Q.7: Can you sponsor our travel and accommodation?",
      answer:
        "Regrettably, as a self funded  organization, IFERP is unable to provide sponsorship for travel and accommodation. However, we do offer support to exceptional members who have made significant contributions to the association.",
    },
    {
      question: "Q.8: Can the submission date be extended?",
      answer:
        "We encourage participants to submit abstracts by the deadline. However, extensions may be considered under valid circumstances such as natural disasters, health issues, maternity leave, or political challenges.",
    },
    {
      question:
        "Q.9: Can I pay the early bird fee even after the early bird date expires?",
      answer:
        "The early bird fee is only available within the specified timeframe. Unfortunately, it cannot be applied once the early bird registration period has ended.",
    },
    {
      question: "Q.10: How many pages are allowed for a full paper?",
      answer: "A full paper can be between 6 to 8 pages in length.",
    },
    {
      question: "Q.11: What is the price for extra pages, if any?",
      answer:
        "The pricing for extra pages varies depending on the specific journal you are submitting to. Please refer to the journal's guidelines for accurate information.",
    },
    {
      question: "Q.12: What is the word limit for the abstract?",
      answer:
        "The abstract should be between 200 to 250 words, offering a concise overview of your research.",
    },
    {
      question:
        "Q.13: Is it necessary to include my biography in the abstract?",
      answer:
        "Yes, it is essential to include a brief biography (100-150 words) in your abstract. This helps readers connect with the researcher behind the work.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          International Conference 2025 | FAQ | Submissions | ICMDRSE
        </title>
        <meta
          name="description"
          content="The ICMDRSE 2025 Submission FAQ page addresses key questions about submitting abstracts, co-author participation, registration, video presentations, and deadlines. It also includes guidelines on word limits, biographies, and publication processes"
        />
      </Helmet>
      <div className="serviceDetails">
        <BreadCumb
          bgImg="assets/img/page_heading_1.jpg"
          Title="Submission FAQ"
        />
        <div className="mt-3">
          <TopContent title="Frequently Asked Questions?" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="col-lg-12 col-sm-12 list-group">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    link={faq.link}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmissionFAQ;
