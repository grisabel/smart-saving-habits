import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n';

class HabitsMfe extends HTMLElement {
    app: any = null;
    
    constructor() {
      super();
      console.log("hola")
    }
  
    connectedCallback() {  
       try {
        this.app = createApp(App);
        this.app.use(i18n);
        console.log({app: this.app})
        this.app.mount(this);
       } catch (error) {
        console.log({error})
       }
    }
  
    disconnectedCallback() {
      if(this.app){
        this.app.unmount()
      }
    }
}
  
customElements.define("habits-mfe", HabitsMfe)