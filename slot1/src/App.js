import logo from './logo.svg';
import './App.css';

function App() {
  var people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9}, 
    {name: 'John', age: 40}, 
    {name: 'Ann', age: 19}, 
    {name: 'Elisabeth', age: 16}
  ]
 
  const q1 = people.find(person => person.age >= 10 && person.age <= 20)
 
  const q2 = people.filter(person => person.age >= 10 && person.age <= 20)
  
  const q3 = people.every(person => person.age >= 10 && person.age <= 20)
 
  const q4 = people.some(person => person.age >= 10 && person.age <= 20)
  console.log("First person off the people array is teenager: ", q1);
  console.log("All person of the people array is teenager: ", q2);
  console.log("Are all teenagers? ", q3);
  console.log("Is any teenager? ", q4);
  //Bai 2.
  var array = [1, 2, 3, 4]
  
  const sum = array.reduce((acc, value) => acc + value, 0);
  console.log("Sum of array: ", sum);
  //Bai 3.
  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
    ];
    
    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
    
    const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }
    };
  console.log("Print the name of each company");
  companies.forEach(company => {
  console.log(company.name);
  }
  );
  console.log("Print the name of each company that started after 1987");
  companies.forEach(company =>{
  if(company.start>1987){
    console.log(company.name);
  } else{
    console.log("Can not found company");
  }
  });
  console.log('-------------------------------');
 \
  const retailCompanies = companies.filter(company => company.category === 'Retail');
  
  retailCompanies.forEach(company => {
  console.log(`Name: ${company.name}`);
  console.log(`Category: ${company.category}`);
  console.log(`Start Year: ${company.start + 1}`);
  console.log(`End Year: ${company.end}`);
  console.log('-------------------------------');
  });
  
  
  console.log('-------------------------------');
  const sortedCompanies = companies.sort((company1, company2) => company1.end - company2.end);
  
  console.log(sortedCompanies);
  
  console.log('-------------------------------');
  const sortedCompaniesbyAge = ages.sort((company1, company2) => company2.age - company1.age);
  
  console.log(sortedCompaniesbyAge);
  
  const sum3 = ages.reduce((acc, value) => acc + value, 0);
  console.log(sum3)
  
  
  function sum4(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
  }
  console.log(`Sum: ${sum4(1, 2, 3, 4, 5)}`);
  function combieneAndFlaten(...args){
    const result =[]
    for (const arg of args){
      if(Array.isArray(arg)){
        result.push(...arg)
      } else{
        result.push(arg)
      }
    }
    return result
  }
  const date = combieneAndFlaten(1,2,3,4,"Hello",5,6)
  console.log(date)

  const { address: { street } } = person;
  
  console.log(street); // Output: Lalaland 12
  
  function getNextNumber() {
    let counter = 0;
    return function() {
      counter++;
      return counter;
    }
  }
  const numberGenerator = getNextNumber();
  console.log(numberGenerator()); 
  console.log(numberGenerator()); 
  console.log(numberGenerator()); 
  
  function getQueryParamsFromUrl(url) {
    if (!url || !url.includes('?')) {
      return {};
    }
    const queryString = url.split('?')[1];
    const params = new URLSearchParams(queryString);
    const queryParams = {};
    for (const [key, value] of params.entries()) {
      queryParams[key] = value;
    }
  
    return queryParams;
  }
  const url = "https://www.example.com/search?q=javascript&sort=newest";
  const queryParams = getQueryParamsFromUrl(url);
  console.log(queryParams); 
  
  //Bai4.
  class Rectangle {
    constructor(length, width) {
      this.length = length;
      this.width = width;
    }
  
    getArea() {
      return this.length * this.width;
    }
  
    toString() {
      return `Rectangle [length=${this.length}, width=${this.width}]`;
    }
  }
  
  
  class Triangle extends Rectangle {
    constructor(length, width, height) {
      super(length, width); 
      this.height = height;
    }
  
    getArea() {
      return (this.length * this.height) / 2; 
    }
  
    toString() {
      return `Triangle [length=${this.length}, width=${this.width}, height=${this.height}]`;
    }
  }
  
  // Usage example
  const rectangle = new Rectangle(5, 4);
  console.log(rectangle.getArea());
  console.log(rectangle.toString()); 
  
  const triangle = new Triangle(3, 4, 6);
  console.log(triangle.getArea()); 
  console.log(triangle.toString()); 
  
  function App() {
    return (
      <>
      </>
    );
  }

export default App;
