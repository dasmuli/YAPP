
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
    if(data)
      this.load(data)
    else  // Example project
    {
      this.name="New Project"
      this.openTasks = [ new TaskModel( null ), new TaskModel( { "name":"Add new task","description":"Use + button bottom","effort":"5","isMilestone":false} ) , new TaskModel( { "name":"Look at chart","description":"Use the chart button top right","effort":"1","isMilestone":true} ) 
      ];
    }
  }


  load(data) {
    this.name = data.name || 'New project '
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
    this.openTasks.unshift(task)
    window.model.saveToLocalStorage()
    return task
  }

  removeOpenTask(ref) {
    return remove(this.openTasks, ref)
  }

  moveTaskFirstAfterSecond(firstTask, secondTask) {
    moveElementFromTo(this.openTasks, firstTask, secondTask)
  }

  moveOpenTaskToClosed(task) {
    task.date_finished = Date.now();
    this.closedTasks.push(remove(this.openTasks, task))
  }

  moveClosedTaskToOpen(task) {
    task.date_finished = Date.now();
    this.openTasks.push(remove(this.closedTasks, task))
  }

  toJSON() {
    // return custom data here if you need to
    return this
  }
}
