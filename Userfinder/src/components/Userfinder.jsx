import React, { useState , useEffect } from 'react'

const Userfinder = () => {
    const [user,setUser]=useState(null)
    const [loading, setLoading]= useState(false)
    const fetchUser = async()=>{
        setLoading(true);
        try {
            const  response = await fetch("https://randomuser.me/api/?results=500")
            const data = await response.json();
            setUser(data.results[0]);
            console.log(data)
        } catch (error) {
            console.log("erroe fetching user",error);
            
        } 
        
        setLoading(false);
    }

     useEffect(() => {
    fetchUser();
  }, []);


  return (
  <div className="card">
      <h2>Random User Generator</h2>

      {loading && <p>Loading...</p>}

      {user && (
        <>
          <img src={user.picture.large} alt="user" />
          <h3>
            {user.name.title} {user.name.first} {user.name.last}
          </h3>
          <p>{user.email}</p>
          <p>{user.location.country}</p>
        </>
      )}

      <button onClick={fetchUser}>Refresh User</button>
    </div>
  );
};

export default Userfinder;

