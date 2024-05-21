import React from "react";
import { BlockRendererProvider } from "@webdeveducation/wp-block-tools";
import { blockRendererComponents } from "../config/blockRendererComponents";
import { Link } from "gatsby";
import { Layout } from '../components';

const Page = (props) => {
  console.log("Page props", props);
  return (
    <Layout>
      <BlockRendererProvider
        allBlocks={props.pageContext.blocks}
        renderComponent={blockRendererComponents}
        siteDomain={process.env.GATSBY_WP_URL}
        customInternalLinkComponent={(
          {children, internalHref, className}, 
          index
        ) => {
        return ( 
        <Link to={internalHref} className={className } key={index}>
          {children}
          </Link>
       );
      }}
      />
    </Layout>
  );
};

export default Page;
