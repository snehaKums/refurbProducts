import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import styles from '../../components/Product/product.module.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export const getStaticPaths = async () => {
    const res = await axios.get(process.env.API_MAIN_URL);
    const data = res.data;
    let arr=[]
    for(let n=0; n<data.length;n++){
        for(let i=0;i<data[n].components.length;i++){
          arr.push(data[n].components[i]);
        }
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
  const categoryId = context.params.id;
  const res = await axios.get(process.env.API_MAIN_URL);
  const mainData = res.data;
    for(let n=0; n<mainData.length;n++){
      for(let i=0;i<mainData[n].components.length;i++){
        const data = mainData[n].components[i]
        if(categoryId == data.id ){
          return{
            props:{data,mainData}
          }}
      }
  }
}

const Details = ({data,mainData}) => {
  return (
    <div>
      <Header data={mainData} />
        <Container fluid className="container mt-8 min-h-screen" >
        <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
            <Row>                    
                {data.products != undefined ? 
                data.products.map(item => (
                  <Col key={item.id} md={4} lg={3}>
                     <a href={'/detail/' + item.id} className="hover:no-underline">
                      <div className={styles.card}>
                      <Image
                          alt={item.image.name}
                          src={item.image.formats.small?.url}
                          width={150}
                          height={170}
                          />
                          <h1 className={styles.cardText}>{item.title}</h1>
                          <p className={styles.cardSubtext}>Price: $ {item.price}</p>
                      </div>
                      </a>

                  </Col>
                  )) :
                  null}
            </Row>
            </Col>
        </Row>
      </Container>
      
    {mainData[0].components.map( data => (
              (data.__component == "select.footer") ? 
                <Footer data={data} /> 
              : 
              null
    ))}
    hello
  </div>
  );

}

export default Details;
