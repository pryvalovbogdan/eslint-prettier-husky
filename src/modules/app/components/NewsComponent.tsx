import React, { FC, memo } from 'react';
import PropTypes from 'prop-types';

import { NewsLink, NewsImage, NewsBlock } from './styled/styledComponents';

import { INewsComponentProps } from './types';

const NewsComponent: FC<INewsComponentProps> = memo(({ url, title, urlToImage }) => (
  <NewsBlock>
    <NewsLink href={url} target={'blank'}>
      <NewsImage src={urlToImage} alt={'Image haven"t downloaded'} />
    </NewsLink>
    <NewsLink href={url} target={'blank'}>
      {title}
    </NewsLink>
  </NewsBlock>
));

NewsComponent.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  urlToImage: PropTypes.string,
};

export default NewsComponent;
