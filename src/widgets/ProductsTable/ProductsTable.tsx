import { useState } from 'react';
import { IProduct } from './productsTable.data';
import { motion } from 'framer-motion';
import Input from '../../shared/ui/Input/Input';
import { Edit, Search, Trash2 } from 'lucide-react';

const ProductsTable = ({ data, title, colNames }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [filteredData, setFilteredData] = useState<IProduct[]>(data);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredResult = data.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );

    setFilteredData(filteredResult);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex justify-between items-center mb-6 ">
        <h2 className="text-lg font-medium text-gray-100 mb-4">{title}</h2>

        <div className="relative">
          <Input
            placeholder="Search Products ..."
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search
            className="absolute left-3 top-2.5 text-gray-400 cursor-pointer"
            size={18}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              {colNames.map((name) => (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredData.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 ">
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 ">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 ">
                  {product.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 ">
                  {product.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 ">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 ">
                  <button className='text-indigo-400 hover:text-indigo-300 mr-2 cursor-pointer'>
                    <Edit size={20} />
                  </button>
                  <button  className='text-red-400 hover:text-red-300 cursor-pointer'> 
                    <Trash2 size={20} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductsTable;

type Props = {
  data: IProduct[];
  title: string;
  colNames: string[];
};
