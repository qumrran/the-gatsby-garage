import React from "react";
import { graphql, Link, useStaticQuery } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import { CallToActionButton } from '../CallToActionButton';

export const Menu = () => {
  const data = useStaticQuery(graphql`
    query MainMenuQuery {
      wp {
        themeStylesheet
        acfOptionsMainMenu {
          mainMenu {
            menuItems {
              root {
                destination {
                  ... on WpPage {
                    uri
                  }
                }
                label
              }
              subMenuItems {
                destination {
                  ... on WpPage {
                    id
                    uri
                  }
                }
                label
              }
            }
            callToAction {
              destination {
                ... on WpPage {
                  id
                  uri
                }
              }
              label
            }
          }
        }
      }
      wpMediaItem {
        gatsbyImage(width: 10)
      }
      allWpPage {
        nodes {
          id
          title
          content
        }
      }
    }
  `);

  console.log("Main menu data:", data);

  const { menuItems } = data.wp.acfOptionsMainMenu.mainMenu;

  return (
    <div className="bg-gradient-to-tr from-british-racing-green to-emerald-900 flex justify-between items-center text-white px-4 font-bold sticky top-0 z-20 h-16">
      <Link to="/">
       <StaticImage 
       src="../../../static/icon.png" 
       layout="fixed" 
       height={30} 
       alt="Logo"
       />
      </Link>

      <div className="flex h-full flex-1 justify-end">
        {(menuItems || []).map((menuItem, index) => (
          <div
            key={index}
            className="group relative flex h-full cursor-pointer hover:bg-emerald-800"
          >
            <Link
              to={menuItem.root.destination.uri}
              className="px-4 flex h-full items-center text-white no-underline"
            >
              {menuItem.root.label}
            </Link>
            {!!menuItem.subMenuItems?.length && (
              <div className="group-hover:block hidden bg-emerald-800 text-right absolute top-full right-0">
                {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
                  <Link 
                  to={subMenuItem.destination.uri} 
                  key={subIndex} 
                  className="block whitespace-nowrap text-white p-4 no-underline hover:bg-emerald-700">
                    {subMenuItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="pl-4">
        <CallToActionButton 
        label={data.wp.acfOptionsMainMenu.mainMenu.callToAction.label}
        destination={
            data.wp.acfOptionsMainMenu.mainMenu.callToAction.destination.uri
        }  
        />
      </div>
    </div>
  );
};
