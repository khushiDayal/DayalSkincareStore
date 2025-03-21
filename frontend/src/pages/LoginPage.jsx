import { useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, Mail, Lock, ArrowRight, Loader, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
import { useUserStore } from "../stores/useUserStore.js";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const { login, loading } = useUserStore();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(email, password);
//     login(email, password);
//   };

//   return (
//     <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <motion.div
//         className="sm:mx-auto sm:w-full sm:max-w-md"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-[#F0A04B]">
//           Login to your account
//         </h2>
//       </motion.div>

//       <motion.div
//         className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         <div className="bg-[#FCE7C8] py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-[#B1C29E]">
//                 Email address
//               </label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="h-5 w-5 text-[#B1C29E]" aria-hidden="true" />
//                 </div>
//                 <input
//                   id="email"
//                   type="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="block w-full px-3 py-2 pl-10 bg-[#FCE7C8] border border-[#B1C29E] rounded-md shadow-sm placeholder-[#FADA7A] focus:outline-none focus:ring-[#F0A04B] focus:border-[#F0A04B] sm:text-sm"
//                   placeholder="Your email"
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-[#B1C29E]">
//                 Password
//               </label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-5 w-5 text-[#B1C29E]" aria-hidden="true" />
//                 </div>
//                 <input
//                   id="password"
//                   type="password"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="block w-full px-3 py-2 pl-10 bg-[#FCE7C8] border border-[#B1C29E] rounded-md shadow-sm placeholder-[#FADA7A] focus:outline-none focus:ring-[#F0A04B] focus:border-[#F0A04B] sm:text-sm"
//                   placeholder="Password"
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#F0A04B] hover:bg-[#FADA7A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F0A04B] transition duration-150 ease-in-out disabled:opacity-50"
//               disabled={loading}
//             >
//               {loading ? (
//                 <>
//                   <Loader className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
//                   Loading...
//                 </>
//               ) : (
//                 <>
//                   <UserPlus className="mr-2 h-5 w-5" aria-hidden="true" />
//                   Login
//                 </>
//               )}
//             </button>
//           </form>

//           <p className="mt-8 text-center text-sm text-[#B1C29E]">
//             Don't have an account?{" "}
//             <Link to="/signup" className="font-medium text-[#F0A04B] hover:text-[#FADA7A]">
//               Sign Up <ArrowRight className="inline h-4 w-4" />
//             </Link>
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  
	const { login, loading } = useUserStore();
  
	const handleSubmit = (e) => {
	  e.preventDefault();
	  console.log(email, password);
	  login(email, password);
	};
  
	return (
	  <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
		<motion.div
		  className="sm:mx-auto sm:w-full sm:max-w-md"
		  initial={{ opacity: 0, y: 20 }}
		  animate={{ opacity: 1, y: 0 }}
		  transition={{ duration: 0.8, delay: 0.2 }}
		>
		  <h2 className="mt-6 text-center text-3xl font-extrabold text-[#8d5515]">
			Login to your account
		  </h2>
		</motion.div>
  
		<motion.div
		  className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
		  initial={{ opacity: 0, y: 20 }}
		  animate={{ opacity: 1, y: 0 }}
		  transition={{ duration: 0.8, delay: 0.2 }}
		>
		  <div className="bg-[#ceabf7] py-8 px-4 shadow sm:rounded-lg sm:px-10">
			<form onSubmit={handleSubmit} className="space-y-6">
			  <div>
				<label htmlFor="email" className="block text-sm font-medium text-[#291033]">
				  Email address
				</label>
				<div className="mt-1 relative rounded-md shadow-sm">
				  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<Mail className="h-5 w-5 text-[#c17bdd]" aria-hidden="true" />
				  </div>
				  <input
					id="email"
					type="email"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="block w-full px-3 py-2 pl-10 bg-[#fccbdb] border border-[#291033] 
							   rounded-md shadow-sm placeholder-[#4868f5] focus:outline-none 
							   focus:ring-[#8973bb] focus:border-[#8973bb] sm:text-sm"
					placeholder="Your email"
				  />
				</div>
			  </div>
  
			  <div>
				<label htmlFor="password" className="block text-sm font-medium text-[#291033]">
				  Password
				</label>
				<div className="mt-1 relative rounded-md shadow-sm">
				  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<Lock className="h-5 w-5 text-[#A888B5]" aria-hidden="true" />
				  </div>
				  <input
					id="password"
					type="password"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="block w-full px-3 py-2 pl-10 bg-[#fccbdb] border border-[#291033] 
							   rounded-md shadow-sm placeholder-[#4868f5] focus:outline-none 
							   focus:ring-[#8174A0] focus:border-[#8174A0] sm:text-sm"
					placeholder="Password"
				  />
				</div>
			  </div>
  
			  <button
				type="submit"
				className="w-full flex justify-center py-2 px-4 border border-transparent 
						   rounded-md shadow-sm text-sm font-medium text-white bg-[#8174A0]
						   hover:bg-[#a661c2] focus:outline-none focus:ring-2 focus:ring-offset-2
						   focus:ring-[#9882cc] transition duration-150 ease-in-out disabled:opacity-50"
				disabled={loading}
			  >
				{loading ? (
				  <>
					<Loader className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
					Loading...
				  </>
				) : (
				  <>
					<UserPlus className="mr-2 h-5 w-5" aria-hidden="true" />
					Login
				  </>
				)}
			  </button>
			</form>
  
			<p className="mt-8 text-center text-sm text-[#683f11]">
			  Don't have an account?{" "}
			  <Link to="/signup" className="font-medium text-[#8758f3] hover:text-[#64248f]">
				Sign Up <ArrowRight className="inline h-4 w-4" />
			  </Link>
			</p>
		  </div>
		</motion.div>
	  </div>
	);
  };

export default LoginPage;