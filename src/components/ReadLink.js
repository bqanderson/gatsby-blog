import styled from '@emotion/styled'
import { Link } from 'gatsby'

const ReadLink = styled(Link)`
  display: inline-block;
  font-size: 0.875rem;
  color: #9796A0;
  transition: all 300ms ease-in;

  ::after {
    display: block;
    content: '';
    background: #1c192e;
    width: 0px;
    height: 1px;
    transition: 300ms;
  }

  &:hover {
    color: #1c192e;

    &::after {
      width: 100%;
    }
  }
`
export default ReadLink
