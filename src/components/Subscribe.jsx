import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Waitlist from "../pages/Waitlist";

const MailchimpFormContainer = (props) => {
  const postUrl = `https://banq.us21.list-manage.com/subscribe/post?u=1f01671b4b1ac5cca5bebe749&amp;id=b83a91ecee&amp;f_id=002155e1f0`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Waitlist
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpFormContainer;
