// FirstTeenager.js
function FirstTeenager() {
    const people = [
      { name: "Alice", age: 25, occupation: "Engineer" },
      { name: "Bob", age: 18, occupation: "Student" },
      { name: "Charlie", age: 30, occupation: "Teacher" },
    ];
  
    const teenager = people.find((person) => person.age >= 13 && person.age <= 19);
  
    return (
      <div>
        <h2>First Teenager</h2>
        {teenager ? (
          <p>
            {teenager.name} ({teenager.age} years old)
          </p>
        ) : (
          <p>No teenager found.</p>
        )}
      </div>
    );
  }
  
  export default FirstTeenager;
  