import React from "react";
import { BlockRenderer, getClasses, getStyles } from "@webdeveducation/wp-block-tools";

import { MediaText } from "../components";



export const blockRendererComponent= (block) => {
    switch (block.name) {
      case "core/media-text": {
        return (
        <MediaText  
        key={block.id} 
        className={getClasses(block)} 
        style={getStyles(block)}
        verticalAligment={block.attributes.verticalAligment}
        gatsbyImage={block.attributes.gatsbyImage}
        mediaPosition={block.attributes.mediaPosition}
        >
        <BlockRenderer blocks={block.innerBlocks} />
        </MediaText>
        );
    }
    default:
        return null;
    }
  };