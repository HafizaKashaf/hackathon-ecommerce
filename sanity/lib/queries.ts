import { defineQuery, groq } from "next-sanity";

export const allchefs = defineQuery(`
        *[_type == "chef"]{
          _id,
         name,
         position,
         experience,
         specialty,
          image {
           asset -> {
             _id,
             url
           }
         },
         description,
         }`);

 export const fourchefs = defineQuery(`
          *[_type == "chef"][0..3]{
            _id,
           name,
           position,
           experience,
           specialty,
            image {
             asset -> {
               _id,
               url
             }
           },
           description,
           }`); 
           
        
         
           export const allCategoriesAndFoods = groq`
           *[_type == "category"] {
             _id,
             name,
             "foods": *[_type == "food" && references(^._id)] {
               _id,
               name,
               price,
               description,
               image,
               slug,
               available,
               "categories": categories[]-> { name } // Fetch all categories for the food
             }
           }
         `;
         export const fourposts = `*[_type == "post"]{
          _id,
          title,
          slug,
          publishedAt,
          image{
            asset->{
              url
            },
            alt
          },
          body[]{
            ...,
            children[]{
              text
            }
          }
        }`;
        
        
        

        export const singlePostQuery = `*[_type == "post" && _id == $_id][0] {
          _id,
          title,
          slug,
          publishedAt,
          body,
          "imageUrl": image.asset->url
        }`;
        
        
        





export const allfoods =groq`*[_type == "food"]`;



export const fourfoods =groq`*[_type == "food"][0..3]`



    
       

      