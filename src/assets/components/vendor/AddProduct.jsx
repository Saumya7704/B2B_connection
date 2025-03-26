import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './AddProduct.css' // Ensure this is imported if using an external stylesheet

export const AddProduct = () => {

    const [categories, setCategories] = useState([])
    const [subCategories, setSubCategories] = useState([])


    const getAllCategories = async () => {
        const res = await axios.get("/category/getAllCategories")
        console.log(res.data.data)
        setCategories(res.data.data)
    }

    const getSubCategories = async (category_id) => {
        const res = await axios.get(`subCategory/${category_id}`)
        console.log(res.data.data)
        setSubCategories(res.data.data)
    }
    useEffect(() => {
        getAllCategories()
    }, [])


    const { register, handleSubmit } = useForm()
    const submitHandler = async (data) => {
        const formData = new FormData
        formData.append("name", data.name)
        formData.append("vendor_id", localStorage.getItem("id"))
        formData.append("price", parseFloat(data.price))
        formData.append("category_id", data.category_id)
        formData.append("sub_category_id", data.sub_category_id)
        formData.append("image", data.image[0])

        const res = await axios.post("/product/addwithimage", formData)
        console.log(data)
        console.log(res.data)
    }


    return (
        <div className="form-container">
            <h1>Add Product</h1>

            <form onSubmit={handleSubmit(submitHandler)} className="product-form">
                <div className="form-group">
                    <label>NAME</label>
                    <input type='text' {...register("name")} placeholder='Enter Product Name' className="input-field" />
                </div>
                <div className="form-group">
                    <label>PRICE</label>
                    <input type='number' {...register("price")} placeholder='Enter Product Price' className="input-field"

                        onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '')}
                    />
                </div>
                <div className="form-group">
                    <label>CATEGORY</label>
                    <select {...register("category_id")} onChange={(event) => { getSubCategories(event.target.value) }} className="select-field">
                        <option value="">Select Category</option>
                        {
                            categories?.map((cat) => {
                                return <option value={cat._id} key={cat._id}>{cat.name}</option>
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>SUB CATEGORY</label>
                    <select {...register("sub_category_id")} className="select-field">
                        <option value="">Select Sub Category</option>

                        {
                            subCategories?.map((subCat) => {
                                return <option value={subCat._id} key={subCat._id}>{subCat.name}</option>
                            })
                        }
                    </select>
                </div>

                {/* <div className="form-group">
                    <label>BASE PRICE</label>
                    <input type='number' {...register("price")} placeholder='Enter Base Price' className="input-field"

                        onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '')}
                    />
                </div> */}

                {/* <div className="form-group">
                    <label>OFFER PRICE</label>
                    <input type='number' {...register("price")} placeholder='Enter Offer Price' className="input-field"

                        onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '')}
                    />
                </div>
 */}




                <div className="form-group">
                    <label>IMAGE</label>
                    <input type="file" {...register("image")} className="file-input" />
                </div>
                <div className="form-group">
                    <input type='submit' value='ADD PRODUCT' className="submit-button" />
                </div>
            </form>
        </div>
    )
}
