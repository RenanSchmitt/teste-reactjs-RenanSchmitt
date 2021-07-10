import '../App.css';

function Logout() {
  document.title = 'COOBRASTUR TURISMO - Logout';

  sessionStorage.clear();

  function logout() {
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
  }

  logout();
  return (
    < div className="App" >
      <h1>Você se deslogou!</h1>
    </div >
  );
}

export default Logout;
