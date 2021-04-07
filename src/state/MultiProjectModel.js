import ProjectModel from './ProjectModel'
import Model from './Model'
import { remove } from './utils'

export default class MultiProjectModel extends Model {

  projects = []

  static create() {
    return new MultiProjectModel({})
  }

  constructor(data) {
    super()
    this.load(data)
  }

  load(data) {
    this.projects = Array.isArray(data.posts)
      ? data.posts.map(project => new ProjectModel(project))
      : []
    console.log("MultiProjectModel loaded");
  }

  save() {
    return JSON.stringify(this)
  }

  clear() {
    this.load({
    })
  }

  addProject(name) {
    const project = ProjectModel.create(name)
    this.projects.push(project)
    return project
  }

  removeProject(ref) {
    return remove(this.projects, ref)
  }
}
