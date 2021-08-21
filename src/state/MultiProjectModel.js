// Architecture model by Dave Stewart
// cf. https://forum.vuejs.org/t/data-sync-on-deeply-nested-structures/40099/7
// and https://codesandbox.io/s/vue-nested-models-with-tightly-coupled-views-858qd

import ProjectModel from './ProjectModel'
import Model from './Model'
import { remove } from './utils'
import { compressToUTF16 } from 'lz-string'
import { decompressFromUTF16 as lzdecompressFromUTF16 } from 'lz-string'

export default class MultiProjectModel extends Model {

  projects = []

  static create() {
    try {
      var dataString = window.localStorage.getItem('model');
      var dataStringDecompressed = lzdecompressFromUTF16(dataString)
      var data = JSON.parse(dataStringDecompressed);
      console.log("File size compressed: " + dataString.length + ", decompressed size: " + dataStringDecompressed.length)
    } catch (e) {
      console.log(e)
      data = undefined
    }
    return new MultiProjectModel(data);
  }

  constructor(data) {
    super()
    if(data)
      this.load(data)
    else // Example data used when local storage empty
      this.projects = [ new ProjectModel( null ) ]
  }

  load(data) {
    this.projects = data != null && Array.isArray(data.projects)
      ? data.projects.map(project => new ProjectModel(project))
      : [ ]
    console.log("MultiProjectModel loaded, #projects:"+this.projects.length);
  }

  save() {
    return JSON.stringify(this)
  }

  saveToLocalStorage() {
    console.log("Saving...");
    window.localStorage.setItem('model', compressToUTF16(this.save()));
  }

  clear() {
    this.projects.splice(0)
    //this.load({ })
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

  download_file() {
    var currentdate = new Date();
    var datetime =
      "_" +
      currentdate.getFullYear() +
      "_" +
      this.addPadding(currentdate.getMonth() + 1) +
      "_" +
      this.addPadding(currentdate.getDate()) +
      "_" +
      this.addPadding(currentdate.getHours()) +
      "_" +
      this.addPadding(currentdate.getMinutes());
    //+ currentdate.getSeconds();
    let serialDoc = this.save();
    this.download(
      serialDoc,
      "YAPP" + datetime + ".json",
      "application/octet-stream"
    );
  }

  download(data, filename, type) {
    var file = new Blob([data], { type: type });
    if (window.navigator.msSaveOrOpenBlob)
      // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
    else {
      // Others
      var a = document.createElement("a"),
        url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    }
  }

  addPadding(str) {
    return String(str).padStart(2, "0");
  }

  upload_selected_file(file) {
    var fr = new FileReader();
    fr.onload = function () {
      window.model.upload_file(fr.result);
    };
    fr.readAsText(file);
  }

  upload_file(serialData) {
    this.clear()
    this.load(JSON.parse(serialData));
  }
}
