
import { ButtonNewContact } from "./components/ButtonNewContact";
import { ContactsTable } from "./components/ContactsTable";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <>
    <GlobalStyles/>
    <Header/>
    <ButtonNewContact/>
    <ContactsTable/>
    </>
  );
}


