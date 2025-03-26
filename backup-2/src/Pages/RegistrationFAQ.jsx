import React from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import TopContent from "../Components/Icmdrse/TopContent";
import FAQItem from "../Components/Faq/FAQItem";
import { Link } from "react-router-dom";

const RegistrationFAQ = () => {
  const faqs = [
    {
      question:
        "Q.1: I am a member of IFERP, Do I get a discount? How can I register?",
      answer:
        "Yes, the members of IFERP will get a discount. You will receive an invoice in your email with the special discounted registration fee. Follow the simple registration instructions mentioned in the email, and you're all set."
    },
    {
      question: "Q.2: How do I register?",
      answer:(<> You can register online on our secured website by following this <Link style={{color:"red"}} to="/conference-registration" >Registration Page</Link>. If you have any questions or concerns, please call or email the Program Manager at <a className="text-danger" href="mailto:info@icmdrse.com" target="_blank">  info@icmdrse.com</a> and they will promptly answer your questions. </>)
    },
    {
      question: "Q.3: What is included in the registration price?",
      answer:
        "Your registration covers a lot – from a delicious lunch on the conference day to access to all sessions, snacks, Conference Proceedings, speaker presentations, and a conference kit with certificates."
    },
    {
      question:
        "Q.4:  Is there an additional discount for groups of 5 or more?",
      answer:
        "Absolutely! If you have a group of 5 or more from the same company, drop a line to our Program Manager at info@icmdrse.com for all the details. We're here to make your group's experience amazing and budget-friendly. ",
    //   link: {
    //     url: "https://malaysiavisa.imi.gov.my/evisa/evisa.jsp",
    //     text: "https://malaysiavisa.imi.gov.my/evisa/evisa.jsp"
    //   }
    },
    {
      question:
        "Q.5:  I have not registered, but cannot attend. Can I cancel or transfer my registration?",
      answer:
        "You may substitute another individual in your place at no extra charge, but we do not refund registrations. That is clearly stated on the payment page of the registration process and confirmation message. If transferring, please forward the information to info@icmdrse.com"
    },
    {
      question:
        "Q.6: Is there any discount if I submit 2 research papers?",
      answer:
        "Yes, indeed! We offer a discount for submitting two papers. Reach out to our Program Manager for more details."
    },
    {
        question:
          "Q.7: Can you provide me a payment receipt with taxes?",
        answer:
          "Yes, we'll ensure you get a payment receipt inclusive of taxes."
      },
      {
        question:
          "Q.8: Can you mention the university name in the receipt as they will be funding the conference?",
        answer:
          "Of course! We can include the university name on the receipt to align with your funding arrangements."
      },
      {
        question:
          "Q.9: Can I pay onsite?",
        answer:
          "Yes, you have the option to pay on-site. Do note, the fee will be slightly higher than the online registration."
      },
      {
        question:
          "Q.10: Is it okay if I will register after the deadline?",
        answer:
          "Is it okay if I will register after the deadline?"
      }
  ];

  return (
    <div className="serviceDetails">
      <BreadCumb bgImg="assets/img/page_heading_1.jpg" Title="Conference FAQ" />
      <div className="mt-3">
        <TopContent
          title="Registration FAQ"
          content="Facing problems or having queries regarding the registration process? Explore our Frequently Asked Questions below. If you can't find the information you need, don't hesitate to contact us "
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="col-lg-12 col-sm-12 list-group">
              {faqs.map((faq, index) =>
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  link={faq.link}
                />
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFAQ;
