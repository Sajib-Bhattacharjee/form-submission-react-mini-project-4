// import Card from "./COMPONENTS/Card";
// import Data from "../src/data.json";
// function App() {
//   return (
//     <>
//       <div>
//         {Data.map((item) => (
//           <Card
//             key={item.id}
//             titleText={item.name}
//             description={item.description}
//           />
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;

// import React from "react";
// import List from "./COMPONENTS/CLASS10/List";

// const App = () => {
//   return (
//     <>
//       <List />
//     </>
//   );
// };

// export default App;

// import React from "react";

// import FormControl from "./COMPONENTS/FORM/FormControl";

// const App = () => {
//   return (
//     <div>
//       <FormControl />
//     </div>
//   );
// };

// export default App;
// import React from "react";
// import Child from "./COMPONENTS/STATE_LEAFTING/Child";

// const App = () => {
//   const [data, setData] = React.useState(null);
//   const handleCildData = (childData) => {
//     console.log(childData);
//     setData(childData);
//   };

//   return (
//     <>
//       <Child onChildData={handleCildData} />
//       <h1>{data}</h1>
//     </>
//   );
// };

// export default App;

// import Home from "./COMPONENTS/TODO_STATE_LEAFTING/Home";

// const App = () => {
//   return (
//     <>
//       <Home />
//     </>
//   );
// };

// export default App;

// import FetchData from "./COMPONENTS/FETCH_DATA/FetchData";

// const App = () => {
//   return (
//     <>
//       <FetchData />
//     </>
//   );
// };

// export default App;

// import Tosty from "./COMPONENTS/TOSTYFY/Tosty";

// const App = () => {
//   return (
//     <>
//       <Tosty />
//     </>
//   );
// };

// export default App;

// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import Error from "./pages/Error";
// import Navbar from "./COMPONENTS/NAVBAR/Navbar";

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/about" element={<About />} />
//           <Route path="*" element={<Error />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;

// import Joke from "./COMPONENTS/JOKAPP/Joke";

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Joke Generator Using React and Joke API</h1>
//       <Joke />
//     </div>
//   );
// };

// export default App;

import React from "react";
import Form from "./FORM_SUBMISSION/Form";

const App = () => {
  return (
    <>
      <Form />
    </>
  );
};

export default App;
