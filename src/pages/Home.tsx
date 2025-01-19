import { useEffect, useRef } from "react";
import Experience from "../components/Experience";
import Section from "../components/Section";
import Space from "../components/Space";
import styles from "./Home.module.css"

function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if(containerRef.current){
      const children = containerRef.current.children;

      Array.from(children).forEach((child, index) =>{
        const htmlChild = child as HTMLElement;
        htmlChild.classList.add("load-animation");
        htmlChild.style.animationDelay = `${index * 100}ms`
      })
    } 
  },[]);
  const contacts = [
    {id: 1, name:"resume", link:""},
    {id: 2, name:"Github", link:"https://github.com/srikarvishnudatta"},
    {id: 3, name:"LinkedIn", link:"https://linkedin.com/in/srikar-akella01"},
    {id: 4, name:"srikarakella28@gmail.com", link:"mailto:srikarakella28@gmail.com"}];
  return (
    <section ref={containerRef}>
     <Space height="100px"/>
     <div>
      <p className={"header "}>Hi, I'm Srikar </p>
      <p className={"paragraph "}>
        I am full stack developer specialising in Python, Typescript, React and Nodejs. Currently I'm working on a Splitwise clone. I love to cook, create new recipes and write blogs of my life in Toronto.
      </p>
      <p className={"paragraph "}>
        I have a Master's degree in Computer Science from <span className={"header"}>Concordia University, Montreal</span> and a Bachelor's of Technology degree in Computer Science and Engineering from Vellore Insitute of Technology.
      </p>
     </div>
     
     <Section header="Recent Projects" externalLink="projects" type={"project"}/>
     <Section header="Recent Blogs" externalLink="blogs" type={"blog"}/>

     <Experience />

     <div className={"box "} style={{paddingBottom: "5rem"}}>
      <p className="header">
        Let's connect
      </p>
      <p className={"paragraph"}>
        If you like my work or this website, feel free to reach out and check my other work. also find the resume attached useful.
      </p>
      <ul className={styles.list}>
        {contacts.map((ele, index) => <>
          <li key={ele.id} className={`link ${styles.listitem}`}>
          <a href={ele.link}>{ele.name}</a>
        </li>
        {index < 3 ? <span style={{paddingRight: "0.5rem"}}>/</span> : undefined}
        </>)}
      </ul>
      <div className={styles.buttonwrapper}>
      <button className={`button`} onClick={() => {window.scrollTo({top: 0, behavior:"smooth"})}}>
        Back to top
      </button>
      </div>
     </div>
    </section>
  )
}

export default Home