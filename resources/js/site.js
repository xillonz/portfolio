import * as Turbo from "@hotwired/turbo" 
import 'alpine-turbo-drive-adapter'
import Alpine from 'alpinejs'
 
window.Alpine = Alpine

let darkMode

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode = true
}

if(!darkMode && localStorage.getItem('dark') === 'true'){
    darkMode = true
}

{ darkMode }

Alpine.start()