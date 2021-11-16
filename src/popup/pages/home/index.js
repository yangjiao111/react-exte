import React from 'react'
import { Link,useNavigate} from 'react-router-dom';
function Home(props) {
  let navigate = useNavigate();
  const loginIn = () => {
    navigate("/login", { state: "1998" })
	}
  return (
    <div className="App">
      homepage
      <button onClick={loginIn}>方法跳转</button>
      <Link to="/login">标签跳转</Link>
    </div>
  );
}

export default Home;
