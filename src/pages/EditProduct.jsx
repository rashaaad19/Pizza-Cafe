import { useParams } from "react-router"

const EditProduct = () => {
  const {id} =   useParams();
    console.log(id);
  return (
    <>
    <h1>Hello world</h1>
    </>
)
}

export default EditProduct