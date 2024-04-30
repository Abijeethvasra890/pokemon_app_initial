import React from 'react';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1>Welcome to Our Pokémon App!</h1>
        <p>
          This is a fun and interactive application where you can explore information about various Pokémon.
          Whether you're a seasoned Pokémon Trainer or just starting your journey, our app has something for everyone!
        </p>
        <p>
          Get started by browsing through the Pokédex, discovering the unique abilities, base experience, height, and weight of each Pokémon.
          You can also search for specific Pokémon or navigate through different pages to find the information you need.
        </p>
        <p>
          Ready to begin your adventure? Start exploring now!
        </p>
      </div>
    </>
  );
};

export default Home;
