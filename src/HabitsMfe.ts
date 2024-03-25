import { createApp } from 'vue'
import App from './App.vue'

class HabitsMfe extends HTMLElement {
    app: any = null;
    
    constructor() {
      super();
    }
  
    connectedCallback() {  
        this.app = createApp(App);
    }
  
    disconnectedCallback() {
      if(this.app){
        this.app.unmount()
      }
    }
}
  
customElements.define("habits-mfe", HabitsMfe)