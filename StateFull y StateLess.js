//import React, { useState } from 'react'
//Estructura de un componente StateFull
// const Button =() => {
//     const [name, setName] = useState('Hello World');
//     return (
//         <div>
//             <h1>{name}</h1>
//         </div>
//     );
// }

// import React from 'react'
// Estructura de un componente StateLess Opcion 1
// const Button = () => (
//     <div>
//         <h1>{name}</h1>
//     </div>
// );

// import React from 'react'
// Estructura de un componente StateLess Opcion 2 con props
// const Button = ({ text }) => <ButtonRed text={text} />;

// import React from 'react'
// Estructura de un componente StateLess Opcion 3 sin props
// const Button = () => <ButtonRed />;

// La Forma Antigua con el cual se creaba componentes pero ya no se usa solo para mantenimiento.
// import React, { Component } from 'react'
// class App extends Component {
//     constructor(){
//         super();
//         this.state = {
//             name: 'Hello World'
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Hello World</h1>
//             </div>
//         );
//     }
// }

// High Order Component de manera antigua con classs y extends
// import React, { Component } from 'react';
// function ComponentWrapper(WrapperComponent){
//     return class extends Component {
//         render() {
//             return (
//                 <div>
//                     <WrapperComponent {...this.props} />
//                 </div>
//             );
//         }
//     }
// }


