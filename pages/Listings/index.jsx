




// import { useEffect, useState } from "react";
// import { data } from "../../data/data";
// import Tweet from "../Tweet";

// import "./TweetList.module.css";
// import CreateTweetForm from "../CreateTweet";

// import axios from 'axios'

// // vite env vars -> https://vitejs.dev/guide/env-and-mode
// console.log(import.meta.env.MODE);
// const serverUrl =
//   import.meta.env.MODE === "development"
//     ? "http://localhost:4000"
//     : "https://twitterbackend-w3wu.onrender.com/";


// function Listing() {
//   const [listing, setListing] = useState([]); // initial value is now null

//   // useEffect is used to fetch the listing when the component is rendered
//   useEffect(() => {
//     try {
//       const fetchData = async () => {
//         const res = await axios.get(`${serverUrl}/listings`);
//         console.log(res.data);
//         setListing([...res.data]); // here the data is set to the state
//       };
//       fetchData();
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);

//   // addListing will make a POST request and create a new tweet
//   const addListing = async (newListing) => {
//     try {
//       const res = await axios.post(`${serverUrl}/listing`, {
//         newListing,
//         username: "abe123",
//       });
//       console.log(res.data);
//       setListing([res.data, ...listing]); // new tweet is added to the state
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // removeTweet will make a DELETE request and delete a tweet by the id
//   const removeTweet = async (listingId) => {
//     try {
//       const res = await axios.delete(`${serverUrl}/listing/${listingId}`);
//       // if request was 'ok' remove from app state
//       if (res.status === 200) {
//         setListing(listing.filter((t) => t._id !== listingId));
//       } else {
//         throw Error("Error deleting tweet");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const updateTweet = async (listingId, newTweetContent) => {
//     try {
//       const res = await axios.put(`${serverUrl}/listing/${listingId}`, {newTweetContent});

//       // if request was 'ok' remove from app state
//       if (res.status === 200) {
//         setListing(
//           listing.map((t) => {
//             if (t._id === listingId) {
//               return {
//                 ...t,
//                 content:res.data.content,
//               };
//             } else {
//               return t;
//             }
//           }),
//         );
//       } else {
//         throw Error("Error updating tweet");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       <CreateTweetForm addListing={addListing} />
      
// <h2>Spilt Tea...</h2>
//       <section>
//         {listing.map((item) => (
//           <Tweet tweet={item} key={item._id ? item._id : item.id} removeTweet={removeTweet}  updateTweet={updateTweet}/>
//         ))}
//       </section>
//     </div>
//   );
// }

// export default Listing;