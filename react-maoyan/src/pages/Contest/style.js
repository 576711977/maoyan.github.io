import styled from 'styled-components'

export const Wrapper = styled.div`
    .title-font {
        margin: 0.25rem;
        margin-left: 0.5rem;
        font-size: 20px;
        font-weight: 600;
    }
    .tabs-event {
        width: 100%;
        height: 2rem;
        display: flex;
        justify-content: space-between;
    }
    .event-wrapper {
        padding: 1rem;
    }
    .no-contest {
        padding: 3.5rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        p {
            font-size: 16px;
            font-weight: 800;
            color: #808090;
        }
    }
`