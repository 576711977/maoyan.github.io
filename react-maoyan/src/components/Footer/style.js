import styled from 'styled-components'

export const FooterWrapper = styled.div` 
    z-index: 998;
    width: 100%;
    height: 2.5rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    a {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        color: gray;
        &.active {
            color: red;
        }
        i {
            font-size: 1rem;
        }
    }
`