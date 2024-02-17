import './Header.css'

function Header(){
    const reactRandom=['Fundamentals','Core','Crucial']
    function createRandom(max){
        return Math.floor(Math.random()*(max+1))
    }

    return(
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactRandom[createRandom(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
}

export default Header;