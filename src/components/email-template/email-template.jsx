

export const EmailTemplateUser = ({ firstName }) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>Thank you for send me a message. I will get back with you as soon as possible.</p>
  </div>
);

export const EmailTemplateAdmin = ({ firstName, lastName, email, phone, message }) => (
  <div>
    <h1>Recisbiste un mensaje de {firstName}, {lastName}</h1>
    <p>Email: {email}</p>
    <p>Phone: {phone}</p>
    <p>{message}</p>
  </div> 
)