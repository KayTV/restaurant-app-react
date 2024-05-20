import {business} from '../lib/business';

interface RocBusiness {
    name: string;
    image?: string;
    website?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: number;
    category?: string;
    rating?: number;
    review?: string;
} 

const rocBusinesses: RocBusiness[] = business;
// get list
export default function Business() {
  return (
    <div>
      {rocBusinesses.map((biz, index) => (
        <div key={biz.name}>{biz.name}</div>
      ))}
    </div>
  );
}