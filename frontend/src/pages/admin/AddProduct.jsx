import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import { assets, categories } from "../../assets/assets";
import axios from "axios";

const AddProduct = () => {
  const { navigate } = useContext(AppContext);
  const [file, setFile] = useState(null);

 const [booksData, setBooksData] = useState({
  title: "",
  author: "",
  price: "",
  offerPrice: "",
  rating: "",
  reviews: "",
  category: "",
  description: "",
});


  // Handle input change
  const handleChange = (e) => {
    setBooksData({ ...booksData, [e.target.name]: e.target.value });
  };

  // Handle form submit  handleSubmit
const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("title", booksData.title);
  formData.append("author", booksData.author);
  formData.append("price", booksData.price);
  formData.append("offerPrice", booksData.offerPrice);
  formData.append("rating", booksData.rating);
  formData.append("reviews", booksData.reviews);
  formData.append("category", booksData.category);
  formData.append("description", booksData.description);
  formData.append("image", file);

  try {
    const { data } = await axios.post("http://localhost:4000/book/add", formData, {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    });
    toast.success("Book added successfully!");
    console.log("Response:", data);
  } catch (error) {
    console.error("Error while adding book:", error);
    toast.error("Error while adding book");
  }
};


  return (
    <div className="py-10 flex flex-col justify-between bg-white">
      <form
        onSubmit={handleSubmit}
        className="md:p-10 p-4 space-y-5 max-w-lg"
      >
        {/* Image Upload */}
        <div>
          <p className="text-base font-medium">Book Image</p>
          <div className="flex items-center gap-2 mt-2">
            <label htmlFor="image">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
                id="image"
                hidden
              />
              <img
                className="max-w-24 cursor-pointer"
                src={file ? URL.createObjectURL(file) : assets.upload_area}
                alt="uploadArea"
                width={100}
                height={100}
              />
            </label>
          </div>
        </div>

        {/* Book Name */}
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium">Book Name</label>
          <input type="text" name="title" value={booksData.title} onChange={handleChange} />
        </div>

        {/* Author */}
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium">Book Author</label>
          <input type="text" name="author" value={booksData.author} onChange={handleChange} />

        </div>

        {/* Description */}
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium">Book Description</label>
          <textarea
            name="description"
            value={booksData.description}
            onChange={handleChange}
            rows={4}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
            placeholder="Type here"
          ></textarea>
        </div>

        {/* Category */}
        <div className="w-full flex flex-col gap-1">
          <label className="text-base font-medium">Category</label>
          <select
            name="category"
            value={booksData.category}
            onChange={handleChange}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
          >
            <option value="">Select Category</option>
            {categories.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Price Details */}
        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium">Price</label>
            <input type="number" name="price" value={booksData.price} onChange={handleChange} />

          </div>
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium">Offer Price</label>
            <input type="number" name="offerPrice" value={booksData.offerPrice} onChange={handleChange} />

          </div>
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium">Rating</label>
            <input type="number" name="rating" value={booksData.rating} onChange={handleChange} />
          </div>
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium">Review</label>
              <input type="text" name="reviews" value={booksData.reviews} onChange={handleChange} />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddProduct;         
 