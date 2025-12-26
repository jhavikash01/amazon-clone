import Product from "../components/Product";

function Home() {
  return (
    <div className="home">
      <Product
        id={1}
        title="Apple iPhone 14 (128GB)"
        price={79999}
        image="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg"
      />

      <Product
        id={2}
        title="Samsung Galaxy S23 5G"
        price={74999}
        image="https://m.media-amazon.com/images/I/71Sa3dqTqzL._SX679_.jpg"
      />

      <Product
        id={3}
        title="OnePlus Nord CE 3 Lite"
        price={19999}
        image="https://m.media-amazon.com/images/I/61LB+d0vheL._SX679_.jpg"
      />

      <Product
        id={4}
        title="Sony WH-1000XM5 Headphones"
        price={29999}
        image="https://m.media-amazon.com/images/I/61+btxzpfDL._SX679_.jpg"
      />

      <Product
        id={5}
        title="Apple MacBook Air M1"
        price={89999}
        image="https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"
      />

      <Product
        id={6}
        title="boAt Rockerz 450 Headphones"
        price={1499}
        image="https://m.media-amazon.com/images/I/61u1VALn6JL._SX679_.jpg"
      />
    </div>
  );
}

export default Home;
