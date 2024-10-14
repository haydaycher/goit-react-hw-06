import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <SearchBox />
      <ContactList />
    </div>
  );
}
