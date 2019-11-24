import { useStaticQuery, graphql } from 'gatsby';

type UseSiteMetadata = {
  author: string;
  description: string;
  menuItems: Array<{
    link: string;
    name: string;
  }>;
  title: string;
};

export const useSiteMetadata = (): UseSiteMetadata => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author
            description
            menuItems {
              link
              name
            }
            title
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
