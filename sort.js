var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 5, name: "alex",     age: 65 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 },
  { id: 6, name: "alex",     age: 85 }
];

var output = students.sort(function(a, b){
  if(a.name<b.name)
    return -1;
  if(a.name>b.name)
    return 1;
  else if (a.age<b.age)
    return -1;
  else if (a.age>b.age)
    return 1;
  else
    return 0;
  });
console.log(output);