//Iteration 1:
// ReactDOM.render(<h1>Hello! Welcome to React!</h1>,document.getElementById("react-container"))

// Iteration 2:
// let elements = React.createElement(
//   "h1",
//   { id: "h1-tag" },
//   "Hello!",
//   React.createElement("div", null, "Welcome to React!")
// );
// ReactDOM.render(elements, document.getElementById("react-container"));

// function Banana() {
//   return React.createElement(
//     "h1",
//     { id: "h1-tag" },
//     "Hey Kalvians, welcome to react learning",
//     React.createElement("div", null, "Let's rock andd roll!")
//   );
// }
// ReactDOM.render(Banana(), document.getElementById("react-container"));

//Iteration 3:

class Container extends React.Component {
  render() {
    return React.createElement(
      "h1",
      { id: "h1-tag" },
      "Hello!",
      React.createElement("div", null, "Welcome to React!")
    );
  }
}

ReactDOM.render(
  React.createElement(Container),
  document.getElementById("react-container")
);
