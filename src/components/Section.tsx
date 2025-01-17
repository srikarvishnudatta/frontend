import Card from "./Card";
import MyLink from "./MyLink";

interface SectionType{
  type:"blog" | "project";
    header:string;
    externalLink:string;
}
function Section(props: SectionType) {
  return (
    <div className={"box"}>
      <div className="heading-link">
      <p className="header">
        {props.header}
      </p>
      <MyLink name={"See all " + props.externalLink} url={"/" + props.externalLink}/>
      </div>
      <div className="cards">
          <Card title="Astro nano" description="A minimal project to copy from" type={props.type} id="1"/>
          <Card title="Astro nano" description="A minimal project to copy from" type={props.type} id="2"/>
      </div>
     </div>
  )
}

export default Section