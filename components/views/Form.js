export default () => `
<section id="form"><form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/YOUR_EMAIL_HERE" method="post">
  <label for="full-name">Full Name</label>
  <input type="text" name="name" id="full-name" placeholder="First and Last" required="">
  <label for="email-address">Email Address</label>
  <input type="email" name="_reply" id="email-address" placeholder="email@domain.tld" required="">
  <label for="Comments">Comments</label>
  <textarea rows="5" name="message" id="message" placeholder="Comments" required=""></textarea>
  <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
<input type="submit" value="Submit">
</form></section>
`;
