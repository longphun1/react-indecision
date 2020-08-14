

// console.log('App.js is running');

// const something = {
//     title: 'Joker',
//     subtitle: 'English',
//     options: [],
// };

// const onFormSubmit = (e) => {
//     e.preventDefault();

//     const option = e.target.elements.option.value;

//     if (option) {
//         something.options.push(option);
//         e.target.elements.option.value = '';
//         renderOptionsApp();
//     }
// }; 

// const removeAll = () => {
//     something.options = [];
//     renderOptionsApp();
// }

// const onMakeDecision = () => {
//     const randomNum = Math.floor(Math.random() * something.options.length);
//     const option = something.options[randomNum];
//     alert(option);
// }

// const appRoot = document.getElementById('app');

// const renderOptionsApp = () => {
//     const template = (
//         <div>
//             <h1>Title: {something.title}</h1> 
//             {something.subtitle && <p>Subtitle: {something.subtitle}</p>}
//             <p>{something.options > 0 ? 'Here are your options' : 'No options'}</p>
//             <button disabled={something.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
//             <button onClick={removeAll}>Remove All</button>
//             <ol>
//                 {
//                     something.options.map((option) => <li key={option}>Options: {option}</li>)
//                 }
//             </ol>
//             <form onSubmit={onFormSubmit}>
//                 <input type="text" name="option"/>
//                 <button>Add Option</button>
//             </form>
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// renderOptionsApp();

