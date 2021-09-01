import axios from 'axios';
import Index from '../index';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Products from '../products';
import Other from '../other';

export const getStaticPaths = async () => {
  const res = await axios.get(process.env.API_MAIN_URL);
  const navData = res.data;

  let arr= [];
  for(let i=0;i<navData.length;i++){
    arr.push(navData[i]);
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
  const navUrl = context.params.id;
  const res = await axios.get(process.env.API_MAIN_URL+'/'+navUrl);
  const resp = await axios.get(process.env.API_MAIN_URL);
  const data = res.data;
  const mainData= resp.data
  return{
    props:{data,mainData}
  }
}
function Details({data,mainData}) {
  if(data.title == "Home"){
    return(
      <Index homeData={data.components} mainData={mainData} />
    )
  }
  if(data.title == "Products"){
    return(
        <Products data={data.products} mainData={mainData} header={data.components}  />
    )
  }
  return (
    <Other aboutData={data.components} mainData={mainData} data={data} />
  );

}

export default Details;