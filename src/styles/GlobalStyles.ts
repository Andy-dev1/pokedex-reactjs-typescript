import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: whitesmoke;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    .rock {
    background-color: rgb(148, 81, 81);
    }

    .ghost {
    background-color: rgb(247, 247, 247);
    }

    .electric {
    background-color: rgb(255, 255, 161);
    }

    .bug {
    background-color: #F6D6A7;
    }

    .poison {
    background-color: #e0a7f6;
    }

    .normal {
    background-color: #F4F4F4;
    }

    .fairy {
    background-color: rgba(255, 192, 203, 0.863);
    }

    .fire {
    background-color: #FBE3DF;
    }

    .grass {
    background-color: #E2F9E1;
    }

    .water {
    background-color: #E0F1FD;
    }


    h3 {
    margin-bottom: 0.2rem;
    }
`;