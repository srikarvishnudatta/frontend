import { NavLink } from "react-router-dom";
import styles from "./Header.module.css"
import MyLink from "./MyLink";

function Header() {
  const data = [
    {id: 1, name: "Blog", url:"/blogs"},
    {id: 2, name: "Cookbook", url:"/cookbook"},
    {id: 3, name: "Work", url:""},
    {id: 4, name: "Projects", url:"/projects"}
  ];
  return (
    <div className={styles.navbar}>
      <div className={styles.header} ><NavLink to={"/"}>Srikar Akella</NavLink></div>
      <ul className={styles.list}>
        {data.map((ele, index) => 
        <>
        <MyLink url={ele.url} key={ele.id} name={ele.name}/>
        {index < 3 ? "/" : undefined}
        </>
        )}
      </ul>
    </div>
  )
}

export default Header