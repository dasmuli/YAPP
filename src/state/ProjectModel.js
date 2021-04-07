
import Model from './Model'
//import TaskModel from './TaskModel'
//import { remove } from './utils'

export default class ProjectModel extends Model {
  name = ''

  openTasks = []

  closedTasks = []

  static create(name, openTasks = [], closedTasks = []) {
    return new ProjectModel({ name, openTasks, closedTasks })
  }

  constructor(data) {
    super()
    this.load(data)
  }

  load(data) {
    this.name = data.name || 'Unnamed '
    //this.openTasks = Array.isArray(data.openTasks)
    //  ? data.openTasks.map(task => new TaskModel(task))
    //  : []
    //this.closedTasks = Array.isArray(data.closedTasks)
    //  ? data.closedTasks.map(task => new TaskModel(task))
    //  : []
  }

  save() {
    console.log(`saving post ${this.id} to the server...`)
    console.log(this)
  }

  clear() {
    this.load({
      name: 'Cleared',
    })
  }

  /*addOpenTask(name) {
    const task = TaskModel.create(name)
    this.OpenTasks.push(task)
    return task
  }

  removeOpenTasks(ref) {
    return remove(this.openTasks, ref)
  }*/

  toJSON() {
    // return custom data here if you need to
    return this
  }
}
