import { AVAILABLE_NUMBER } from "./constants";
const getSuggestedNumbers = () => {
  return [
    { number: "(714) 289-2795", location: "india" },
    { number: "(714) 289-9632", location: "ahmedabad" },
    { number: "(714) 289-3678", location: "baroda" },
    { number: "(714) 289-2654", location: "miami" },
    { number: "(714) 289-7986", location: "california" },
    { number: "(714) 289-1234", location: "whatever" }
  ];
};

export const API_CALL = type =>
  new Promise((resolve, reject) => {
    let data;
    switch (type) {
      case AVAILABLE_NUMBER:
        data = getSuggestedNumbers();
        break;
      default:
        data = {};
    }
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
