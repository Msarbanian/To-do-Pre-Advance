const customer = {
  first_name: "Bob",
  last_name: "Dylan",
};

// Your code inside these <div> tags
const output = (
  <div>
    <h1>My first name is {customer.first_name}</h1>
    <h2>My last name is {customer.last_name}</h2>
  </div>
);
function CustomerInformation() {
  return output;
}
export default CustomerInformation;
