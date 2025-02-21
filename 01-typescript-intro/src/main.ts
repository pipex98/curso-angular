import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

// import "./topics/01-basic-types";
// import "./topics/02-object-interface";
// import "./topics/03-functions";
// import "./topics/04-homework-types";
// import "./topics/06-function-destructuring.ts";
// import "./topics/07-import-export.ts";
// import "./topics/08-classes.ts";
// import "./topics/09-generics.ts";
// import "./topics/10-decorators.ts";
import "./topics/11-optional-chaining.ts";


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  Hola Mundo
`;

console.log('Hola Mundo');



