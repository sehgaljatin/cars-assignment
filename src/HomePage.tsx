import React from 'react';

import Header from './components/Header';
import Banner from './components/Banner';
import PriceQuote from './components/PriceQuote';
import { IHomePageProps } from './types';
import { StyledBlogContainer } from './style';
import Blog from './components/Blog';
import { blogsData } from './components/Blog/utils';

export function HomePage({ onClick }: IHomePageProps) {
  return (
    <>
      <Header />
      <Banner />
      <StyledBlogContainer>
        {blogsData.map(blog => (
          <Blog data={blog} />
        ))}
      </StyledBlogContainer>
      <PriceQuote onClick={onClick} />
    </>
  );
}
