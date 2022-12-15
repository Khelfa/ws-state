import React, { Component } from "react";

class App extends Component {
  // Set up initial state with a Person object and a boolean shows
  state = {
    person: {
      fullName: "Walid Khalfa",
      bio: "I'm a full stack web developer from Tunisia.My passion for web development started from my hunger to make things. HTML, CSS and JavaScript are my tools.",
      imgSrc: "https://via.placeholder.com/150",
      profession: "Developer",
    },
    shows: false,
  };

  // Set up a variable to track the time since the component was mounted
  timeSinceMount = 0;

  // When the component mounts, start a setInterval to increment the timeSinceMount variable
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);
  }

  // When the component unmounts, clear the setInterval
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Toggle the shows state when the button is clicked
  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, timeSinceMount } = this.state;
    return (
      <div>
        {/* Display the time since the component was mounted */}
        <p>Time since last mount: {timeSinceMount} seconds</p>
        {/* Display the person's profile if the shows state is true */}
        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}
        {/* Button to toggle the shows state */}
        <button onClick={this.toggleShow}>
          {shows ? "Hide profile" : "Show profile"}
        </button>
      </div>
    );
  }
}

export default App;
