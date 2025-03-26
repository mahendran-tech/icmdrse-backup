import React from "react";
import TopContent from "../Components/Icmdrse/TopContent";
import BreadCumb from "../Components/Common/BreadCumb";
import FAQItem from "../Components/Faq/FAQItem";
import {Helmet} from "react-helmet-async";
const PublicationFAQ = () => {
  const faqs = [
    {
      question:
        "Q.1: I am a member of IFERP. Do I get a discount? How can I register?",
      answer:
        "Yes, IFERP members receive a special discounted registration fee. You’ll receive an invoice via email with the discount and simple instructions to complete your registration.",
    },
    {
      question: "How do I register?",
      answer:
        "Registration is easy! Visit our secure [Registration Page] and follow the steps. For assistance, contact the Program Manager at info@icmdrse.com.",
    },
    {
      question: "Q.3: What is included in the registration price?",
      answer: (
        <>
          {" "}
          Your registration includes:{" "}
          <ul className="ms-5">
            <li> Access to all conference sessions </li>
            <li> Lunch and snacks on the conference day</li>
            <li> Conference proceedings</li>
            <li> Speaker presentations </li>
            <li> Conference kit with certificates</li>
          </ul>
        </>
      ),
    },
    {
      question: "Q.4: Is there a discount for groups of 5 or more?",
      answer:
        "Yes! For groups of 5 or more from the same organization, email the Program Manager at info@icmdrse.com for details and special offers.",
      //   link: {
      //     url: "/apply-for-committee",
      //     text: "link"
      //   }
    },
    {
      question:
        "Q.5: I cannot attend after registering. Can I cancel or transfer my registration?",
      answer:
        "Substitutions are allowed at no extra charge. However, registrations are non-refundable as stated during payment. For transfers, send details to info@icmdrse.com.",
    },
    {
      question: "Q.6: Is there a discount for submitting two research papers?",
      answer:
        "Yes! Discounts are available for submitting two papers. Contact the Program Manager for more information.",
    },
    {
      question: "Q.7: Can I get a payment receipt with taxes included?",
      answer: "Absolutely! We’ll provide a payment receipt inclusive of taxes.",
    },
    {
      question: "Q.8:  Can you include my university name on the receipt?",
      answer:
        "Yes, we can add your university name on the receipt for funding purposes.",
    },
    {
      question: "Q.9:  Can I pay onsite?",
      answer:
        "Yes, onsite payment is available. Please note, onsite registration fees are slightly higher than online fees.",
    },
    {
      question: "Q.10:  Can I register after the deadline?",
      answer:
        "Yes, you can register after the deadline, but note that late registrations incur higher fees. To save costs, register early.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Journal Publication FAQ and Guidelines | ICMDRSE 2025</title>
        <meta
          name="description"
          content="Find answers to common questions about journal publication at ICMDRSE 2025. Learn about SCOPUS indexing, registration fees, co-authors, proceedings, and certificates. Get detailed publication guidance here"
        />
      </Helmet>
      <div className="serviceDetails">
        <BreadCumb
          bgImg="assets/img/page_heading_1.jpg"
          Title="Publication FAQ"
        />
        <div className="mt-3">
          <TopContent
            title="Publication FAQ"
            content="Facing issues or have questions about the registration process?
Explore the answers below. If you still need assistance, feel free to contact us at info@icmdrse.com."
          />
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

export default PublicationFAQ;
