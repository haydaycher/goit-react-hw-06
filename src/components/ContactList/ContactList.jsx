import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContact, selectName } from "../../redux/selectors";

export const ContactList = () => {
  const contacts = useSelector(selectContact);
  const filter = useSelector(selectName);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ul className={css.contactList}>
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <li key={contact.id}>
              <Contact data={contact} />
            </li>
          ))
        ) : (
          <li>No contacts found</li>
        )}
      </ul>
    </div>
  );
};

export default ContactList;
