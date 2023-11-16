import './index.css'
const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" className="feedback-input" placeholder="Name" />
      <input name="email" type="text" className="feedback-input" placeholder="Email" />
      <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
      <input type="submit" value="SUBMIT" />
    </form>
  );
};

export default ContactUs;
