import Model from './Model'

export default class TaskModel extends Model {
  name = 'none'

  description = '-'

  effort = 3

  isMilestone = false

  static create(name,description,effort) {
    return new TaskModel({ name,description,effort })
  }

  constructor(data) {
    super()
    this.load(data)
  }

  load(data) {
    this.name           = data.name 
    this.description    = data.description
    this.effort         = data.effort
    this.isMilestone    = data.isMilestone
  }

  clear() {
    this.load({
      name: '',
    })
  }

  toJSON() {
    // return custom data here if you need to
    return this
  }
}
