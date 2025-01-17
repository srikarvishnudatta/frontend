import { NavLink } from "react-router-dom"
import styles from "./MyLink.module.css"
interface LinkType{
    url:string;
    name:string;
}
function MyLink(props: LinkType) {
  return (
    <NavLink to={props.url} className={`${styles.listitem} link`}>{props.name}</NavLink>
  )
}

export default MyLink