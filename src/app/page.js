'use client';
import styles from './page.module.css'
import { useState } from 'react';
import Project from '../components/project';
import Modal from '../components/modal';

const projects = [
  {
    title: "Domenique Design",
    src: "1.png",
    color: "#FFFFFF"
  },
  {
    title: "Back to Balance Festival",
    src: "2.png",
    color: "#FFFFFF"
  },
  {
    title: "Mori Element",
    src: "3.png",
    color: "#FFFFFF"
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#FFFFFF"
  }
]

export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
  <main className={styles.main}>
    <div className={styles.body}>
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} setModal={setModal} key={index}/>
        })
      }
    </div>
    <Modal modal={modal} projects={projects}/>
  </main>
  )
}
