import { useNavigate } from "react-router-dom";

interface CardType{
  id:string;
  type:"blog" | "project";
    title:string;
    description:string;
}
function Card(props: CardType) {
  const navigate = useNavigate();
  const path = `/${props.type}s/${props.id}`
  return (
    <div className="card" onClick={() => navigate(path)}>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
          </div>
  )
}

export default Card