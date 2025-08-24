import HTML5 from  '../asset/skill/HTML5.png';
import CSS3 from '../asset/skill/CSS3.png';
import JavaScript from '../asset/skill/JavaScript.png';
import react from '../asset/skill/react.png';
import Git from '../asset/skill/Git.png';
import SQL from '../asset/skill/SQL.png';

const skillData = [
  { 
    id : 1,
    skillImage: HTML5,
    skillName: "HTML",
    skillList: [
      "Semantic HTML5",
      "Page Structure",
      "Forms and Input Types",
      "Media Embedding",
      "Accessibility & SEO Basics"
    ]
  },

  { 
    id : 2,
    skillImage: CSS3,
    skillName: "CSS",
    skillList: [
      "Flexbox & Grid",
      "Responsive Design",
      "Animations & Transitions",
      "Media Queries",
      "Box Model"
    ]
  },

  { 
    id : 3,
    skillImage: JavaScript,
    skillName: "JAVASCRIPT",
    skillList: [
        "DOM Manipulation", 
        "Event Handling", 
        "ES6+ Concepts (let/const, arrow functions, etc.)", 
        "Async/Await & Promises", 
        "Fetch API"
    ]
  },

  { 
    id : 4,
    skillImage: react,
    skillName: "REACT",
    skillList: [
        "Components & Props", 
        "State Management (useState)", 
        "Lifecycle with useEffect", 
        "Conditional Rendering", 
        "React Router & Hooks"  
    ]
  },

  { 
    id : 5,
    skillImage: Git,
    skillName: "GIT",
    skillList: [
      "Version Control Basics", 
      "Branching & Merging", 
      "GitHub Workflow", 
      "Pull Requests", 
      "Resolving Merge Conflicts" 
    ]
  },

  { 
    id : 6,
    skillImage: SQL,
    skillName: "SQL",
    skillList: [
       "Joins",
       "Aggregate Functions", 
       "Grouping & Filtering", 
       "Constraints", 
       "SQL Commands:DDL,DML,DCL,DQL,TCL" 
    ]
  }
];

export default skillData;