// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import { Link } from 'react-router-dom';

// function LiveSearchBar() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [showResults, setShowResults] = useState(false);

//   const searchTimeoutRef = useRef(null);

//   // Function to handle the search input change
//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);

//     // Clear the previous timeout (if any)
//     clearTimeout(searchTimeoutRef.current);

//     // Set a new timeout to delay the API request
//     searchTimeoutRef.current = setTimeout(() => {
//       // Perform the API request after the delay
//       axios.get(`https://dummyjson.com/products/search?q=${query}`)
//         .then((response) => {
//           const results = response.data.products; // Extract the 'products' array
//           setSearchResults(results.slice(0, 6)); // Limit to the first 6 results
//           setShowResults(true);
//         })
//         .catch((error) => {
//           console.log('Error fetching data:', error);
//           setSearchResults([]);
//           setShowResults(false);
//         });
//     }, 300); // Reduce the timeout duration to 300 milliseconds
//   };

//   const handleBlure=()=>{
  
//    // setShowResults(false)
//   }

//   return (
//     <div className="container mt-3 position-relative">
//       <input
//         type="text"
//         className="form-control"
//         placeholder="Search..."
//         value={searchQuery}
//         onChange={handleSearchChange}
//         onBlur={handleBlure}
//       />
//       {showResults && (
//         <ul className="list-group mt-2 position-absolute" style={{ top: '100%', left: '0', zIndex: '1000' }}>
//           {searchResults.map((product) => (
//             <li key={product.id} className="list-group-item">
//               <Link to={`/Spage/${product.id}`} className="text-dark text-decoration-none">
//                 <h5>{product.title}</h5>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default LiveSearchBar;


import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Link } from 'react-router-dom';

function LiveSearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const searchTimeoutRef = useRef(null);

  // Function to handle the search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Clear the previous timeout (if any)
    clearTimeout(searchTimeoutRef.current);

    // Set a new timeout to delay the API request
    searchTimeoutRef.current = setTimeout(() => {
      // Perform the API request after the delay
      axios.get(`https://dummyjson.com/products/search?q=${query}`)
        .then((response) => {
          const results = response.data.products; // Extract the 'products' array
          setSearchResults(results.slice(0, 6)); // Limit to the first 6 results
          setShowResults(true);
        })
        .catch((error) => {
          console.log('Error fetching data:', error);
          setSearchResults([]);
          setShowResults(false);
        });
    }, 300); // Reduce the timeout duration to 300 milliseconds
  };

  // Function to handle clicks outside the list
  const handleClickOutside = (e) => {
    if (!e.target.closest('.list-group')) {
      setShowResults(false);
    }
  };

  // Attach a click event listener to the document
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="container mt-3 position-relative">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {showResults && (
        <ul className="list-group mt-2 position-absolute" style={{ top: '100%', left: '0', zIndex: '1000' }}>
          {searchResults.map((product) => (
            <li key={product.id} className="list-group-item">
              <Link to={`/Spage/${product.id}`} className="text-dark text-decoration-none">
                <h5>{product.title}</h5>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LiveSearchBar;
