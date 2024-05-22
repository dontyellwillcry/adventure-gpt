interface Item {
  itemName: string;
  itemDescription: string;
  itemAbility: string;
}

interface PayloadProps {
  content: string;
  genre: string;
  summary: string;
  items: Item[];
  default: string;
}

const Payload: PayloadProps[] = [
  {
    content: "",
    genre: "",
    summary: "",
    items: [{ itemName: "", itemDescription: "", itemAbility: "" }],
    default: "",
  },
];

export default Payload;
