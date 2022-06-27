import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 0.25rem;
    .header-img {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            margin: .01rem;
            width: 5.85rem;
            height: 9.75rem;
        }
        .header-rimg {
            display: flex;
            flex-direction: column;
            width: 5.85rem;
            height: auto;
            overflow: hidden;
            img {
                width: 5.85rem;
                height: 4.875rem;
            }
        }    
    }
`