import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateHandler = () => navigate("products");
  return (
    <>
      <h1>My Home Page.</h1>
      <p>
        Go to <Link to="products">available products</Link>.
      </p>
      <p>
        <button onClick={navigateHandler}>Go to Products</button>
      </p>
    </>
  );
};

export default Home;
