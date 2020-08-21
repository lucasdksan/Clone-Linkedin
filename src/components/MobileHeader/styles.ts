import styled, { css } from 'styled-components';
import { FiMessageSquare as Icon } from 'react-icons/fi';

const IconMessage = css`
    height: 24px;
    width: 24px;
    color: var(--color-white);
    border-radius: 4px;
    flex-shrink: 0;
    margin-left: 17px;
`;

export const Container = styled.div`
    background: var(--color-link);
    padding: 0 16px;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    @media(min-width: 1180px){
        display: none;
    }
`;
export const ProfileCircle = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid var(--color-icons);
    flex-shrink: 0;
`;
export const SearchInput = styled.input`
    margin-left: 17px;
    width: 100%;
    background: var(--color-input);
    font-size: 14px;
    padding: 7.5px 8px;
    border: none;
    outline: none;
    border-radius: 2px;
    &:focus{
        background: var(--color-white);
    }
`;
export const MessageIcon = styled(Icon)`${IconMessage}`;
