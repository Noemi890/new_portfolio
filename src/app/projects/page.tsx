import data from "../data/data.json"

const Projects = () => {
  return (
    <div>
      {data.projects.map((proj,i) => {
        return (
          <div key={i}>{proj.name}</div>
        )
      })}
    </div>
  )
}

export default Projects