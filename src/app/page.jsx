"use client"
import { useState } from "react";
import Project from "../components/project"
import styles from "./page.module.css";

export default function Home() {
  const projects = [
    {
      title:"Mori Elemenet",
      src:"7.png",
      color:"#0100000"
    },
    {
      title:"Domenique Design",
      src:"background1.webp",
      color:""
    },
    {
      title:"Back to Balance",
      src:"background2.webp",
      color:""
    },
    {
      title:"Test1",
      src:"background3.webp",
      color:""
    }
  ]
  const [modal, setModal] = useState({active: false, index:0})
  return (
    <main className={styles.main}>
      <div className={styles.body}>
        {projects.map((project,index)=> {
          return <Project key={index} index={index} title={project.title} setModal={setModal}/>
        })}
      </div>
    </main>
  );
}
