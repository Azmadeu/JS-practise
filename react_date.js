//
// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }
//
// setInterval(tick, 1000);

function tick() {
    $('#root').text("Hello World: "+ new Date().toLocaleTimeString());
}

setInterval(tick, 1000);