import Layout from "../components/Layout";
import Link from "next/link";

function Products() {
  return (
    <Layout>
      <Link className="bg-gray-300 rounded-md py-1 px-1" href={"/products/new"}>
        Add new product
      </Link>
    </Layout>
  );
}

export default Products;
