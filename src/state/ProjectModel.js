
import Model from './Model'
import TaskModel from './TaskModel'
import { remove,moveElementFromTo } from './utils'

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
    console.log("Project loaded: "+this.name + ", id:" + this.id);
    this.openTasks = Array.isArray(data.openTasks)
      ? data.openTasks.map(task => new TaskModel(task))
      : []
    this.closedTasks = Array.isArray(data.closedTasks)
      ? data.closedTasks.map(task => new TaskModel(task))
      : []
  }

  clear() {
    this.load({
      name: 'Cleared',
    })
  }

  save() {
    window.model.saveToLocalStorage()
  }

  addOpenTask() {
    const task = TaskModel.create("New task", "", 8)
    this.openTasks.push(task)
    window.model.saveToLocalStorage()
    return task
  }

  removeOpenTask(ref) {
    return remove(this.openTasks, ref)
  }

  moveTaskFirstAfterSecond(firstTask, secondTask) {
    moveElementFromTo(this.openTasks, firstTask, secondTask)
  }

  toJSON() {
    // return custom data here if you need to
    return this
  }
}
