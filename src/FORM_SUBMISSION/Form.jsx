// import React, { useState } from "react";

// const Form = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     contact: "",
//     gender: "male",
//     subjects: {
//       english: true,
//       maths: false,
//       physics: false,
//     },
//     resume: null,
//     url: "",
//     selectedOption: "",
//     about: "",
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;

//     if (type === "checkbox") {
//       setFormData((prevData) => ({
//         ...prevData,
//         subjects: {
//           ...prevData.subjects,
//           [name]: checked,
//         },
//       }));
//     } else if (type === "file") {
//       setFormData((prevData) => ({
//         ...prevData,
//         resume: files[0],
//       }));
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     setIsSubmitted(true);
//   };

//   const handleReset = () => {
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       contact: "",
//       gender: "male",
//       subjects: {
//         english: true,
//         maths: false,
//         physics: false,
//       },
//       resume: null,
//       url: "",
//       selectedOption: "",
//       about: "",
//     });
//     setIsSubmitted(false);
//   };

//   return (
//     <div className="App">
//       {isSubmitted ? (
//         <div className="success-message">
//           <h2>🎉 Submission Successful!</h2>
//           <p>
//             Thank you,{" "}
//             <strong>
//               {formData.firstName} {formData.lastName}
//             </strong>
//             , for submitting the form.
//           </p>
//           <p>
//             We have received your details, and we&apos;ll get back to you soon.
//           </p>
//           <button className="success-button" onClick={handleReset}>
//             Fill Another Form
//           </button>
//         </div>
//       ) : (
//         <div>
//           <h1>Form in React</h1>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="firstname">First Name*</label>
//             <input
//               type="text"
//               name="firstName"
//               id="firstname"
//               value={formData.firstName}
//               onChange={handleChange}
//               placeholder="Enter First Name"
//               required
//             />

//             <label htmlFor="lastname">Last Name*</label>
//             <input
//               type="text"
//               name="lastName"
//               id="lastname"
//               value={formData.lastName}
//               onChange={handleChange}
//               placeholder="Enter Last Name"
//               required
//             />

//             <label htmlFor="email">Enter Email*</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter Email"
//               required
//             />

//             <label htmlFor="contact">Contact*</label>
//             <input
//               type="tel"
//               name="contact"
//               id="contact"
//               value={formData.contact}
//               onChange={handleChange}
//               placeholder="Enter Mobile Number"
//               required
//             />

//             <label>Gender*</label>
//             <div>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="male"
//                 checked={formData.gender === "male"}
//                 onChange={handleChange}
//               />
//               Male
//               <input
//                 type="radio"
//                 name="gender"
//                 value="female"
//                 checked={formData.gender === "female"}
//                 onChange={handleChange}
//               />
//               Female
//               <input
//                 type="radio"
//                 name="gender"
//                 value="other"
//                 checked={formData.gender === "other"}
//                 onChange={handleChange}
//               />
//               Other
//             </div>

//             <label>Your Best Subjects</label>
//             <div>
//               <input
//                 type="checkbox"
//                 name="english"
//                 checked={formData.subjects.english}
//                 onChange={handleChange}
//               />
//               English
//               <input
//                 type="checkbox"
//                 name="maths"
//                 checked={formData.subjects.maths}
//                 onChange={handleChange}
//               />
//               Maths
//               <input
//                 type="checkbox"
//                 name="physics"
//                 checked={formData.subjects.physics}
//                 onChange={handleChange}
//               />
//               Physics
//             </div>

//             <label htmlFor="resume">Upload Resume*</label>
//             <input
//               type="file"
//               name="resume"
//               id="resume"
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="url">Enter URL*</label>
//             <input
//               type="url"
//               name="url"
//               id="url"
//               value={formData.url}
//               onChange={handleChange}
//               placeholder="Enter URL"
//               required
//             />

//             <label>Select Your Choice</label>
//             <select
//               name="selectedOption"
//               value={formData.selectedOption}
//               onChange={handleChange}
//               required
//             >
//               <option value="" disabled>
//                 Select your Ans
//               </option>
//               <optgroup label="Beginners">
//                 <option value="1">HTML</option>
//                 <option value="2">CSS</option>
//                 <option value="3">JavaScript</option>
//               </optgroup>
//               <optgroup label="Advanced">
//                 <option value="4">React</option>
//                 <option value="5">Node</option>
//                 <option value="6">Express</option>
//                 <option value="7">MongoDB</option>
//               </optgroup>
//             </select>

//             <label htmlFor="about">About*</label>
//             <textarea
//               name="about"
//               id="about"
//               rows="5"
//               value={formData.about}
//               onChange={handleChange}
//               placeholder="Tell us about yourself"
//               required
//             ></textarea>

//             <button type="reset">Reset</button>
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Form;
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "male",
    subjects: {
      english: true,
      maths: false,
      physics: false,
    },
    resume: null,
    url: "",
    selectedOption: "",
    about: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        subjects: {
          ...prevData.subjects,
          [name]: checked,
        },
      }));
    } else if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        resume: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true); // Show success message
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      gender: "male",
      subjects: {
        english: true,
        maths: false,
        physics: false,
      },
      resume: null,
      url: "",
      selectedOption: "",
      about: "",
    });
    setIsSubmitted(false); // Reset the form and hide success message
  };

  return (
    <div
      className="App"
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        minHeight: "100vh",
        background: "linear-gradient(120deg, #89f7fe, #66a6ff)",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isSubmitted ? (
        <div
          style={{
            padding: "20px",
            border: "2px solid #4CAF50",
            borderRadius: "10px",
            maxWidth: "500px",
            margin: "auto",
            backgroundColor: "#e6ffe6",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ color: "#4CAF50" }}>🎉 Submission Successful!</h2>
          <p>
            Thank you,{" "}
            <strong>
              {formData.firstName} {formData.lastName}
            </strong>
            , for submitting the form.
          </p>
          <p>
            We have received your details, and we&apos;ll get back to you soon.
          </p>
          <button
            style={{
              padding: "12px 25px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              transition: "0.3s",
            }}
            onClick={handleReset}
          >
            Fill Another Form
          </button>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "15px",
            maxWidth: "600px",
            width: "100%",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1 style={{ color: "#333", marginBottom: "15px" }}>
            React Dynamic Form
          </h1>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <label>First Name*</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter First Name"
              style={inputStyle}
              required
            />

            <label>Last Name*</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter Last Name"
              style={inputStyle}
              required
            />

            <label>Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              style={inputStyle}
              required
            />

            <label>Contact*</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
              style={inputStyle}
              required
            />

            <label>Gender*</label>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />{" "}
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === "other"}
                  onChange={handleChange}
                />{" "}
                Other
              </label>
            </div>

            <label>Your Best Subjects</label>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <label>
                <input
                  type="checkbox"
                  name="english"
                  checked={formData.subjects.english}
                  onChange={handleChange}
                />{" "}
                English
              </label>
              <label>
                <input
                  type="checkbox"
                  name="maths"
                  checked={formData.subjects.maths}
                  onChange={handleChange}
                />{" "}
                Maths
              </label>
              <label>
                <input
                  type="checkbox"
                  name="physics"
                  checked={formData.subjects.physics}
                  onChange={handleChange}
                />{" "}
                Physics
              </label>
            </div>

            <label>Upload Resume*</label>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              style={inputStyle}
              required
            />

            <label>Enter URL*</label>
            <input
              type="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="Enter URL"
              style={inputStyle}
              required
            />

            <label>Select Your Choice</label>
            <select
              name="selectedOption"
              value={formData.selectedOption}
              onChange={handleChange}
              style={inputStyle}
              required
            >
              <option value="" disabled>
                Select your Answer
              </option>
              <optgroup label="Beginners">
                <option value="1">HTML</option>
                <option value="2">CSS</option>
                <option value="3">JavaScript</option>
              </optgroup>
              <optgroup label="Advanced">
                <option value="4">React</option>
                <option value="5">Node</option>
                <option value="6">Express</option>
                <option value="7">MongoDB</option>
              </optgroup>
            </select>

            <label>About*</label>
            <textarea
              name="about"
              rows="4"
              value={formData.about}
              onChange={handleChange}
              placeholder="Tell us about yourself"
              style={{ ...inputStyle, resize: "vertical" }}
              required
            ></textarea>

            <div
              style={{ display: "flex", gap: "10px", justifyContent: "center" }}
            >
              <button
                type="reset"
                style={{ ...buttonStyle, backgroundColor: "#f44336" }}
              >
                Reset
              </button>
              <button type="submit" style={buttonStyle}>
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

const inputStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "14px",
};

const buttonStyle = {
  padding: "12px 20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
  transition: "0.3s",
};

export default Form;
