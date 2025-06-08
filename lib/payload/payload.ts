// ! DO NOT USE PAYLOADS IN PRODUCTION
// *This file is for development purposes only and should not be used in production environments.
// *Please use systemContent.ts instead.
interface Item {
  itemName: string;
  itemDescription: string;
  itemAbility: string;
}

interface PayloadProps {
  content?: string;
  genre?: string;
  summary?: string;
  items?: Item[];
  default?: string;
}

const Payload: PayloadProps[] = [];

export default Payload;
