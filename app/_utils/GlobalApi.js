const { gql, default: request } = require("graphql-request");

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master";

const getAllCourseList = async () => {
  const query = gql
  `
    query MyQuery {
      courses(orderBy: createdAt_DESC) {
        author
        description {
          text
        }
        id
        level
        name
        price
        tags
        time
        banner {
          id
          url
        }
        chapters {
          title
        }
        slug
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
}
const getSideBanner=async()=>{
  const query=gql
  `
  query SideBanner {
  sideBanners {
    id
    name
    url
    banner {
      id
      url
    }
  }
}
  `;
  const result = await request(MASTER_URL, query);
  return result;
}

const getCourseById=async(courseId)=>{
  const query=gql
  `query MyQuery {
  course(where: {slug: "`+courseId+`"}) {
    author
    id
    price
    chapters {
      id
      title
    }
    time
    tags
    name
    description {
      text
    }
      slug
  }
}
  `
  const result = await request(MASTER_URL, query);
  return result;
}

module.exports = {
  getAllCourseList,
  getSideBanner,
  getCourseById,
};
