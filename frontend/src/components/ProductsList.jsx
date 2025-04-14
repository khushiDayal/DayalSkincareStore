import { motion } from "framer-motion";
import { Trash, Star } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";


const ProductsList = () => {
  const { deleteProduct, toggleFeautredProduct, products } = useProductStore();

  console.log("products", products);

  return (
    <motion.div 
      className="bg-[#e2bc8f] shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto"
      initial={{ opacity:0, y:-20 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration: 0.8 }}>

          <table className="min-w-full divide-y divide-[#af3f57]">
          <thead className='bg-[#683f11]'>
					<tr>
						<th
							scope='col'
							className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'
						>
							Product
						</th>
						<th
							scope='col'
							className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'
						>
							Price
						</th>
						<th
							scope='col'
							className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'
						>
							Category
						</th>

						<th
							scope='col'
							className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'
						>
							Featured
						</th>
						<th
							scope='col'
							className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'
						>
							Actions
						</th>
					</tr>
				</thead>

				<tbody className='bg-[#771e31] divide-y divide-gray-700'>
					{products?.map((product,index) => (
						<tr key={product._id || index} className='hover:bg-[#b6455e]'>
							<td className='px-6 py-4 whitespace-nowrap'>
								<div className='flex items-center'>
									<div className='flex-shrink-0 h-10 w-10'>
										<img
											className='h-10 w-10 rounded-full object-cover'
											src={product.image}
											alt={product.name}
										/>
									</div>
									<div className='ml-4'>
										<div className='text-sm font-medium text-white'>{product.name}</div>
									</div>
								</div>
							</td>
							<td className='px-6 py-4 whitespace-nowrap'>
								<div className='text-sm text-[#ffff]'>${(product.price ?? 0).toFixed(2)}</div>
							</td>
							<td className='px-6 py-4 whitespace-nowrap'>
								<div className='text-sm text-[#ffff]'>{product.category}</div>
							</td>
							<td className='px-6 py-4 whitespace-nowrap'>
								<button
									onClick={() => toggleFeautredProduct(product._id)}
									className={`p-1 rounded-full ${
										product.isFeatured ? "bg-[#f1ca9d] text-[#580823]" : "bg-[#8174A0] text-gray-300"
									} hover:bg-[#f0b067] transition-colors duration-200`}
								>
									<Star className='h-5 w-5' />
								</button>
							</td>
							<td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
								<button
									onClick={() => deleteProduct(product._id)}
									className='text-red-400 hover:text-red-300'
								>
									<Trash className='h-5 w-5' />
								</button>
							</td>
						</tr>
					))}
				</tbody>

          </table>
        </motion.div>
   
  );
};

export default ProductsList;
