
import React from "react";
import NamePerson from "./NamePerson";
import PersonDetails from "./PersonDetails";
import PeopleList from "./PeopleList";
import PeopleTable from "./PeopleTable";
import FirstTeenager from "./FirstTeenager";
function App() {
  return (
    <div>
      <h1 className="h1Style">Hello world!</h1>
      
      <section>
        <h2>Exercise 1: Display a list of names</h2>
        <NamePerson />
      </section>
      <section>
        <h2>Exercise 2: Display a person's details</h2>
        <PersonDetails />
      </section>
     
      <section>
        <h2>Exercise 3: Display a list of people</h2>
        <PeopleList />
      </section>
      
      <section>
        <h2>Exercise 4: Display a table of people</h2>
        <PeopleTable />
      </section>
     
      <section>
        <h2>Exercise 5: Find the first teenager</h2>
        <FirstTeenager />
      </section>
    </div>
  );
}

export default App;



