const Home = () => {
  return (
    <div style={{ color: 'white' }}>

      <Link to="./artists/:id">Artist</Link>
      <Link to="./albums">Albums</Link>
      <Link to="./topcharts">Top Charts</Link>
      <Link to="./country">Top Charts by Country</Link>
      <Link to="./songdetails">Song Details</Link>

    </div>
  );
};

export default Home;
