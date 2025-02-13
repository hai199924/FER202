// PeopleList.js
function PeopleList() {
    const people = [
      { name: "Alice", age: 25, occupation: "Engineer" },
      { name: "Bob", age: 18, occupation: "Student" },
      { name: "Charlie", age: 30, occupation: "Teacher" },
    ];
  
    return (
      <div>
        <h2>People List</h2>
        <ul>
          {people.map((person, index) => (
            <li key={index}>
              {person.name} - {person.age} - {person.occupation}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default PeopleList;
  