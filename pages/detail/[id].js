import axios from 'axios';
import Image from 'next/image';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { Container, Row, Col} from 'reactstrap';

export const getStaticPaths = async () => {
    const res = await axios.get(process.env.API_PRODUCTS_URL);
    const products = res.data;
    let arr=[]
    for(let i=0;i<products.length;i++){
      arr.push(products[i]);
    }
    const paths = arr.map(data=>{
        return {
          params: {id:data.id.toString()}
        }
    })
    return{
        paths,
        fallback: false
      }
}

export const getStaticProps = async(context) =>{
  const productId = context.params.id;
  const res = await axios.get(process.env.API_MAIN_URL+'/2');
  const data = res.data.products;
  const resp = await axios.get(process.env.API_MAIN_URL);
  const mainData= resp.data
  const res1 = await axios.get(process.env.API_PRODUCTS_URL);
  const productData= res1.data

    for(let i=0;i<data.length;i++){
      const product = data[i]
      if(productId == product.id ){
        return{
          props:{product,mainData,productData}
        }}
    }
}
const Details = ({product,mainData,productData}) => {
  let products = [];
  for(let i=0;i<productData.length;i++){
    const data = productData[i]
    if(product.title == data.title ){
        products.push(data)
  }}
  return (
    <div>
        <Header data={mainData} />
          <div className="container mt-8">
            <div className="sm:grid grid-cols-3 gap-4">
            <div className="-my-5">
            <Image
                  alt={product.image.name}
                  src={product.image.formats.medium.url}
                  width={400}
                  height={450}
            />
            </div>

            <div className="sm:col-span-2 pr-4">
           
            <h1 className="text-2xl font-bold my-8">{product.title}</h1>

            <p className="text-xl font-semibold my-2">Rs. {product.price}</p>
              <p className="text-xl	text-indigo-500	my-2">Features</p>
              <p className="text-lg	my-2">{product.description}</p>
            <p className="text-xl	text-indigo-500	my-2">Contact Details of Seller</p>
            <div className="flex flex-row">
              <p className="text-lg font-medium	my-2 mr-2">Address:</p>
              <p className="text-lg	my-2">{product.address}</p>
            </div>
            <div className="flex flex-row">
              <p className="text-lg	font-medium		my-2 mr-2">Phone No:</p>
              <p className="text-lg	my-2">{product.phoneNo}</p>
            </div>

            </div>

            </div>

          </div>
          <div className="container mt-8">
              <h3 className="text-2xl py-4">Similar Products</h3>
              <div>
                <Container>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                    <Row>    
                    {products[0].product.map(product=>(
                      <div className="flex space-x-5">
                          <Col key={product.id} md={4} lg={3}>
                            <div className="box-border h-90 w-60 p-2 border-2" >
                              <a  href={'/detail/' + product.id} className="hover:no-underline" >
                              <h1 className="text-center truncate">{product.title}</h1>
                              <div className="flex flex-col justify-center items-center">
                              <Image
                                  alt={product.image.name}
                                  src={product.image.formats.small.url}
                                  width={130}
                                  height={150}
                              />
                              </div>
                              <p className="text-center -mt-1">Price: Rs. {product.price}</p>
                              </a>
                            </div>
                        </Col>
                      </div>
                        ))}
                    </Row>
                    </Col>
                  </Row>
                </Container>
            </div>
          </div>
          {mainData[0].components.map( data => (
              (data.__component == "select.footer") ? 
                <Footer data={data} /> 
              : 
              null
          ))}
    </div>
  );

}

export default Details;
