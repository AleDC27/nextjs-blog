import Layout from "../../components/layout/layout";
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);
  
    return {
      props: {
        postData,
      },
    };
  }

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
/*
pathscontiene la matriz de rutas conocidas devueltas por getAllPostIds(), que incluyen los parámetros definidos por pages/posts/[id].js 
 */
import Head from "next/head";
import Date from "../../components/date/date";
import utilsStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <h1 className={utilsStyles.headingXl}>
        {postData.title}
        </h1>
        <br />
        {postData.id}
        <br />
        <div className={utilsStyles.lightText}>
        <Date dateString={postData.date}/>
        </div>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        {console.log(postData)}
      </Layout>
    );
  }