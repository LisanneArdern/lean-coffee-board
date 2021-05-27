function createUser({ name, age, email }) {
  return name, Number(age), email;
}

const result = createUser(process.argv[2], process.argv[3], process.argv[4]);
console.log(result);
