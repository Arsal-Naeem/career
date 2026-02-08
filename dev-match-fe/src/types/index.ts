export interface Question {
  _id: string;
  text: string;
  options: {
    _id?: string;
    text: string;
    traits: string[];
  }[];
}

export interface Answer {
  questionId: string;
  selectedTraits: string[];
}

export interface Career {
  _id: string;
  name: string;
  traits: string[];
}

export interface CareerResult {
  career: string;
}