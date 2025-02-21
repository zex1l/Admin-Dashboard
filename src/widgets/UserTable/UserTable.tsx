import { useState } from 'react';
import { IUser } from './userTable.data';
import { motion } from 'framer-motion';
import { Edit, Search, Trash2 } from 'lucide-react';
import Input from '../../shared/ui/Input/Input';
import Status from '../../shared/ui/Status/Status';

const UserTable = ({ data, colNames, title }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [filteredData, setFilteredData] = useState<IUser[]>(data);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredResult = data.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
    );

    setFilteredData(filteredResult);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
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
        <table className="w-full">
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
            {filteredData.map((user) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                        {user.name.charAt(0)}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 ">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 ">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 ">
                  <span className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-blue-800 text-blue-100">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 ">
                  <Status text={user.status} />
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 ">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2 cursor-pointer">
                    <Edit size={20} />
                  </button>
                  <button className="text-red-400 hover:text-red-300 cursor-pointer">
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

export default UserTable;

type Props = {
  data: IUser[];
  title: string;
  colNames: string[];
};
