import Model from './Model'

export default class TaskModel extends Model {
  name = 'none'

  description = '-'

  effort = 3

  isMilestone = false

  date_added = Date.now()

  date_finished = Date.now()

  static create(name,description,effort) {
    return new TaskModel({ name,description,effort })
  }

  constructor(data) {
    super()
    if( data )
      this.load(data)
    else
    {
      this.name             = "Expand this task"
      this.description      = "and finish it when you expanded it. Right now. Use the right button."
      this.effort           = "3"
      this.isMilestone      = true

    }
  }


  load(data) {
    this.name             = data.name 
    this.description      = data.description
    this.effort           = data.effort
    this.isMilestone      = data.isMilestone
    if('date_added' in data)
      this.date_added     = data.date_added
    if('date_finished' in data)
      this.date_finished  = data.date_finished
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
