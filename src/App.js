import './App.css';
import Header from "./components/header"
import Footer from "./components/footer"
import Main from "./components/main"


function App() {
  const data = {
    welcome: "Welcome to component and props corner",
    title: "React",
    subtitle: "JavaScript Library",
    user: {
      firstName: "John",
      lastName: "Sedrick",
    },
    techSkill: ["HTML", "CSS", "JavaScript", "React"],
    date: new Date(),

  };

  const greetPeople = () => {
    alert("Welcome to my corner")
  }

  const showDate = () => {
    let date = new Date();
    alert(date)
  }

  return (
    <div className="container">
      <Header
        welcome={data.welcome}
        title={data.title}
        subtitle={data.subtitle} />
      <Main
        user={data.user}
        techs={data.techSkill}
        greetPeople={greetPeople}
        showDate={showDate} />
      <Footer date={data.date} />

    </div>
  );
}

export default App;
