import { useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle, Upload, Loader } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";

const categories = ["sunscreen", "moisturizer", "serum", "scrub", "cleanser", "bodywash", "bodylotion", "lipbalm"];

const CreateProductForm = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const { createProduct, loading } = useProductStore();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await createProduct(newProduct);
			setNewProduct({ name: "", description: "", price: "", category: "", image: "" });
		} catch {
			console.log("error creating a product");
		}
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();

			reader.onloadend = () => {
				setNewProduct({ ...newProduct, image: reader.result });
			};

			reader.readAsDataURL(file); // base64
		}
	};

  return (
    <motion.div
    className="bg-[#ceabf7] shadow-lg rounded-lg p-8 mb-8 max-w-xl mx-auto"
    initial={{ opacity:0, y:-20 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration: 0.8 }}>
          <h2 className="text-2xl font-semibold mb-6 text-[#]">Create New Product</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
          <div>
					<label htmlFor='name' className='block text-sm font-medium text-[#291033]'>
						Product Name
					</label>
					<input
						type='text'
						id='name'
						name='name'
						value={newProduct.name}
						onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
						className='mt-1 block w-full bg-[#fccbdb] border border-[#291033] rounded-md shadow-sm py-2
						 px-3 text-[#0b1c68] focus:outline-none focus:ring-2
						focus:ring-[#8973bb] focus:border-[#1c0457]'
						required
					/>
				</div>

        <div>
					<label htmlFor='description' className='block text-sm font-medium text-[#291033]'>
						Description
					</label>
					<textarea
						id='description'
						name='description'
						value={newProduct.description}
						onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
						rows='3'
						className='mt-1 block w-full bg-[#fccbdb] border border-[#291033] rounded-md shadow-sm
						 py-2 px-3 text-[#0b1c68] focus:outline-none focus:ring-2 focus:ring-[#8973bb] 
						 focus:border-[#8973bb]'
						required
					/>
				</div>

				<div>
					<label htmlFor='price' className='block text-sm font-medium text-[#291033]'>
						Price
					</label>
					<input
						type='number'
						id='price'
						name='price'
						value={newProduct.price}
						onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
						step='0.01'
						className='mt-1 block w-full bg-[#fccbdb] border border-[#291033] rounded-md shadow-sm 
						py-2 px-3 text-[#0b1c68] focus:outline-none focus:ring-2 focus:ring-[#8973bb]
						 focus:border-[#8973bb]'
						required
					/>
				</div>

				<div>
					<label htmlFor='category' className='block text-sm font-medium text-[#291033]'>
						Category
					</label>
					<select
						id='category'
						name='category'
						value={newProduct.category}
						onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
						className='mt-1 block w-full bg-[#fccbdb] border border-[#291033] rounded-md
						 shadow-sm py-2 px-3 text-[#0b1c68] focus:outline-none 
						 focus:ring-2 focus:ring-[#8973bb] focus:border-[#8973bb]'
						required
					>
						<option value=''>Select a category</option>
						{categories.map((category) => (
							<option key={category} value={category}>
								{category}
							</option>
						))}
					</select>
				</div>

				<div className='mt-1 flex items-center'>
					<input type='file' id='image' className='sr-only' accept='image/*' onChange={handleImageChange} />
					<label
						htmlFor='image'
						className='cursor-pointer bg-[#fccbdb] py-2 px-3 border border-[#291033] rounded-md shadow-sm text-sm leading-4 font-medium text-[#0b1c68] hover:bg-[#d188ee] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8973bb]'
					>
						<Upload className='h-5 w-5 inline-block mr-2' />
						Upload Image
					</label>
					{newProduct.image && <span className='ml-3 text-sm text-[#0b1c68]'>Image uploaded </span>}
				</div>

				<button
					type='submit'
					className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
					shadow-sm text-sm font-medium text-white bg-[#8174A0] hover:bg-[#a661c2] 
					focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9882cc] disabled:opacity-50'
					disabled={loading}
				>
					{loading ? (
						<>
							<Loader className='mr-2 h-5 w-5 animate-spin' aria-hidden='true' />
							Loading...
						</>
					) : (
						<>
							<PlusCircle className='mr-2 h-5 w-5' />
							Create Product
						</>
					)}
				</button>

          </form>
    </motion.div>
  )
};

export default CreateProductForm;
