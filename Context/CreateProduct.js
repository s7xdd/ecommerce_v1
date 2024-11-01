"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { uploadFile } from '@uploadcare/upload-client'
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [uploading, setUploading] = useState(false);
  const route = useRouter();

  const [products, setProducts] = useState([]);

  // upload image
  useEffect(() => {
    const upload = async () => {
      setUploading(true);
      const name = new Date().getTime() + "-" + file.name;
      
      const result = await uploadFile(
        file,
        {
          publicKey: 'b9d4fbc0e983b3afa149',
          store: 'auto',
          metadata: {
            subsystem: 'js-client',
            pet: 'cat'
          }
        }
      )

      const downloadURL = `https://ucarecdn.com/${result.uuid}/`

      setMedia(downloadURL);
      setUploading(false);

    
    }

    file && upload();
  }, [file]);

  // create Product
  const fetchProduct = async (e) => {
    e.preventDefault();
    try {
      if (media === undefined) {
        toast.error("Please upload an image");

        return;
      }
      if (uploading) {
        toast.error("Please wait while image is uploading");
        return;
      }
      {
        const res = await axios.post("/api/product", {
          name: name,
          price: price,
          description: description,
          category: category,
          mainImage: media,
        });
        route.push("/products");
        setName("");
        setPrice("");
        setDescription("");
        setCategory("");
        setFile(null);
        setMedia("");
        toast.success("Product created successfully");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);

      return;
    }
  };
  //  get all products
  useEffect(() => {
    axios.get("/api/product").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <ProductContext.Provider
      value={{
        uploading,
        setMedia,
        fetchProduct,
        name,
        setName,
        price,
        setPrice,
        description,
        setDescription,
        category,
        setCategory,
        file,
        setFile,
        media,
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
