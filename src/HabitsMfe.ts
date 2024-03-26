import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n';

class HabitsMfe extends HTMLElement {
    app: any = null;
    
    constructor() {
      super();
    }
  
    connectedCallback() {  
       try {
        this.app = createApp(App);
        this.app.use(i18n);
        this.app.mount(this);

        let lang = window.sessionStorage.getItem('language') || 'es';
        // @ts-ignore
        i18n.global.locale.value = lang;
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