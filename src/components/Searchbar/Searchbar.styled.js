import styled from '@emotion/styled';

const SearchbarHead = styled.header`
  top: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  left: 0;
`;
const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;
const SearchFormBtn = styled.button`
  display: inline-block;
  height: 48px;
  border: 0;

  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  width: 48px;
  &:hover {
    opacity: 1;
  }
`;
const SearchFormBtnLabel = styled.span`
  position: absolute;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
  width: 1px;
`;
const SearchFormInput = styled.input`
  display: inline-block;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  width: 100%;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
export {
  SearchbarHead,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
  SearchFormBtnLabel,
};
