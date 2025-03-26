import React from "react";

const FAQList = () => {
  const faqs = [
    {
      question: "Q.1: What are important deadlines for the conference?",
      answer:
        "You can easily find the deadlines on our Home page and Registration Page. We encourage you to stay updated and not miss out!.",
    },
    {
      question: "Q.2: Can you sponsor our travel and accommodation?",
      answer:
        "Unfortunately, as this event is a non-funded event without sponsors, we are unable to cover travel and accommodation costs. We understand this might pose challenges and appreciate your understanding.",
    },
    {
      question: "Q.3: Can you provide me with the invitation letter?",
      answer:
        "Absolutely! An official invitation letter on our conference letterhead will be promptly issued once your registration is completed. We look forward to welcoming you!",
    },
    {
      question: "Q.4: What will be the visa process/fee to enter the host country?",
      answer:
        "Participants are kindly requested to manage the visa process independently. You can visit the official website of the Immigration Department of Malaysia at ",
      link: {
        url: "https://malaysiavisa.imi.gov.my/evisa/evisa.jsp",
        text: "https://malaysiavisa.imi.gov.my/evisa/evisa.jsp",
      },
    },
    {
      question: "Q.5: Can I bring another person to the conference to accompany me?",
      answer:
        "Yes! You can bring another person by paying the accompanying person fee. We hope they enjoy the conference alongside you!",
    },
    {
      question: "Q.6: Can you provide a certificate for the accompanying person?",
      answer:
        "Unfortunately, we can offer certificates only to co-authors who are part of the conference. Still, we're really happy to welcome your accompanying person to join us for a great experience!.",
    },
  ];

  return (
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
  );
};

export default FAQList;
