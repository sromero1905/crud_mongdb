import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name:"dn7v1oaiu",
    api_key:"771274696876217",
    api_secret:"zoYflNYX0pj5_UgvbnrzjvKsGBU"
})

export const uploadImage = async filePath =>{
return await cloudinary.uploader.upload(filePath,{
    folder:'test'
})
}


export const deleteImage = async id=>{
   return  await cloudinary.uploader.destroy(id)
}