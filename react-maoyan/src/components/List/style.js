import styled from 'styled-components'

export const ListWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 8rem;
    img {
        height: 8rem;
        border-radius: 0.4rem;
    }
    .list-content {
        margin-left: 0.5rem;
        padding-bottom: 0.75rem;
        p:first-child {
            font-size: 18px;
            font-weight: 800;
            color: black;
        }
        div {
            margin-top: 1rem;
        }
        div:last-child span { 
            color: #fca48f;
            background: #f8dda9;
        }
    }
`