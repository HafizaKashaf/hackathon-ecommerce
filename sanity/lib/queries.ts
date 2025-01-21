import { groq } from "next-sanity";

export const allchefs = groq`*[_type == "chef"]`;


export const fourchefs = groq`*[_type == "chef"][0..3]`;


export const allfoods =groq`*[_type == "food"]`;



export const fourfoods =groq`*[_type == "food"][0..3]`



    
       

        // {
        //   _id,
        //  name,
        //  position,
        //  experience,
        //  specialty,
        //   image {
        //    asset -> {
        //      _id,
        //      url
        //    }
        //  },
        //  description,
        //  }