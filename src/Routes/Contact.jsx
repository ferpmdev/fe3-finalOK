import { useState } from 'react';
import Form from '../Components/Form';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const [show, setShow] = useState(false);

  const [user, setUser] = useState({
    name: '',
    email: '',
  });
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name.trim().length > 5 && user.email.length > 5) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  console.log(user);

  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form user={user} setUser={setUser} handleSubmit={handleSubmit} />
      {show && (
        <h1>{`Gracias ${user.name}, te contactaremos cuando antes vía mail`}</h1>
      )}
    </div>
  );
};

export default Contact;
