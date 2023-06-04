let tasksArray = [
  ["Nathalie Nader Nabil", "Task 01", "Option 2"],
  ["Youssef Mohamed Ahmed Mohamed Youssef", "Task 01", "Option 1"],
  ["Salma Nasreldin", "Task 01", "Option 1"],
  ["Engy Mostafa", "Task 01", "Option 1"],
  ["Engy Mostafa", "Task 01", "Option 1"],
  ["Engy ahmed mostafa ", "Task 01", "Option 1"],
  ["Abdelhay Nader Abdelhay Abozayed", "Task 01", "Option 1"],
  ["Abdelrahman Shemies", "Task 01", "Option 1"],
  ["Alaa Ahmed", "Task 01", "Option 2"],
  ["Youssef Fathy Mahmoud", "Task 01", "Option 1"],
  ["Mark Bassem", "Task 01", "Option 1"],
  ["Anas Ahmed", "Task 01", "Option 1"],
  ["Adham Hesham", "Task 01", "Option 1"],
  ["Mohamed Ahmed Fahmi", "Task 01", "Option 1"],
  ["rola wafi", "Task 01", "Option 1"],
  ["Moataz Youssef", "Task 01", "Option 2"],
  ["Ahmad Salama", "Task 01", "Option 1"],
  ["Mohamed Ahmed Fahmi", "Task 01", "Option 1"],
  ["Ahmad Salama Abdelaziz", "Task 01", "Option 2"],
  ["Kareem Ramzi El-Tahlawi", "Task 01", "Option 1"],
  ["Alaa Ahmed", "Task 01", "Option 2"],
  ["rola wafi", "Task 01", "Option 2"],
  ["Mohamed Fahmi", "Task 01", "Option 1"],
  ["Mohamed Fahmi", "Task 01", "Option 2"],
  ["Alaa Ahmed", "Task 01", "Option 2"],
  ["Abdelrahman Shemies", "Task 01", "Option 1"],
  ["Nathalie Nader", "Task 01", "Option 1"],
  ["Mariam Ahmed", "Task 01", "Option 1"],
];

// by set
console.log(Array.from(new Set(tasksArray.map(el=>el[0]))))

// by map
const map = new Map();
tasksArray.map(el=>map.get(el[0]) ? map.set(el[0], map.get(el[0])+1) : map.set(el[0], 1));
map.forEach((value, key)=>console.log(key, value))