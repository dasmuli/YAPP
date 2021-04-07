import ProjectModel from './ProjectModel'
import Model from './Model'
import { remove } from './utils'

export default class MultiProjectModel extends Model {

  projects = []

  static create() {
    var dataString = window.localStorage.getItem('model'); 
    var data = JSON.parse(dataString); 
    return new MultiProjectModel( data );
  }

  constructor(data) {
    super()
    this.load(data)
  }

  load(data) {
    this.projects = data != null && Array.isArray(data.projects)
      ? data.projects.map(project => new ProjectModel(project))
      : []
    console.log("MultiProjectModel loaded");
  } 

  save() {
    console.log("Saving...");
    return JSON.stringify(this)
  }

  saveToLocalStorage() {
    window.localStorage.setItem('model', this.save() );
  }

  clear() {
    this.load({
    })
  }

  addProject(name) {
    const project = ProjectModel.create(name)
    this.projects.push(project)
    this.saveToLocalStorage();
    return project
  }

  removeProject(ref) {
    return remove(this.projects, ref)
  }
}
