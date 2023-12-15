import * as Turbo from "@hotwired/turbo" 
import 'alpine-turbo-drive-adapter'
import Alpine from 'alpinejs'
 
window.Alpine = Alpine


{ darkMode: localStorage.getItem('dark') === 'true'}

Alpine.start()