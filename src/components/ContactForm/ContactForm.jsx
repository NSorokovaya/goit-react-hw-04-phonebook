//import { Component } from 'react';
import { useState } from 'react';
import css from './ContactForm.module.css';

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleNameChange = e => {
//     this.setState({ name: e.currentTarget.value });
//   };

//   handleNumberChange = e => {
//     this.setState({ number: e.currentTarget.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };
export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');




const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });

    e.currentTarget.reset();
     setName('')
    setNumber('')
  };




  
   return (
    <form onSubmit={handleSubmit} className={css.contactForm}>
      <label>
        Name <br />
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Number <br />
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
  }


export default ContactForm;
