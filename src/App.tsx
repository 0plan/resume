import Portfolio from "./Components/Portfolio";
import Left from "./Components/Left";
import Right from "./Components/Right";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Header from "./Components/Header.tsx";

function App() {
    console.log(window.matchMedia("prefer-color-scheme"))
    const currentTheme = localStorage.getItem('theme')
        || (
            window.matchMedia("(prefers-color-scheme: dark)").matches
                ? 'dark'
                : 'light'
        );
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

  return (
      <div className="bg-white dark:bg-violet-950">
          <Header />
        {/*<div className="w3-content w3-margin-top">*/}
        {/*  <div className="w3-row-padding">*/}
        {/*    <Left/>*/}
        {/*    <Right/>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<Skills/>*/}
        {/*<Portfolio/>*/}
        <Footer/>
      </div>
  );
}

export default App;
