// components/TemplateSelector.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import resume1 from "../../../assets/resume.png";
import resume2 from "../../../assets/resume.png";
// import "../../../styles/resume.scss";
import "./TemplateSelector.scss" 

// const templates = [
//   { id: "template1", image: resume1, name: "Classic" },
//   { id: "template2", image: resume2, name: "Modern" },
//   { id: "template3", image: resume2, name: "Cult" },

// ];

// const TemplateSelector = () => {
//   const navigate = useNavigate();

//   const handleSelect = (templateId) => {
//     navigate(`/form/${templateId}`, { state: { templateId } });
//   };

//   return (
//     <div className="template-selector">
//       <h2>Choose Resume Template</h2>
//       <div className="template-grid">
//         {templates.map((tpl) => (
//           <div key={tpl.id} className="template-option">
//             <img src={tpl.image} alt={tpl.name} id="template_Img" />
//             <button onClick={() => handleSelect(tpl.id)}>
//               Use {tpl.name}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TemplateSelector;

const templates = [
  { id: "template1", image: resume1, name: "Classic" },
  { id: "template2", image: resume1, name: "Modern" },
  { id: "template3", image: resume2, name: "Cult" },
];

const TemplateSelector = () => {
  const navigate = useNavigate();

  const handleSelect = (templateId) => {
    navigate(`/form/${templateId}`);
  };

  return (
    <div className="template-selector">
      <h2>Choose Resume Template</h2>
      <div className="template-grid">
        {templates.map((tpl) => (
          <div key={tpl.id} className="template-option">
            <img src={tpl.image} alt={tpl.name} id="template_Img" />
            <button onClick={() => handleSelect(tpl.id)}>
              Use {tpl.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;