import React from 'react';
import axios from 'axios';
import ProductCategory from '../components/ProductCategory/ProductCategory';
import CarouselComponent from '../components/Carousel/CarouselComponent';
import Layout from '../components/Layout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Image from 'next/image';
import { Container, Row, Col } from 'reactstrap';

const Home = ({homeData,mainData}) => {
  return (
    <Layout pageTitle="ShopSite">
        <Header data={mainData} />
      <div>
      {homeData.map( data => (
         (data.__component == "select.carousel") ? 
         <CarouselComponent data={data} />
         : 
          null
      ))}
      {homeData.map( data => (
          (data.__component == "select.rich-text") ? 
          <div>
          {data.image ? 
          <div className="sm:flex relative pl-80  ml-20">
              <div className="	sm:w-6/12	h-6/12 px-px">
              <p className="font-medium text-2xl mb-6">{data.heading}</p>
              <h3>{data.subHeading}</h3>
              <p className="text-xl mb-6">{data.description}</p>
              </div>
              <div className=" sm:w-3/5	h-3/4 ml-16	">
                  <Image
                  alt={data.image.name}
                  src={data.image.formats.small.url}
                  width={300}
                  height={250}
                  />
              </div>
          </div>
          :
          <div className="ml-5 mr-5">
              <p className="font-medium text-3xl text-center mt-4 mb-6">{data.heading}</p>
              <h3>{data.subHeading}</h3>
              <p className="text-xl text-center	mb-6">{data.description}</p>
          </div>
          }
      </div>
                : 
              null
        ))}
       <Container className="mt-3 ml-15">
         <h1 className="font-medium text-2xl mb-6">Categories</h1>
          <Row>
            <Col>
              <Row>   
                {homeData.map( data => (
                  (data.__component == "select.categories") ?
                  <Col md={4} lg={3}>
                    <ProductCategory data={data}  />
                  </Col>
                  :
                  null
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
     </div>
      {homeData.map( data => (
          (data.__component == "select.footer") ? 
              <Footer data={data} /> 
                : 
              null
      ))}
    </Layout>
   );
}
export default Home;
export async function getStaticProps(){
    const res = await axios.get(process.env.API_MAIN_URL || 'https://pure-dawn-42818.herokuapp.com');
    const mainData = res.data;
    const resp = await axios.get(process.env.API_HOME_URL || 'https://pure-dawn-42818.herokuapp.com');
    const homeData = resp.data.components;
   return {  
      props:{
        mainData,homeData
      }
    };
  }