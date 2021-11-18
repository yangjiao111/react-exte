import React from 'react'
 import { Link,useNavigate} from 'react-router-dom';
 import cookie from 'react-cookies';
function Home(props) {
  //let navigate = useNavigate();
  const loginIn = () => {
    console.log('jump');
    
cookie.save('userId', "123");
console.log(cookie.load('user'));

   // navigate("/login", { state: "1998" })
	}
  return (
    <div className="App">
      333000777799
      homepage
      <button onClick={loginIn}>方法跳转</button>
      <Link to="/login">标签跳转</Link>
    </div>
  );
}

export default Home;
