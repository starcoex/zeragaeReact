import { useParams } from "react-router";

interface RouteParams {
  id: string;
}

function Coin() {
  const { id } = useParams<RouteParams>();
  console.log(id);
  return <h1>Coin : {id}</h1>;
}

export default Coin;
