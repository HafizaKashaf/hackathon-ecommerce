import { defineQuery } from "next-sanity";

export const allchefs =defineQuery(`
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
    }
    `)

    export const allfoods =defineQuery(`
    *[_type == "food"] {
    _id,
    name,
    category,
    price,
    originalPrice,
    tags,
    image {
      asset -> {
        _id,
        url
      }
    },
    description,
    available
     }
        `)

       