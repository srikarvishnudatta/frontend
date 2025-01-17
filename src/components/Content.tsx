import { ArrowLeft } from "lucide-react";
import Space from "./Space";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

interface ContentType{
    title:string;
    type:"blog" | "project";
}

function Content(props: ContentType) {
    const navigate = useNavigate();
  return (
    <div>
<Space height="70px"/>
      <div>
        <p className="header arrow-header"
         onClick={() => navigate(-1)}> <ArrowLeft height={20} width={20}/> Back</p>
      </div>
      <Space height="30px"/>
      <p className="header">{props.title}</p>
      <Space height="20px"/>
      <div>
        <p className="header">2024</p>
      </div>
      <div className="cards">
      <Card title="Astro nano" description="A minimal project to copy from" id="1" type="blog" />
      <Card title="Astro nano" description="A minimal project to copy from" id="2" type={"blog"}/>
      </div>
    </div>
  )
}

export default Content